<template>
<q-card-section class="display-calculator">
  <div class="text-h5 text-grey-6 text-right">
    {{ props.displaySentenceComp }}
  </div>
  <div class="text-h3 text-right">{{ props.displayResultComp }}</div>
</q-card-section>

</template>


<script setup lang="ts">
  import { PropType } from 'vue'
  const props = defineProps({
    displayResultComp: String,
    displaySentenceComp: String,
  })
</script>
