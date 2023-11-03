import DisplayOutput from './DisplayOutput'
import MainCalculator from './Main'

export default class DataHandler extends MainCalculator {
  public displayOutput: DisplayOutput = new DisplayOutput()
  public handlerSentence: string = ''

  public handlerNumber(inputBtn: string): void {
    this.handlerSentence = `${this.handlerSentence}${inputBtn}`
    this.operatorInputFlag = false
    this.displayOutput.setDisplay(this.handlerSentence, this.operatorInputFlag)
  }
  public handlerOperator(inputBtn: string): void {
    if (inputBtn === '%') {
      if (this.handlerSentence !== '') {
        this.handlerSentence = `${parseFloat(this.handlerSentence) / 100}`
      }
    } else if (inputBtn === '.') {
      if (this.handlerSentence.indexOf('.') === -1) {
        this.handlerSentence = `${this.handlerSentence}${inputBtn}`
      }
    } else {
      if (!this.operatorInputFlag) {
        this.numericExpression.value += `${this.handlerSentence} ${inputBtn} `
        this.handlerSentence = ''
        this.operatorInputFlag = true
      }
    }
  }
  public handlerClear(inputBtn: string): void {}
  public handlerResult(result: string): void {}
}
