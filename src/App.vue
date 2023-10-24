<template>
  <div>
    <div class="row justify-center">
      <div class="col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xl-3">
        <q-card>
          <q-card-section class="bg-primary">
            <div class="row justify-center items-center">
              <div class="col text-white text-h6"> Calculadora </div>
              <div class="col text-white">
                <q-expansion-item icon="history" label="Histórico" header-class="bg-indigo-8 text-white"
                  expand-icon-class="text-white">
                  <q-card class="bg-grey-2 text-indigo">
                    <q-scroll-area visible style="height: 100px; max-width: 300px;">
                      <q-card-section v-for="(div, index) in historyResults" :key="index">
                        <div v-if="historyResults.length === 1 || index !== 0">
                          {{ historyResults[index] }}
                        </div>
                      </q-card-section>
                    </q-scroll-area>
                  </q-card>
                </q-expansion-item>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-grey-6 text-right">
              {{ numericExpression + displaySentenceNumber }}
            </div>
            <div class="text-h3 text-right"> {{ displayResult }} </div>
          </q-card-section>
          <q-card-section class="bg-grey-4">
            <div class="row q-col-gutter-sm">
              <div class="col-3" v-for="(btn, index) in enumBtnKeysCalc" :key="index">
                <q-btn class="full-width text-h6" :color="checkerInput.notIsNumber(btn) ? 'indigo' : 'grey-2'"
                  :text-color="checkerInput.notIsNumber(btn) ? 'white' : 'grey-8'"
                  @click="actionsInputKeys.btnKeyInput(btn, displaySentenceNumber)">
                  {{ btn }}
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="indigo" @click="actionsInputKeys.btnClearDisplay()">
                  CE
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="orange" @click="actionsInputKeys.btnResult()">
                  =
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <div>{{ actionsInputKeys.displayResult }}</div>
</template>

<script setup lang="ts">

import enumBtnKeysCalc from './utils/enumBtnKeysCalc'
import ActionsInputKeys from './utils/ActionsInputKeys'
import CheckerInputBtn from './utils/CheckersInput';

// const checkerInput = new CheckerInputBtn(inputBtn)
// const actionsInputKeys = new ActionsInputKeys(checkerInput)
// const displaySentenceNumber = '';
// const numericExpression = actionsInputKeys.numericExpression
// const displayResult = actionsInputKeys.displayResult
// const historyResults = [''];
// const inputBtn = '';

const checkerInput = new CheckerInputBtn()
const actionsInputKeys = new ActionsInputKeys()

const displaySentenceNumber = actionsInputKeys.displaySentenceNumber
const numericExpression = actionsInputKeys.numericExpression
const displayResult = actionsInputKeys.displayResult
const historyResults = actionsInputKeys.historyResults

</script>

<style >
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
