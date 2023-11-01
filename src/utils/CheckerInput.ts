import isMathOperator from './isMathOperators'

export default class CheckerInputBtn {
  public inputChecked: string = ''
  private mathOperatorInstance: isMathOperator = new isMathOperator()

  public CheckInput(inputBtn: string) {
    if (isNaN(Number(inputBtn))) {
      this.inputChecked = 'isNumber'
    } else if (this.mathOperatorInstance.isMathOperator(inputBtn)) {
      this.inputChecked = 'isOperator'
    } else if (inputBtn === '=') {
      this.inputChecked = 'isResult'
    } else {
      this.inputChecked = 'isClear'
    }
  }
}
