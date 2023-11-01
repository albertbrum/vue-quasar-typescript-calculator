import { evaluate } from 'mathjs'
import { ICalculatorMethods } from 'src/interfaces/ICalculatorMethods'
import { ICalculatorState } from 'src/interfaces/ICalculatorStates'
import CheckerInputBtn from '../utils/CheckerInput'
import { Ref, ref } from 'vue'

export default class MainCalculator implements ICalculatorState {
  public displayResult: Ref<string>
  public historyResults: Ref<Array<string>>
  public operatorInputFlag: boolean
  public displaySentenceNumber: Ref<string>
  public numericExpression: Ref<string>
  public checkerInput: any
  public inputBtn: string

  constructor() {
    this.displayResult = ref('0')
    this.historyResults = ref([''])
    this.operatorInputFlag = false
    this.displaySentenceNumber = ref('')
    this.numericExpression = ref('')
    this.inputBtn = ''

    this.checkerInput = new CheckerInputBtn()
  }
}
