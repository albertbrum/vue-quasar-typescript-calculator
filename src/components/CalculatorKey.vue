<template>
  <q-btn
    class="full-width text-h6"
    :color="props.colorButton"
    :text-color="props.textColorButton"
    :click="props.actionInputKey"
  >
    {{ props.btn }}
  </q-btn>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  const props = defineProps({
    enumKeysArray: Object as PropType<string[]>,
    actionInputKey: Function,
    colorButton: String,
    textColorButton: String,
    btn: String,
  })
</script>

<style scoped></style>
