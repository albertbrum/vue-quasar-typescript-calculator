<template>
  <q-expansion-item icon="history" label="Histórico" header-class="bg-indigo-8 text-white" expand-icon-class="text-white">
    <q-card class="bg-grey-2 text-indigo">
      <q-scroll-area visible style="height: 100px; max-width: 300px;">
        <q-card-section>
          <!-- <q-card v-for="(results, index) in historyResults" :key="index"> -->
          <!-- <div v-if="historyResults.length === 1 || index !== 0"> -->
          {{ results }}
          <!-- </div> -->
          <!-- </q-card> -->
        </q-card-section>
      </q-scroll-area>
    </q-card>
  </q-expansion-item>
</template>


<script setup lang="ts">
import { defineProps } from 'vue';


// const actionsInputKeys = new ActionsInputKeys()
// const historyResults = computed(() => actionsInputKeys.historyResults.value)

defineProps(['results'])
defineEmits(['enlarge-text'])



// const actionsInputKeys = new ActionsInputKeys()
// console.log(actionsInputKeys.historyResults.value)

// const historyResults: Ref<string> = ref(actionsInputKeys.historyResults)
// console.log('asdasdas', historyResults)

// const props: Ref<string> = defineProps([historyResults: Ref<string>])


// const historyResultsD = computed(() => {
//    = actionsInputKeys.historyResults.value
// }
</script>

