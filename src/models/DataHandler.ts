import MainCalculator from './Main'
import DisplayOutput from './DisplayOutput'

export default class DataHandler extends MainCalculator {
  public displayOutput: DisplayOutput = new DisplayOutput()

  public handlerNumber(inputBtn: string): void {
    //console.log('CONSOLEDENTROHANDLERNUMBER', inputBtn)
    //console.log('CONSOLEDENTROHANDLERNUMBER', this.displaySentence.value)
    this.displaySentence.value = `${this.displaySentence.value}${inputBtn}`
    //console.log('displaySENTENCE', this.displaySentence.value)
    this.operatorInputFlag = false
    this.displayOutput.setDisplaySentence(this.displaySentence, this.operatorInputFlag)
  }
  public handlerOperator(inputBtn: string): void {
    if (inputBtn === '%') {
      if (this.displaySentence.value !== '') {
        this.displaySentence.value = `${parseFloat(this.displaySentence.value) / 100}`
      }
    } else if (inputBtn === '.') {
      if (this.displaySentence.value.indexOf('.') === -1) {
        this.displaySentence.value = `${this.displaySentence.value}${inputBtn}`
      }
    } else {
      if (!this.operatorInputFlag) {
        this.numericExpression.value += `${this.displaySentence.value} ${inputBtn} `
        this.displaySentence.value = ''
        this.operatorInputFlag = true
      }
    }
  }
  public handlerClear(inputBtn: string): void {
    this.displaySentence.value = ''
    this.numericExpression.value = ''
    this.displayResult.value = '0'
    this.operatorInputFlag = false
  }
  public handlerResult(result: string): void {
    this.displayResult.value = result
  }
}
