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
                          <HistoryComponent :expressions="componentModel.historyResults.value" />
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
                {{ componentModel.numericExpression.value + componentModel.displaySentence.value }}
              </div>
              <div class="text-h3 text-right">{{ componentModel.displayResult.value }}</div>
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
                      @click="actionKeyInput((inputKey2 = btn))"
                      :inputBtn="btn"
                    />
                  </div>

                  <div class="col-6">
                    <KeyboardComponent
                      color="indigo"
                      :input-btn="'CE'"
                      @click="componentModel.KeyInput('CE')"
                    />
                  </div>
                  <div class="col-6">
                    <KeyboardComponent
                      color="orange"
                      :inputBtn="'='"
                      @click="componentModel.KeyInput('=')"
                    />
                  </div>
                </div>
              </q-card-section>
            </div>
          </q-card>
        </div>
      </div>
      <div>numericExpression = {{ componentModel.numericExpression.value }}</div>
      <div>displaySentence = {{ resultDisplayComp }}</div>
      <div>displayResult = {{ componentModel.displayResult.value }}</div>
      <div>historyResults = {{ componentModel.historyResults.value }}</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import enumBtnKeysCalc from '../types/enumBtnKeysCalc'
  import KeyInput from '../models/KeysInputs'
  import CheckInput from '../utils/CheckerInputs'
  import HistoryComponent from '../components/HistoryComponent.vue'
  import { computed, PropType, ref } from 'vue'
  import KeyboardComponent from 'src/components/KeyboardComponent.vue'
  import DisplayOutput from 'src/models/DisplayOutput'

  const props = defineProps({
    enumKeysArrayPage: {
      type: Object as PropType<any>,
      default: () => enumBtnKeysCalc,
    },
    // displayOutput: {
    //   type: Object as PropType<any>,
    //   default: () => new DisplayOutput(),
    // },

    // checkerInputKey: {
    //   type: Object as PropType<any>,
    //   default: () => new CheckerInputBtn(),
    // },
    // componentModel: {
    //   type: Object as PropType<any>,
    //   default: () => new KeyInput(),
    // },
  })

  const componentModel = new KeyInput()
  const checkerInput = new CheckInput()
  const displayOutput = new DisplayOutput()

  // const clearDisplay: PropType<void | undefined> = () => {
  //   keyInput(inputBtn)
  // }

  // const resultDisplay = () => {
  //   keyInput.btnResult()
  // }

  // const historyResults = ref(componentModel.historyResults.value)
  const resultDisplayComp = ref('')
  const inputKey2: any = ref('')
  const displaySentence = ref(componentModel.displaySentence.value)

  const actionKeyInput = (inputKey2: any) => {
    componentModel.KeyInput(inputKey2)
    //resultDisplayComp = ref(componentModel.displayResult.value)
    console.log('>>>>>inputBtn', inputKey2)
    console.log('>>>>>displaySentence', componentModel.displaySentence.value)
    console.log('>>>>>displaySentence', componentModel.displaySentence.value)
    console.log('>>>>>displaySentence', displayOutput.displaySentence)
    console.log('>>>>>displaySentence', displaySentence.value)
    console.log('>>>>>numericExpression')
    console.log('>>>>>displayResult', componentModel.displayResult.value)
  }

  const inputKeyIs = (inputBtn: string) => {
    // console.log(checkerInput.CheckInput(inputBtn))
    if (checkerInput.CheckInput(inputBtn) === 'isNumber') {
      return true
    }
  }

  const messageNoHistory = computed(() => {
    return componentModel.historyResults.value.length === 1 ? 'Sem registros' : ''
  })

  //console.log('TAMANHO DA HISTORY', historyResults.value.length)
  // console.log(historyResults.value)
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
../types/enumBtnKeysCalc ../models/KeysInputs ../models/ActionsInputs../utils/CheckerInput
