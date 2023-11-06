<template>
  <div>
    <div
      v-for="(list, index) in props.expressions"
      :key="index"
    >
      {{ list }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    expressions: Array as () => string[],
  })
</script>
