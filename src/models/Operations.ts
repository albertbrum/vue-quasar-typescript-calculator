import ActionsInputKeys from './ActionsInputKeys'

export default class Operations extends ActionsInputKeys {
  public addOperation(inputBtn: string): void {
    if (inputBtn === '.') {
      if (this.displaySentenceNumber.value.indexOf('.') === -1) {
        this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
      }
    } else if (inputBtn === '%') {
      if (this.displaySentenceNumber.value !== '') {
        this.displaySentenceNumber.value = `${parseFloat(this.displaySentenceNumber.value) / 100}`
      }
    } else {
      this.addOperator(inputBtn)
    }
  }

  public addOperator(inputBtn: string): void {
    console.log(this.operatorInputFlag)
    if (!this.operatorInputFlag) {
      this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `
      this.displaySentenceNumber.value = ''
      this.operatorInputFlag = true
    }
  }
}
