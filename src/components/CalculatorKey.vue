<template>
  <div
    class="col-3"
    v-for="(btn, index) in props.enumKeysArray"
    :key="index"
  >
    <q-btn
      class="full-width text-h6"
      color="props.colorButton"
      text-color="props.colorButton"
      @click="props.actionInputKey"
    >
      {{ btn }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  const props = defineProps({
    enumKeysArray: Array as PropType<any[]>,
    actionInputKey: Function,
    colorButton: String,
    textColorButton: String,
  })
</script>

<style scoped></style>
