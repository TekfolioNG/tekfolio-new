<template>
  <div class="code-block">
    <div v-if="value.language" class="code-block__lang">{{ value.language }}</div>
    <pre><code>{{ value.code }}</code></pre>
  </div>
</template>

<script setup>
defineProps({
  value: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.code-block {
  position: relative;
  margin: 1.5rem 0;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid rgba(229, 232, 237, 0.1);
  background-color: #050508;
}

.code-block__lang {
  font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(229, 232, 237, 0.45);
  padding: 0.6rem 1rem 0;
}

.code-block pre {
  margin: 0;
  padding: 1rem;
  overflow-x: auto;
}

.code-block code {
  font-family: ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #E5E8ED;
  background: none;
  padding: 0;
  border-radius: 0;
}
</style>