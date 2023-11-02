import MainCalculator from './Main'
import DisplayOutput from './DisplayOutput'

public displayOutput: DisplayOutput = new DisplayOutput

export default class DataHandler extends MainCalculator {
  public handlerNumber(inputBtn: string): Object {
    console.log('CONSOLEDENTROHANDLERNUMBER', inputBtn)
    console.log('CONSOLEDENTROHANDLERNUMBER', this.displaySentenceNumber.value)
    this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
    console.log('displaySENTENCE', this.displaySentenceNumber.value)
    this.operatorInputFlag = false
    this.displayOutput.setDisplaySentence
    return this.displaySentenceNumber, this.operatorInputFlag
  }
  public handlerOperator(inputBtn: string): void {
    if (inputBtn === '%') {
      if (this.displaySentenceNumber.value !== '') {
        this.displaySentenceNumber.value = `${parseFloat(this.displaySentenceNumber.value) / 100}`
      }
    } else if (inputBtn === '.') {
      if (this.displaySentenceNumber.value.indexOf('.') === -1) {
        this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
      }
    } else {
      if (!this.operatorInputFlag) {
        this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `
        this.displaySentenceNumber.value = ''
        this.operatorInputFlag = true
      }
    }
  }
  public handlerClear(inputBtn: string): void {
    this.displaySentenceNumber.value = ''
    this.numericExpression.value = ''
    this.displayResult.value = '0'
    this.operatorInputFlag = false
  }
  public handlerResult(result: string): void {
    this.displayResult.value = result
  }
}
