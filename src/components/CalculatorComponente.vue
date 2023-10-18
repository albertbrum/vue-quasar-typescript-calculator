<template>
  <div>
    <div class="row justify-center">
      <div class="col-12 col-md-8 col-lg-6 col-xl-3">
        <q-card>
          <q-card-section class="bg-primary">
            <div class="text-white text-h6">Calculadora</div>
          </q-card-section>
          <q-card-section>
            <div class="text-h5 text-grey-5 text-right">
              {{ displayNumberSentence }}
            </div>
            <div class="text-h3 text-right">resultado</div>
          </q-card-section>

          <q-card-section class="bg-grey-4">
            <div class="row q-col-gutter-sm">
              <div
                class="col-3"
                v-for="(btn, index) in buttons"
                :key="index"
              >
                <q-btn
                  class="full-width text-h6"
                  :color="notIsNumber(btn) ? 'indigo' : 'grey-2'"
                  :text-color="notIsNumber(btn) ? 'white' : 'grey-8'"
                  @click="btnAction(btn)"
                >
                  {{ btn }}
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn
                  class="full-width text-h6"
                  color="indigo"
                >
                  CE
                </q-btn>
              </div>
              <div class="col-6">
                <q-btn
                  class="full-width text-h6"
                  color="orange"
                >
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
import { ref } from 'vue';

const buttons: (number | string)[] = [
  7,
  8,
  9,
  '%',
  4,
  5,
  6,
  '+',
  1,
  2,
  3,
  '-',
  '.',
  0,
  '/',
  '*',
];

type numberOrOperator = number | string;
type displayNumberSentence = number | string;
type notIsNumber = number | string;

const notIsNumber = (value: numberOrOperator): boolean => isNaN(Number(value));

const displayNumberSentence = ref('');

const btnAction = (value: numberOrOperator) => {
  if (!notIsNumber(value)) {
    displayNumberSentence.value += String(value);
  } else {
    performOperation(value);
  }
};

const performOperation = (value: numberOrOperator) => {
  if (value === '.') {
    if (value.indexOf('.') === -1) {
      displayNumberSentence.value += String(value);
    }
  } else {
  }
};
</script>

<style>
.text-h5 {
  height: 23px;
}
.text-h3 {
  height: 50px;
}
</style>
