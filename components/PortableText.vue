<!-- components/home/PortableText.vue -->
<template>
    <div class="portable-text">
        <template v-for="(group, gIndex) in groupedBlocks" :key="gIndex">
            <ul v-if="group.type === 'bullet'" class="list-disc list-outside pl-6 mb-4 space-y-2 text-[#E5E8ED] text-base md:text-lg">
                <li v-for="(block, i) in group.blocks" :key="i" class="leading-relaxed">
                    <component v-for="(child, childIndex) in block.children" :key="childIndex"
                        :is="renderChild(child, block.markDefs || [])" />
                </li>
            </ul>

            <ol v-else-if="group.type === 'number'" class="list-decimal list-outside pl-6 mb-4 space-y-2 text-[#E5E8ED] text-base md:text-lg">
                <li v-for="(block, i) in group.blocks" :key="i" class="leading-relaxed">
                    <component v-for="(child, childIndex) in block.children" :key="childIndex"
                        :is="renderChild(child, block.markDefs || [])" />
                </li>
            </ol>

            <component v-else :is="getComponent(group.block)" />
        </template>
    </div>
</template>

<script setup>
import { h, computed } from 'vue'
import CodeBlock from '~/components/home/CodeBlock.vue'

const props = defineProps({
    value: {
        type: Array,
        required: true
    }
})

const { urlFor } = useSanity()

// Groups consecutive bullet/number items into a single list, instead of one
// <ul>/<ol> per item. Everything else passes through as its own entry.
const groupedBlocks = computed(() => {
    const groups = []

    for (const block of props.value) {
        const isBullet = block._type === 'block' && block.listItem === 'bullet'
        const isNumber = block._type === 'block' && block.listItem === 'number'
        const last = groups[groups.length - 1]

        if (isBullet && last?.type === 'bullet') {
            last.blocks.push(block)
        } else if (isNumber && last?.type === 'number') {
            last.blocks.push(block)
        } else if (isBullet) {
            groups.push({ type: 'bullet', blocks: [block] })
        } else if (isNumber) {
            groups.push({ type: 'number', blocks: [block] })
        } else {
            groups.push({ type: 'other', block })
        }
    }

    return groups
})

const getComponent = (block) => {
    if (block._type === 'image') {
        return () => h('figure', { class: 'my-8' }, [
            h('img', {
                src: urlFor(block).width(800).url(),
                alt: block.alt || '',
                class: 'w-full rounded-lg shadow-md shadow-black/40'
            }),
            block.alt ? h('figcaption', {
                class: 'text-center text-sm text-[#E5E8ED]/55 mt-2'
            }, block.alt) : null
        ])
    }

    // Custom code block object, added in schemas/blockContent.js.
    // Rendered directly since this component doesn't use the serializer/
    // "components" prop pattern that @portabletext/vue supports.
    if (block._type === 'codeBlock') {
        return () => h(CodeBlock, { value: block })
    }

    if (block._type === 'block' && !block.listItem) {
        const style = block.style || 'normal'
        const children = renderChildren(block.children || [], block.markDefs || [])

        switch (style) {
            case 'h1':
                return () => h('h1', { class: 'text-4xl font-bold mt-8 mb-4 text-[#FAFBFC]' }, children)
            case 'h2':
                return () => h('h2', { class: 'text-3xl font-bold mt-6 mb-3 text-[#FAFBFC]' }, children)
            case 'h3':
                return () => h('h3', { class: 'text-2xl font-bold mt-4 mb-2 text-[#FAFBFC]' }, children)
            case 'h4':
                return () => h('h4', { class: 'text-xl font-bold mt-3 mb-2 text-[#FAFBFC]' }, children)
            case 'blockquote':
                return () => h('blockquote', {
                    class: 'border-l-4 border-[#7B3AC5] pl-4 italic my-4 text-[#E5E8ED] text-base md:text-lg'
                }, children)
            default:
                return () => h('p', { class: 'mb-4 leading-relaxed text-[#E5E8ED] text-base md:text-lg' }, children)
        }
    }

    return () => null
}

const applyMarks = (content, marks, markDefs) => {
    let element = content

    marks.forEach(mark => {
        if (mark === 'strong') {
            element = h('strong', { class: 'font-bold text-[#FAFBFC]' }, element)
        } else if (mark === 'em') {
            element = h('em', { class: 'italic' }, element)
        } else if (mark === 'code') {
            element = h('code', {
                class: 'bg-white/10 px-2 py-1 rounded text-sm font-mono text-[#D8B4F0]'
            }, element)
        } else if (mark === 'underline') {
            element = h('u', {}, element)
        } else if (mark === 'strike-through') {
            element = h('s', {}, element)
        } else {
            const markDef = markDefs.find(def => def._key === mark)

            if (markDef && markDef._type === 'link') {
                const href = markDef.href || '#'
                const isExternal = href.startsWith('http')

                element = h('a', {
                    href: href,
                    target: isExternal ? '_blank' : '_self',
                    rel: isExternal ? 'noopener noreferrer' : undefined,
                    class: 'text-[#D8B4F0] font-semibold underline decoration-[#7B3AC5]/40 hover:text-white hover:decoration-[#D8B4F0] transition-all duration-300'
                }, element)
            }
        }
    })

    return element
}

const renderChild = (child, markDefs = []) => {
    if (child._type === 'span') {
        const content = child.text || ''
        if (!child.marks || child.marks.length === 0) {
            return () => content
        }
        return () => applyMarks(content, child.marks, markDefs)
    }
    return () => ''
}

const renderChildren = (children, markDefs = []) => {
    return children.map(child => {
        if (child._type === 'span') {
            const content = child.text || ''
            if (!child.marks || child.marks.length === 0) {
                return content
            }
            return applyMarks(content, child.marks, markDefs)
        }
        return ''
    })
}
</script>

<style scoped>
.portable-text :deep(a) {
    color: #D8B4F0;
    text-decoration: underline;
    text-decoration-color: rgba(123, 58, 197, 0.4);
    transition: all 0.3s ease;
}

.portable-text :deep(a:hover) {
    color: #FAFBFC;
    text-decoration-color: #D8B4F0;
}

.portable-text :deep(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.portable-text :deep(ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.portable-text :deep(li) {
    margin-bottom: 0.5rem;
    color: #E5E8ED;
    font-size: 1rem;
}

@media (min-width: 768px) {
    .portable-text :deep(li) {
        font-size: 1.125rem;
    }
}

.portable-text :deep(li)::marker {
    color: #7B3AC5;
}

.portable-text :deep(li strong) {
    color: #FAFBFC;
}

.portable-text :deep(code) {
    background: rgba(255, 255, 255, 0.06);
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: 'Courier New', monospace;
    color: #D8B4F0;
}

.portable-text :deep(strong) {
    font-weight: 700;
}

.portable-text :deep(em) {
    font-style: italic;
}
</style>