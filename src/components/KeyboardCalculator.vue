<template>
  <q-btn
    class="full-width text-h6"
    :color="props.colorButton"
    :text-color="props.textColorButton"
    @click="props.actionKey"
  >
    {{ props.btn }}
  </q-btn>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  const props = defineProps({
    enumKeysArray: Object as PropType<string[]>,
    actionKey: Function as PropType<() => void | undefined>,
    colorButton: String,
    textColorButton: String,
    btn: String,

  })
</script>

<style scoped></style>
