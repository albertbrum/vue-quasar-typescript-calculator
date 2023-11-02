import { Ref } from 'vue'
import MainCalculator from './Main'

export default class DisplayOutput extends MainCalculator {
  public setDisplaySentence(displaySentence: Ref<string>, operatorInputFlag: boolean): void {
    // console.log('OUTPUT )))', this.displaySentence.value)
    this.displaySentence.value = displaySentence.value
    this.operatorInputFlag = operatorInputFlag
    console.log('>> OUTPUT - displaySentence )))', displaySentence.value)
    //console.log('>> OUTPUT - numericExpression )))', this.numericExpression.value)
  }

  public setDisplayResult(inputBtn: string): void {
    this.displaySentence.value = ''
    this.operatorInputFlag = true
  }

  public setClearDisplay(): void {
    this.displaySentence.value = ''
    this.numericExpression.value = ''
    this.displayResult.value = '0'
    this.operatorInputFlag = false
  }
}
