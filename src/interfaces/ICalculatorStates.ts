import type { Ref } from 'vue'
export interface ICalculatorState {
  operatorInputFlag: boolean
  displaySentence: Ref<string>
  numericExpression: Ref<string>
  displayResult: Ref<string>
  historyResults: Ref<Array<string>>
  inputBtn: string
}
