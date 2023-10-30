<template>
  <div
    class="col-3"
    v-for="(btn, index) in props.buttonsKeys"
    :key="index"
  >
    <q-btn
      class="full-width text-h6"
      :color="colorButton"
      :text-color="textColorButton"
      @click="props.actionInputKey"
    >
      {{ btn }}
    </q-btn>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    buttonsKeys: String,
    actionInputKey: Function,
    colorButton: String,
    textColorButton: String,
  })
</script>

<style scoped></style>
