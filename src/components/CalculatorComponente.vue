<template>
  <div>
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-3">
        <q-card>
          <q-card-section class="bg-primary">
            <div class="row text-right">
              <div class="col text-white text-h5 text-left">Calculadora</div>
              <div class="text-white text-h6">
                <div class="q-pa-xs" style="max-width: 250px,
                  max-heigth: 100px">
                  <q-expansion-item icon="history" label="Histórico" header-class="bg-orange text-white"
                    expand-icon-class="text-white">
                    <q-card class="bg-grey-2 text-indigo">
                      <q-card-section>
                        <pre>{{ historyResults }}</pre>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
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
              <div class="col-3" v-for="(btn, index) in buttons" :key="index">
                <q-btn class="full-width text-h6" :color="notIsNumber(btn) ? 'indigo' : 'grey-2'"
                  :text-color="notIsNumber(btn) ? 'white' : 'grey-8'" @click="btnAction(btn)">
                  {{ btn }}
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="indigo" @click="btnClearDisplay">
                  CE
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn class="full-width text-h6" color="orange" @click="btnResult">
                  =
                </q-btn>
              </div>
            </div>
          </q-card-section>
        </q-card>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import { evaluate } from 'mathjs'

const buttons: (number | string)[] = [7, 8, 9, '%', 4, 5, 6, '+', 1, 2, 3, '-', '.', 0, '/', '*',]

type numberOrOperator = (number | string)
type displaySentenceNumber = (number | string)
type numericExpression = (number | string)
type displayResult = string
type operatorEntry = (boolean)
type historyResults = string

const numericExpression = ref('')
const displaySentenceNumber = ref('')
const displayResult = ref('0')
let operatorEntry = true
const historyResults = ref([''])

const notIsNumber = (value: numberOrOperator): boolean => isNaN(Number(value))

const btnAction = (value: numberOrOperator) => {
  if (!notIsNumber(value)) {
    if (operatorEntry) {
      displaySentenceNumber.value = ''
      operatorEntry = false
    }
    displaySentenceNumber.value = `${displaySentenceNumber.value}${value}`
  }
  else {
    addOperation(value)
  }
}

const addOperation = (value: numberOrOperator) => {
  if (value === '.') {
    if (displaySentenceNumber.value.indexOf('.') === -1) {
      displaySentenceNumber.value = `${displaySentenceNumber.value}${value}`
    }
    return
  }
  if (value === '%') {
    if (displaySentenceNumber.value !== '') {
      displaySentenceNumber.value = `${parseFloat(displaySentenceNumber.value) / 100}`
    }
    return
  }
  addOperator(value)
}

const addOperator = (value: numberOrOperator) => {
  if (!operatorEntry) {
    numericExpression.value += `${displaySentenceNumber.value} ${value} `
    displaySentenceNumber.value = ''
    operatorEntry = true
  }
}

const btnClearDisplay = () => {
  displaySentenceNumber.value = ''
  numericExpression.value = ''
  displayResult.value = '0'
  operatorEntry = true
}

const btnResult = () => {
  if (!operatorEntry) {
    displayResult.value = evaluate(numericExpression.value + displaySentenceNumber.value)
    historyResults.value.push(`${numericExpression.value} ${displaySentenceNumber.value} = ${displayResult.value}`)
  }
  else {
    displayResult.value = 'Error!'
  }
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
</style>
