import MainCalculator from './Main'
import DisplayOutput from './DisplayOutput'
import checkInput from '../utils/CheckerInput'
import DataHandler from './DataHandler'

export default class KeysInputs extends MainCalculator {
  public inputBtn: string = ''
  public inputChecked: string = ''

  public checkInput: checkInput = new checkInput()
  public displayOutput: DisplayOutput = new DisplayOutput()
  public dataHandler: DataHandler = new DataHandler()

  public KeyInput(inputBtn: string): void {
    // Verifica o tipo de inputBtn usando a função isMathOperator da classe CheckerInputBtn
    if (this.checkerInput(inputBtn) === 'isNumber') {
      this.dataHandler.handlerNumber(inputBtn)
    }
    if (this.checkerInput(inputBtn) === 'isOperator') {
      this.dataHandler.handlerOperator(inputBtn)
    }
    if (this.checkerInput(inputBtn) === 'isClear') {
      this.dataHandler.handlerClear(inputBtn)
    }
    if (this.checkerInput(inputBtn) === 'isResult') {
      this.dataHandler.handlerResult(inputBtn)
    }
  }
}
