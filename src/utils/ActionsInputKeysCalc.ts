import { evaluate } from 'mathjs';
import { ICalculator } from 'src/interfaces/ICalculator';
import { CheckerInputBtn } from 'src/utils/CheckersInput';

export class ActionsInputKeysCalc implements ICalculator {
  private operatorInputFlag: boolean;
  private displaySentenceNumber: string | number;
  private numericExpression: string | number;
  private displayResult: string | number;
  private historyResults: string[];
  private performOperation: (inputBtn: string) => void;
  public checkerInput: CheckerInputBtn;

  constructor(
    checkerInput: CheckerInputBtn, // Deve ser do tipo CheckerInputBtn
    operatorInputFlag: boolean,
    displaySentenceNumber: string | number,
    numericExpression: string | number,
    displayResult: string | number,
    historyResults: string[],
    performOperation: (inputBtn: string) => void,
  ) {
    this.operatorInputFlag = operatorInputFlag;
    this.displaySentenceNumber = displaySentenceNumber;
    this.numericExpression = numericExpression;
    this.displayResult = displayResult;
    this.historyResults = historyResults;
    this.performOperation = performOperation;
    this.checkerInput = checkerInput;
  }

  btnKeyInput(inputBtn: string): void {
    if (!this.checkerInput.notIsNumber(inputBtn)) {
      if (this.operatorInputFlag) {
        this.displaySentenceNumber = '';
        this.operatorInputFlag = false;
      }
      this.displaySentenceNumber = `${this.displaySentenceNumber}${inputBtn}`;
    } else {
      this.performOperation(inputBtn);
    }
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
      this.historyResults.push(`${this.numericExpression} ${this.displaySentenceNumber} = ${this.displayResult}`); // Corrigido o erro de digitação
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
