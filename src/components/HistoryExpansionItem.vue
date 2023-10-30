<template>
  <div
    v-for="(expression, index) in props.expressions"
    :key="index"
  >
    {{ expression }}
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    expressions: Array as () => string[],
  })
</script>
