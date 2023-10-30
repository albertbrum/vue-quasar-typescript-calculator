<template>
  <!-- <div
    v-for="(list, index) in props.expressions"
    :key="index"
  >
    {{ props.expressions[index] }}
  </div> -->

  <div
    v-for="(expression, index) in props.expressions"
    :key="index"
  >
    {{ expression }}
  </div>
</template>

<script setup lang="ts">
  // import ActionsInputKeys from '../models/ActionsInputKeys'
  // import CheckerInputBtn from '../utils/CheckersInput'
  // import { computed, PropType, reactive, ref, Ref } from 'vue'
  //   import { IHistoryResults } from '../interfaces/IHistoryResults'

  // const actionsInputKeys = new ActionsInputKeys()
  // const historyResultsArray = actionsInputKeys.historyResults.value

  // const historyResultsReactive = reactive(historyResultsArray)
  // console.log('testeREATIVE', reactive(historyResultsArray))

  // const props = defineProps({
  //   expressions,
  // })

  import { defineProps } from 'vue'

  const props = defineProps({
    expressions: Array as () => string[],
  })
</script>
