<template>
  <q-card>
    {{ valueModel }}
  </q-card>
</template>

<script setup lang="ts">
  defineProps(['valueModel'])
  defineEmits(['update:valueModel'])
</script>
