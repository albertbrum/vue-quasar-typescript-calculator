import { ICalculatorState } from 'src/interfaces/ICalculatorStates'
import { Ref, ref } from 'vue'
import CheckerInputs from 'src/utils/CheckerInputs'


export default class MainCalculator implements ICalculatorState{
  public displayResult: Ref<string> = ref('0')
  public historyResults: Ref<Array<string>> = ref([''])
  public operatorInputFlag: boolean = false
  public displaySentence: Ref<string> = ref('')
  public numericExpression: Ref<string> = ref('')
  public inputBtn: string = ''
  public checkInput: CheckerInputs = new CheckerInputs()
}
