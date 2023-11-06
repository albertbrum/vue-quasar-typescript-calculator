<template>
  <q-btn
    class="full-width text-h6"
    :color="props.colorButton"
    :text-color="props.textColorButton"
  >
    {{ props.inputBtn }}
  </q-btn>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  const props = defineProps({
    enumKeysArray: Object as PropType<string[]>,
    colorButton: String,
    textColorButton: String,
    inputBtn: String,
  })
</script>

<style scoped></style>
