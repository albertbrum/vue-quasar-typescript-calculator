import MainCalculator from './Main'

export default class DisplayOutput extends MainCalculator {

  public setDisplaySentence(inputBtn: string): void {

  }

  public setDisplayResult(inputBtn: string): void {

      this.displaySentenceNumber.value = ''
      this.operatorInputFlag = true

  }

  public setClearDisplay(): void {
    this.displaySentenceNumber.value = ''
    this.numericExpression.value = ''
    this.displayResult.value = '0'
    this.operatorInputFlag = false

  }
}
