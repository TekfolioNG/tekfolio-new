<template>
  <section class="py-20 bg-gray-50 -pt-16">
    <div class="container mx-auto px-6 sm:px-8 lg:px-12">
      <!-- Section Header -->
      <div class="text-center md:text-left mb-12">
        <h2 class="text-4xl md:text-5xl font-semibold mb-4">
          <span class="bg-linear-to-r from-[#7B3AC5] to-[#4527A0] bg-clip-text text-transparent">
            Blog & Insights
          </span>
        </h2>
      </div>

      <!-- Loading State -->
      <div v-if="pending" class="text-center py-12">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent">
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-600">Unable to load blog posts</p>
      </div>

      <!-- Blog Posts Grid -->
      <div v-else-if="posts && posts.length > 0" class="grid md:grid-cols-3 gap-8 mb-12">
        <NuxtLink v-for="post in posts.slice(0, 3)" :key="post._id" :to="`/blog/${post.slug.current}`"
          class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <!-- Post Image -->
          <div class="aspect-video overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50">
            <img v-if="post.mainImage" :src="urlFor(post.mainImage).width(600).height(400).url()"
              :alt="post.mainImage.alt || post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>

          <!-- Post Content -->
          <div class="p-6">
            <!-- Category Badge -->
            <div v-if="post.categories && post.categories.length > 0" class="mb-3">
              <span v-for="category in post.categories" :key="category._id"
                class="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mr-2 font-medium">
                {{ category.title }}
              </span>
            </div>

            <!-- Post Title -->
            <h3 class="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
              {{ post.title }}
            </h3>

            <!-- Post Excerpt -->
            <p v-if="post.excerpt" class="text-gray-900 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>

            <!-- Read Insight Link -->
            <div class="mb-4">
              <span
                class="inline-flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                Read Insight
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>

            <!-- Post Meta -->
            <div class="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
              <span v-if="post.author" class="font-medium">{{ post.author.name }}</span>
              <time>{{ formatDate(post.publishedAt) }}</time>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <NuxtLink to="/blog"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-[#7B3AC5] to-[#4527A0] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
          View All Posts
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const { client, urlFor } = useSanity()

// Fetch latest 3 blog posts
const query = `*[_type == "post"] | order(publishedAt desc)[0..2] {
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
  'homepage-blog-posts',
  () => client.fetch(query)
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>