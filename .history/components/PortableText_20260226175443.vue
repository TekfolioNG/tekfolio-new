<template>
    <div class="portable-text">
        <component v-for="(block, index) in value" :key="index" :is="getComponent(block)" :value="block" />
    </div>
</template>

<script setup>
import { h } from 'vue'

const props = defineProps({
    value: {
        type: Array,
        required: true
    }
})

const { urlFor } = useSanity()

const getComponent = (block) => {
    if (block._type === 'image') {
        return () => h('figure', { class: 'my-8' }, [
            h('img', {
                src: urlFor(block).width(800).url(),
                alt: block.alt || '',
                class: 'w-full rounded-lg shadow-md'
            }),
            block.alt ? h('figcaption', {
                class: 'text-center text-sm text-gray-600 mt-2'
            }, block.alt) : null
        ])
    }

    if (block._type === 'block') {
        const style = block.style || 'normal'
        const children = renderChildren(block.children || [], block.markDefs || [])

        switch (style) {
            case 'h1':
                return () => h('h1', { class: 'text-4xl font-bold mt-8 mb-4 text-gray-900' }, children)
            case 'h2':
                return () => h('h2', { class: 'text-3xl font-bold mt-6 mb-3 text-gray-900' }, children)
            case 'h3':
                return () => h('h3', { class: 'text-2xl font-bold mt-4 mb-2 text-gray-900' }, children)
            case 'h4':
                return () => h('h4', { class: 'text-xl font-bold mt-3 mb-2 text-gray-900' }, children)
            case 'blockquote':
                return () => h('blockquote', {
                    class: 'border-l-4 border-purple-600 pl-4 italic my-4 text-gray-700'
                }, children)
            default:
                return () => h('p', { class: 'mb-4 leading-relaxed text-gray-700' }, children)
        }
    }

    return () => null
}

const renderChildren = (children, markDefs = []) => {
    return children.map(child => {
        if (child._type === 'span') {
            let content = child.text || ''

            // If no marks, return plain text
            if (!child.marks || child.marks.length === 0) {
                return content
            }

            // Process marks and wrap content accordingly
            let element = content

            child.marks.forEach(mark => {
                // Handle simple string marks (strong, em, code, etc.)
                if (mark === 'strong') {
                    element = h('strong', { class: 'font-bold' }, element)
                } else if (mark === 'em') {
                    element = h('em', { class: 'italic' }, element)
                } else if (mark === 'code') {
                    element = h('code', {
                        class: 'bg-gray-100 px-2 py-1 rounded text-sm font-mono text-purple-700'
                    }, element)
                } else if (mark === 'underline') {
                    element = h('u', {}, element)
                } else if (mark === 'strike-through') {
                    element = h('s', {}, element)
                } else {
                    // Handle complex marks (links, etc.) - they reference markDefs
                    const markDef = markDefs.find(def => def._key === mark)

                    if (markDef && markDef._type === 'link') {
                        const href = markDef.href || '#'
                        const isExternal = href.startsWith('http')

                        element = h('a', {
                            href: href,
                            target: isExternal ? '_blank' : '_self',
                            rel: isExternal ? 'noopener noreferrer' : undefined,
                            class: 'text-purple-700 font-semibold underline decoration-purple-300 hover:text-purple-900 hover:decoration-purple-700 transition-all duration-300'
                        }, element)
                    }
                }
            })

            return element
        }
        return ''
    })
}
</script>

<style scoped>
.portable-text :deep(a) {
    color: #7C3AED;
    text-decoration: underline;
    text-decoration-color: rgba(124, 58, 237, 0.3);
    transition: all 0.3s ease;
}

.portable-text :deep(a:hover) {
    color: #5B21B6;
    text-decoration-color: rgba(91, 33, 182, 0.7);
}

.portable-text :deep(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
}

.portable-text :deep(ol) {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #374151;
}

.portable-text :deep(li) {
    margin-bottom: 0.5rem;
}

.portable-text :deep(code) {
    background: #F3F4F6;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    font-family: 'Courier New', monospace;
    color: #7C3AED;
}

.portable-text :deep(strong) {
    font-weight: 700;
}

.portable-text :deep(em) {
    font-style: italic;
}
</style>