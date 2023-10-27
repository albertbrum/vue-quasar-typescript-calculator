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
                          <!-- <div
                            v-for="(result, index) in historyResults"
                            :key="index"
                          >
                            <div v-if="historyResults.length === 1 || index !== 0">
                              {{ result }}
                            </div>
                          </div> -->
                          <HistoryExpansionItem
                            v-for="(item, index) in historyResults"
                            :key="index"
                            :value-model="historyResults"
                          >
                          </HistoryExpansionItem>
                        </q-card-section>
                      </q-scroll-area>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-h5 text-grey-6 text-right">
                {{ actionsInputKeys.numericExpression.value + actionsInputKeys.displaySentenceNumber.value }}
              </div>
              <div class="text-h3 text-right">{{ actionsInputKeys.displayResult.value }}</div>
            </q-card-section>
            <q-card-section class="bg-grey-4">
              <div class="row q-col-gutter-sm">
                <div
                  class="col-3"
                  v-for="(btn, index) in enumBtnKeysCalc"
                  :key="index"
                >
                  <q-btn
                    class="full-width text-h6"
                    :color="checkerInput.notIsNumber(btn) ? 'indigo' : 'grey-2'"
                    :text-color="checkerInput.notIsNumber(btn) ? 'white' : 'grey-8'"
                    @click="actionsInputKeys.btnKeyInput(btn), clickBtnLog(btn)"
                  >
                    {{ btn }}
                  </q-btn>
                </div>
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
          </q-card>
        </div>
      </div>
      <div>{{ actionsInputKeys.numericExpression.value }}</div>
      <div>{{ actionsInputKeys.displaySentenceNumber.value }}</div>
      <div>{{ actionsInputKeys.displayResult.value }}</div>
      <div>{{ actionsInputKeys.historyResults.value }}</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import enumBtnKeysCalc from '../utils/enumBtnKeysCalc'
  import ActionsInputKeys from '../utils/ActionsInputKeys'
  import CheckerInputBtn from '../utils/CheckersInput'

  import HistoryExpansionItem from '../components/HistoryExpansionItem.vue'
  import { ref } from 'vue'

  // const checkerInput = new CheckerInputBtn(inputBtn)
  // const actionsInputKeys = new ActionsInputKeys(checkerInput)
  // const displaySentenceNumber = '';
  // const numericExpression = actionsInputKeys.numericExpression
  // const displayResult = actionsInputKeys.displayResult
  // const historyResults = [''];

  const checkerInput = new CheckerInputBtn()
  const actionsInputKeys = new ActionsInputKeys()

  const historyResults = actionsInputKeys.historyResults.value
  // const displaySentenceNumber = ref('')
  // const numericExpression = actionsInputKeys.numericExpression
  // const displayResult = actionsInputKeys.displayResult
  // const historyResults = actionsInputKeys.historyResults

  // const displaySentenceNumber = actionsInputKeys.displaySentenceNumber
  // const numericExpression = actionsInputKeys.numericExpression
  // const displayResult = actionsInputKeys.displayResult
  // const historyResults = actionsInputKeys.historyResults

  const clickBtnLog = (inputBtn: string) => {
    console.log('inputBtn', inputBtn)
    console.log('displaySentenceNumber', actionsInputKeys.displaySentenceNumber.value)
    console.log('numericExpression', actionsInputKeys.numericExpression.value)
    console.log('displayResult', actionsInputKeys.displayResult.value)
    console.log('historyResults', actionsInputKeys.historyResults.value)
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
./utils/CheckersInput
