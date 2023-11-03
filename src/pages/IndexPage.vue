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
                          <HistoryComponent :expressions="keyInput.historyResults.value" />
                          <span>{{ keyInput.historyResults.value }}</span>
                        </q-card-section>
                      </q-scroll-area>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="display-calculator">
              <div class="text-h5 text-grey-6 text-right">
                {{ keyInput.numericExpression.value }}
              </div>
              <div class="text-h3 text-right">{{ keyInput.numericExpression.value }}</div>
            </q-card-section>

            <div>
              <q-card-section class="bg-grey-4">
                <div class="row q-col-gutter-sm">
                  <div
                    class="col-3"
                    v-for="(btn, index) in props.enumKeysArrayPage"
                    :key="index"
                  >
                    <KeyboardComponent
                      :enumKeysArray="enumKeysArrayPage"
                      :textColorButton="inputKeyIs(btn) ? 'indigo' : 'white'"
                      :color-button="inputKeyIs(btn) ? 'grey-2' : 'indigo'"
                      @click="actionKeyInput(btn)"
                      :inputBtn="btn"
                    />
                  </div>

                  <div class="col-6">
                    <KeyboardComponent
                      color="indigo"
                      :input-btn="'CE'"
                      @click="keyInput.KeyInput('CE')"
                    />
                  </div>
                  <div class="col-6">
                    <KeyboardComponent
                      color="orange"
                      :inputBtn="'='"
                      @click="keyInput.KeyInput('=')"
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>
      <div>numericExpression = {{ keyInput.numericExpression.value }}</div>
      <div>displaySentence = {{ displayResultComp }}</div>
      <div>displayResult = {{ displaySentenceComp }}</div>
      <div>historyResults = {{ keyInput.historyResults.value }}</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import enumBtnKeysCalc from '../types/enumBtnKeysCalc'
  import KeyInput from '../models/KeysInputs'
  import CheckInput from '../utils/CheckerInputs'
  import HistoryComponent from '../components/HistoryComponent.vue'
  import { PropType } from 'vue'
  import KeyboardComponent from 'src/components/KeyboardComponent.vue'
  import MainCalculator from 'src/models/Main'

  const props = defineProps({
    enumKeysArrayPage: {
      type: Object as PropType<any>,
      default: () => enumBtnKeysCalc,
    },
  })

  const mainInstance = new MainCalculator()
  const keyInput = new KeyInput()
  const checkerInput = new CheckInput()

  let displayResultComp = mainInstance.displayResult
  let displaySentenceComp = mainInstance.displaySentence

  const actionKeyInput = (inputKey: any) => {
    keyInput.KeyInput(inputKey)
    console.log('>>>>>Input KEY', inputKey)
    console.log('>>>>>displaySentence', keyInput.displaySentence.value)
    console.log('>>>>>displayResult', keyInput.displayResult.value)
  }

  const inputKeyIs = (inputBtn: string) => {
    return checkerInput.CheckInput(inputBtn) === 'isNumber'
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
