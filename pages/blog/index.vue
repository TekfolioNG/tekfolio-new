<template>
    <div class="min-h-screen bg-[#0B0B14]">
        <div class="container mx-auto px-6 sm:px-8 lg:px-12 py-24">

            <!-- Page heading -->
            <div class="max-w-2xl">
                <p class="eyebrow text-xs text-[#E5E8ED]/60">Insights</p>
                <h1 class="display mt-4 text-3xl font-bold leading-tight text-[#FAFBFC] sm:text-4xl">
                    From the Tekfolio Blog
                </h1>
                            </div>
            <div class="mt-10 border-t border-[#E5E8ED]/10" />

            <div v-if="pending" class="text-center py-20">
                <div
                    class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#7B3AC5] border-t-transparent">
                </div>
                <p class="text-[#E5E8ED]/60 mt-4">Loading posts...</p>
            </div>

            <div v-else-if="error" class="text-center py-20">
                <p class="text-red-400">Error loading posts. Please try again.</p>
            </div>

            <div v-else-if="!posts || posts.length === 0" class="text-center py-20">
                <p class="text-[#E5E8ED]/60">No blog posts yet. Check back soon!</p>
            </div>

            <div v-else class="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <NuxtLink v-for="post in posts" :key="post._id" :to="`/blog/${post.slug.current}`"
                    class="group block rounded-xl overflow-hidden bg-white/[0.03] border border-[#E5E8ED]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#E5E8ED]/20 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)]">
                    <div class="aspect-video overflow-hidden bg-gradient-to-br from-[#3E1739] to-[#0B0B14]">
                        <img v-if="post.mainImage" :src="urlFor(post.mainImage).width(600).height(400).url()"
                            :alt="post.mainImage.alt || post.title" loading="lazy" decoding="async"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>

                    <div class="p-6">
                        <div v-if="post.categories && post.categories.length > 0" class="mb-3">
                            <span v-for="category in post.categories" :key="category._id"
                                class="inline-block bg-[#7B3AC5]/15 border border-[#7B3AC5]/25 text-[#D8B4F0] text-xs px-3 py-1 rounded-full mr-2 font-medium">
                                {{ category.title }}
                            </span>
                        </div>

                        <h2 class="display text-2xl font-bold mb-3 text-[#FAFBFC] group-hover:text-[#D8B4F0] transition-colors">
                            {{ post.title }}
                        </h2>

                        <p v-if="post.excerpt" class="text-[#E5E8ED]/65 mb-4 line-clamp-3">
                            {{ post.excerpt }}
                        </p>

                        <div class="flex items-center justify-between text-sm text-[#E5E8ED]/50 pt-4 border-t border-[#E5E8ED]/10">
                            <span v-if="post.author" class="font-medium">{{ post.author.name }}</span>
                            <time>{{ formatDate(post.publishedAt) }}</time>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "home"
});

const { client, urlFor } = useSanity()

const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage {
    asset,
    alt
  },
  publishedAt,
  author->{
    name,
    slug
  },
  categories[]->{
    _id,
    title,
    slug
  }
}`

const { data: posts, pending, error } = await useAsyncData(
    'blog-posts',
    async () => {
        if (!client) {
            throw new Error('Sanity client is not configured')
        }
        return await client.fetch(query)
    }
)

const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

useHead({
    title: 'Blog - Tekfolio',
    meta: [
        { name: 'description', content: 'Read the latest articles and insights from Tekfolio' }
    ]
})
</script>

<style scoped>
.eyebrow,
.display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
}

.eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.28em;
    font-weight: 500;
}
</style>