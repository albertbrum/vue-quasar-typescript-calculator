import type { Ref } from 'vue';
export interface ICalculatorState {
  operatorInputFlag: boolean;
  displaySentenceNumber: Ref<string>;
  numericExpression: Ref<string>;
  displayResult: Ref<string>;
  historyResults: Ref<Array<string>>;
  inputBtn: string;
}
