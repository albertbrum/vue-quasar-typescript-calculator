import type { Ref } from 'vue'
export interface ICalculatorState {
  operatorInputFlag: boolean
  numericExpression: Ref<string>
  historyResults: Ref<Array<string>>
  inputBtn: string
  displaySentence: Ref<string>
}
