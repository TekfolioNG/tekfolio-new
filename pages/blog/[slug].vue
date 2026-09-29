<template>
    <article v-if="post" class="min-h-screen bg-[#0B0B14]">
        <!-- Hero Section: dark base with a soft brand-purple glow, matching the
             homepage hero's ambient-glow treatment rather than a bright flat fill -->
        <div class="relative isolate overflow-hidden bg-[#150C29] text-white py-12">
            <div
                class="pointer-events-none absolute -top-32 left-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#6B2A61] opacity-40 blur-[110px]"
                aria-hidden="true" />

            <div class="relative z-10 container mx-auto px-4 max-w-4xl">
                <NuxtLink to="/blog"
                    class="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors">
                    ← Back to Blog
                </NuxtLink>

                <div v-if="post.categories && post.categories.length > 0" class="mb-4">
                    <span v-for="category in post.categories" :key="category._id"
                        class="inline-block bg-white/10 border border-white/15 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mr-2">
                        {{ category.title }}
                    </span>
                </div>

                <h1 class="display text-5xl font-bold mb-6">{{ post.title }}</h1>

                <div class="flex items-center gap-4 text-purple-100">
                    <div v-if="post.author" class="flex items-center gap-2">
                        <img v-if="post.author.image" :src="urlFor(post.author.image).width(40).height(40).url()"
                            :alt="post.author.name" loading="lazy" decoding="async"
                            class="w-10 h-10 rounded-full border-2 border-white/30" />
                        <span class="font-medium">{{ post.author.name }}</span>
                    </div>
                    <span>•</span>
                    <time>{{ formatDate(post.publishedAt) }}</time>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <!-- Main Image -->
            <figure v-if="post.mainImage" class="mb-12">
                <img :src="urlFor(post.mainImage).width(1200).url()" :alt="post.mainImage.alt || post.title"
                    loading="lazy" decoding="async" class="w-full rounded-2xl shadow-2xl shadow-black/40" />
                <figcaption v-if="post.mainImage.alt" class="text-center text-sm text-[#E5E8ED]/55 mt-4">
                    {{ post.mainImage.alt }}
                </figcaption>
            </figure>

            <!-- Content -->
            <div class="prose-panel rounded-2xl shadow-2xl shadow-black/30 p-8 md:p-12">
                <PortableText v-if="post.body" :value="post.body" />
            </div>

            <!-- Back Link -->
            <div class="mt-12 text-center">
                <NuxtLink to="/blog"
                    class="inline-flex items-center gap-2 bg-linear-to-r from-[#7B3AC5] to-[#4527A0] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    ← Back to All Posts
                </NuxtLink>
            </div>
        </div>
    </article>

    <div v-else-if="pending" class="min-h-screen bg-[#0B0B14] container mx-auto px-4 py-20 text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#7B3AC5] border-t-transparent">
        </div>
        <p class="text-[#E5E8ED]/60 mt-4">Loading post...</p>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "home"
});

const route = useRoute()
const { client, urlFor, isConfigured } = useSanity()

const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage {
    asset,
    alt
  },
  publishedAt,
  excerpt,
  body,
  author->{
    name,
    slug,
    image,
    bio
  },
  categories[]->{
    _id,
    title,
    slug
  }
}`

const { data: post, pending } = await useAsyncData(
    `post-${route.params.slug}`,
    async () => {
        if (!isConfigured || !client) {
            throw createError({ statusCode: 503, statusMessage: 'Content service unavailable' })
        }
        return await client.fetch(query, { slug: route.params.slug })
    }
)

if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

useHead({
    title: () => post.value ? `${post.value.title} - Tekfolio` : 'Post - Tekfolio',
    meta: [
        {
            name: 'description',
            content: () => post.value?.excerpt || 'Read this article on Tekfolio'
        },
        {
            property: 'og:title',
            content: () => post.value?.title || 'Tekfolio Blog'
        },
        {
            property: 'og:description',
            content: () => post.value?.excerpt || ''
        },
        {
            property: 'og:image',
            content: () => post.value?.mainImage ? urlFor(post.value.mainImage).width(1200).url() : ''
        }
    ]
})
</script>

<style scoped>
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.prose-panel {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(229, 232, 237, 0.1);
}

/* Style the Portable Text content */
.prose-panel :deep(p) {
    color: #E5E8ED;
}

.prose-panel :deep(p:first-of-type) {
    font-size: 1.2rem;
    font-weight: 400;
    font-style: italic;
    line-height: 2rem;
    margin-bottom: 1.2rem;
    color: #FAFBFC;
}

.prose-panel :deep(h1),
.prose-panel :deep(h2),
.prose-panel :deep(h3),
.prose-panel :deep(h4) {
    color: #FAFBFC;
}

.prose-panel :deep(a) {
    color: #D8B4F0;
    text-decoration: underline;
    text-underline-offset: 2px;
}

.prose-panel :deep(strong) {
    color: #FAFBFC;
}

.prose-panel :deep(em) {
    color: #E5E8ED;
}

.prose-panel :deep(ul),
.prose-panel :deep(ol) {
    color: #E5E8ED;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}

.prose-panel :deep(ul) {
    list-style-type: disc;
}

.prose-panel :deep(ol) {
    list-style-type: decimal;
}

.prose-panel :deep(li) {
    color: #E5E8ED;
    margin-bottom: 0.5rem;
}

.prose-panel :deep(li)::marker {
    color: #7B3AC5;
}

.prose-panel :deep(blockquote) {
    color: #E5E8ED;
    border-left: 3px solid #7B3AC5;
    padding-left: 1.25rem;
    font-style: italic;
    margin: 1.5rem 0;
}

.prose-panel :deep(code) {
    color: #D8B4F0;
    background-color: rgba(255, 255, 255, 0.06);
    padding: 0.15rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.9em;
}
</style>