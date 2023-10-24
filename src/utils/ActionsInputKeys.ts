import { evaluate } from 'mathjs';
import { ICalculatorMethods } from 'src/interfaces/ICalculatorMethods';
import { ICalculatorState } from 'src/interfaces/ICalculatorStates';
import CheckerInputBtn from './CheckersInput';

export default class ActionsInputKeys implements ICalculatorMethods, ICalculatorState {
  public operatorInputFlag = true;
  public displaySentenceNumber = '';
  public numericExpression = '';
  public displayResult = '';
  public historyResults: string[] = [];
  public checkerInput = new CheckerInputBtn();
  public inputBtn = '';

  btnKeyInput(inputBtn: string, displaySentenceNumber: string) {
    if (!this.checkerInput.notIsNumber(inputBtn.toString())) {
      if (this.operatorInputFlag) {
        this.displaySentenceNumber = '';
        this.operatorInputFlag = false;
      }

      this.displaySentenceNumber = `${this.displaySentenceNumber}${inputBtn}`;
    } else {
      this.btnResult();
    }

    return displaySentenceNumber;
  }

  btnClearDisplay(): void {
    this.displaySentenceNumber = '';
    this.numericExpression = '';
    this.displayResult = '0';
    this.operatorInputFlag = true;
  }

  btnResult(): void {
    if (!this.operatorInputFlag) {
      this.displayResult = evaluate(`${this.numericExpression} ${this.displaySentenceNumber}`);
      this.historyResults.push(`${this.numericExpression} ${this.displaySentenceNumber} = ${this.displayResult}`);
      this.numericExpression = '';
      this.displaySentenceNumber = '';
    } else {
      this.displayResult = 'Error!';
    }
  }

  addOperator(inputBtn: string): void {
    if (!this.operatorInputFlag) {
      this.numericExpression += `${this.displaySentenceNumber} ${inputBtn} `;
      this.displaySentenceNumber = '';
      this.operatorInputFlag = true;
    }
  }
}
