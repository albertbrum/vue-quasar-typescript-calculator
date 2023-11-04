
import CheckerInputs from 'src/utils/CheckerInputs'
import MainCalculator from './Main'


export default class KeysInputs extends MainCalculator {
  public checkInput: CheckerInputs = new CheckerInputs()


  public KeyInput(inputBtn: string): any {
    if (this.checkInput.CheckInput(inputBtn) === 'isNumber') {
      this.displaySentence.value = `${this.displaySentence.value}${inputBtn}`
      this.operatorInputFlag = false
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isOperator') {
      if (inputBtn === '%') {
        if (this.displaySentence.value !== '') {
          this.displaySentence.value = `${parseFloat(this.displaySentence.value) / 100}`
        }
      } else if (inputBtn === '.') {
        if (this.displaySentence.value.indexOf('.') === -1) {
          this.displaySentence.value = `${this.displaySentence}${inputBtn}`
        }
      } else {
        if (!this.operatorInputFlag) {
          this.numericExpression.value += `${this.displaySentence.value} ${inputBtn} `
          this.displaySentence.value = ''
          this.operatorInputFlag = true
        }
      }
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isClear') {
      this.displaySentence.value = ''
      this.displayResult.value = ''
      this.numericExpression.value = ''
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isResult') {
      if (!this.operatorInputFlag) {
        this.displayResult.value = `${eval(this.numericExpression.value + this.displaySentence.value)}`
        // this.displayResult.value = evaluate(`${this.numericExpression.value} ${this.displaySentence.value}`)
        this.historyResults.value.push(`${this.numericExpression.value} ${this.displaySentence.value} = ${this.displayResult.value}`)
        this.numericExpression.value = ''
        this.displaySentence.value = ''
      } else {
        this.displayResult.value = 'Error!'

      }
    }
  }
}
