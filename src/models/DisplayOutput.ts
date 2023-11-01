import MainCalculator from './Main'

export default class DisplayOutput extends MainCalculator {
  public addNumber(inputBtn: string): void {
    this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `
  }

  public addOperator(inputBtn: string): void {
    console.log(this.operatorInputFlag)
    if (!this.operatorInputFlag) {
      this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `
      this.displaySentenceNumber.value = ''
      this.operatorInputFlag = true
    }
  }

  public clearDisplay(): void {
    this.displaySentenceNumber.value = ''
    this.numericExpression.value = ''
    this.displayResult.value = '0'
    this.operatorInputFlag = false
  }

  public setResult(result: string): void {
    this.displayResult.value = result
  }
}
