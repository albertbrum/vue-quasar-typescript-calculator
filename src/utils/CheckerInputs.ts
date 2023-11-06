import { is } from 'quasar'
import isMathOperator from './isMathOperators'

export default class CheckerInputs {
  public inputChecked: string = ''
  public mathOperatorInstance: isMathOperator = new isMathOperator()

  public CheckInput(inputBtn: string): string {
    if (!isNaN(Number(inputBtn))) {
      this.inputChecked = 'isNumber'
    } else if (inputBtn === 'CE') {
      this.inputChecked = 'isClear'
    } else if (inputBtn === '=') {
      this.inputChecked = 'isResult'
    } else if (this.mathOperatorInstance.isMathOperator(inputBtn)) {
      this.inputChecked = 'isOperator'
    }
    return this.inputChecked
  }
}
