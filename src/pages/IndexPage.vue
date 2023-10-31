<template>
  <q-page>
    <div>
      <div class="row justify-center">
        <div class="col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3">
          <q-card>
            <q-card-section class="bg-primary">
              <div class="row justify-center items-center">
                <div class="col text-white text-h6">Calculadora</div>
                <div class="col text-white">
                  <q-expansion-item
                    icon="history"
                    label="Histórico"
                    header-class="bg-indigo-8 text-white"
                    expand-icon-class="text-white"
                  >
                    <q-card class="bg-grey-2 text-indigo">
                      <q-scroll-area
                        visible
                        style="height: 100px; max-width: 300px"
                      >
                        <q-card-section>
                          <HistoryExpansionItem :expressions="historyResults" />
                          <span>{{ messageNoHistory }}</span>
                        </q-card-section>
                      </q-scroll-area>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="display-calculator">
              <div class="text-h5 text-grey-6 text-right">
                {{ actionsInputKeys.numericExpression.value + actionsInputKeys.displaySentenceNumber.value }}
              </div>
              <div class="text-h3 text-right">{{ actionsInputKeys.displayResult.value }}</div>
            </q-card-section>

            <div>
              <q-card-section class="bg-grey-4">
                <div class="row q-col-gutter-sm">
                  <div
                    class="col-3"
                    v-for="(btn, index) in props.enumKeysArrayPage"
                    :key="index"
                  >
                    <CalculatorKey
                      :enumKeysArray="enumKeysArrayPage"
                      :textColorButton="checkerInput.notIsNumber(btn) ? 'white' : 'white'"
                      :color-button="checkerInput.notIsNumber(btn) ? 'grey' : 'indigo'"
                      @click="actionsInputKeys.btnKeyInput(btn), clickBtnLog(btn)"
                      :btn="btn"
                    />
                  </div>

                  <div class="col-6">
                    <CalculatorKey
                      class="full-width text-h6"
                      color="indigo"
                      @click="actionsInputKeys.btnClearDisplay"
                      btn="CE"
                    />
                  </div>
                  <div class="col-6">
                    <CalculatorKey
                      class="full-width text-h6"
                      color="orange"
                      btn="="
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>
      <div>{{ actionsInputKeys.numericExpression.value }}</div>
      <div>{{ actionsInputKeys.displaySentenceNumber.value }}</div>
      <div>{{ actionsInputKeys.displayResult.value }}</div>
      <div>{{ actionsInputKeys.historyResults.value }}</div>
      <div>{{ props.enumKeysArrayPage }}</div>
      <div>{{ enumBtnKeysCalc }}</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import enumBtnKeysCalc from '../utils/enumBtnKeysCalc'

  import ActionsInputKeys from '../models/ActionsInputKeys'
  import CheckerInputBtn from '../utils/CheckersInput'

  import HistoryExpansionItem from '../components/HistoryExpansionItem.vue'
  import { computed, PropType, ref } from 'vue'
  import CalculatorKey from 'src/components/CalculatorKey.vue'

  const props = defineProps({
    enumKeysArrayPage: {
      type: Object as PropType<any>,
      default: () => enumBtnKeysCalc,
    },
  })

  const checkerInput = new CheckerInputBtn()
  const actionsInputKeys = new ActionsInputKeys()

  const historyResults = ref(actionsInputKeys.historyResults.value)

  const messageNoHistory = computed(() => {
    return historyResults.value.length === 1 ? 'Sem registros' : ''
  })

  console.log('TAMANHO DA HISTORY', historyResults.value.length)
  console.log(historyResults.value)

  const clickBtnLog = (inputBtn: string) => {
    console.log('inputBtn', inputBtn)
    console.log('displaySentenceNumber', actionsInputKeys.displaySentenceNumber.value)
    console.log('numericExpression', actionsInputKeys.numericExpression.value)
    console.log('displayResult', actionsInputKeys.displayResult.value)
    console.log('historyResults', actionsInputKeys.historyResults.value)
    console.log('TAMANHO DA HISTORY', historyResults.value.length)
    console.log(historyResults)
  }
</script>

<style>
  .text-h5 {
    height: 23px;
  }

  .text-h3 {
    height: 50px;
  }

  .row-title {
    padding: 5px;
    margin: 10px;
    font-size: 20px;
  }

  .div {
    padding: 2;
  }
</style>
