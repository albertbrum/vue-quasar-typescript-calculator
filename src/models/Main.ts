import { ICalculatorState } from 'src/interfaces/ICalculatorStates'
import { Ref, ref } from 'vue'

export default class MainCalculator implements ICalculatorState {
  public displayResult: Ref<string>
  public historyResults: Ref<Array<string>>
  public operatorInputFlag: boolean
  public displaySentence: Ref<string>
  public numericExpression: Ref<string>
  public inputBtn: string

  constructor() {
    this.displayResult = ref('')
    this.displaySentence = ref('')
    this.historyResults = ref([''])
    this.operatorInputFlag = false
    this.numericExpression = ref('')
    this.inputBtn = ''
  }
}
