import DataHandler from './DataHandler'
import CheckerInputs from 'src/utils/CheckerInputs'
import MainCalculator from './Main'

export default class KeysInputs extends MainCalculator {
  public dataHandler: DataHandler = new DataHandler()
  public checkInput: CheckerInputs = new CheckerInputs()

  public KeyInput(inputBtn: string): void {
    if (this.checkInput.CheckInput(inputBtn) === 'isNumber') {
      this.dataHandler.handlerNumber(inputBtn)
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isOperator') {
      this.dataHandler.handlerOperator(inputBtn)
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isClear') {
      this.dataHandler.handlerClear(inputBtn)
    }
    if (this.checkInput.CheckInput(inputBtn) === 'isResult') {
      this.dataHandler.handlerResult(inputBtn)
    }
  }
}
