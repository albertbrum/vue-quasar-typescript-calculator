<template>
  <div>
    <q-card-section class="bg-grey-4">
      <div class="row q-col-gutter-sm">
        <CalculatorKey
          :buttonsKeys="enumBtnKeysCalc"
          :colorButton="checkerColorInput ? 'indigo' : 'grey-2'"
          :textColorButton="checkerColorInput ? 'white' : 'grey-8'"
        />
        <div class="col-6">
          <q-btn
            class="full-width text-h6"
            color="indigo"
            @click="actionsInputKeys.btnClearDisplay()"
          >
            CE
          </q-btn>
        </div>
        <div class="col-6">
          <q-btn
            class="full-width text-h6"
            color="orange"
            @click="actionsInputKeys.btnResult()"
          >
            =
          </q-btn>
        </div>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
  import CalculatorKey from './CalculatorKey.vue'
  import enumBtnKeysCalc from '../utils/enumBtnKeysCalc'
  import ActionsInputKeys from '../models/ActionsInputKeys'
  import CheckerInputBtn from '../utils/CheckersInput'

  import { defineProps, onMounted, computed } from 'vue'

  const inputButtons = ''
  const props = defineProps({
    buttonsKeys: String,
  })

  const checkerInput = new CheckerInputBtn()
  const actionsInputKeys = new ActionsInputKeys()

  const checkerColorInput = computed(() => {
    return checkerInput.notIsNumber(inputButtons)
  })
</script>

<style scoped></style>
