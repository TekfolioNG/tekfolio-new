<template>
    <article v-if="post" class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <div class="bg-gradient-to-b from-[#7B3AC5] to-[#4527A0] text-white py-12">
            <div class="container mx-auto px-4 max-w-4xl">
                <NuxtLink to="/blog"
                    class="inline-flex items-center text-purple-100 hover:text-white mb-6 transition-colors">
                    ← Back to Blog
                </NuxtLink>

                <div v-if="post.categories && post.categories.length > 0" class="mb-4">
                    <span v-for="category in post.categories" :key="category._id"
                        class="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full mr-2">
                        {{ category.title }}
                    </span>
                </div>

                <h1 class="text-5xl font-bold mb-6">{{ post.title }}</h1>

                <div class="flex items-center gap-4 text-purple-100">
                    <div v-if="post.author" class="flex items-center gap-2">
                        <img v-if="post.author.image" :src="urlFor(post.author.image).width(40).height(40).url()"
                            :alt="post.author.name" class="w-10 h-10 rounded-full border-2 border-white/30" />
                        <span class="font-medium">{{ post.author.name }}</span>
                    </div>
                    <span>•</span>
                    <time>{{ formatDate(post.publishedAt) }}</time>
                </div>
            </div>
        </div>

        <div class="container mx-auto px-4 py-12 max-w-4xl">
            <!-- Main Image -->
            <figure v-if="post.mainImage" class="mb-12 -mt-20">
                <img :src="urlFor(post.mainImage).width(1200).url()" :alt="post.mainImage.alt || post.title"
                    class="w-full rounded-2xl shadow-2xl" />
                <figcaption v-if="post.mainImage.alt" class="text-center text-sm text-gray-600 mt-4">
                    {{ post.mainImage.alt }}
                </figcaption>
            </figure>

            <!-- Content -->
            <div class="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <PortableText v-if="post.body" :value="post.body" />
            </div>

            <!-- Back Link -->
            <div class="mt-12 text-center">
                <NuxtLink to="/blog"
                    class="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B3AC5] to-[#4527A0] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                    ← Back to All Posts
                </NuxtLink>
            </div>
        </div>
    </article>

    <div v-else-if="pending" class="container mx-auto px-4 py-20 text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent">
        </div>
        <p class="text-gray-600 mt-4">Loading post...</p>
    </div>

    <div v-else class="container mx-auto px-4 py-20 text-center">
        <h1 class="text-4xl font-bold mb-4 text-gray-900">Post Not Found</h1>
        <p class="text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
        <NuxtLink to="/blog"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B3AC5] to-[#4527A0] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
            ← Back to Blog
        </NuxtLink>
    </div>
</template>

<script setup>
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
            console.warn('Sanity is not configured, cannot fetch post')
            return null
        }

        try {
            const result = await client.fetch(query, { slug: route.params.slug })
            return result
        } catch (err) {
            console.error('Failed to fetch blog post:', err)
            return null
        }
    },
    {
        default: () => null
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
/* Style the Portable Text content */
.bg-white :deep(p) {
    color: #111827;
    /* gray-900 */
}

.bg-white :deep(p:first-of-type) {
    font-size: 1.2rem;
    /* h3 size */
    font-weight: 400;
    /* bold */
    font-style: italic;
    line-height: 2rem;
    margin-bottom: 1.2rem;
}
</style>