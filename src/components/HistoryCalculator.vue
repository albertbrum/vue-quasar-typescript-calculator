<template>
  <div
    v-for="(expression, index) in props.expressions"
    :key="index"
  >
    {{ expression }}
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    expressions: Array as () => string[],
  })
</script>
