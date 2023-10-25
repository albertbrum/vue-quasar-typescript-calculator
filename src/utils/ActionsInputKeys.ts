import { evaluate } from 'mathjs';
import { ICalculatorMethods } from 'src/interfaces/ICalculatorMethods';
import { ICalculatorState } from 'src/interfaces/ICalculatorStates';
import CheckerInputBtn from './CheckersInput';
import { ref } from 'vue';

export default class ActionsInputKeys implements ICalculatorMethods, ICalculatorState {
  public displayResult = ref('0');
  public historyResults = ref(['sem historico']);
  public operatorInputFlag = true;
  public displaySentenceNumber = ref('');
  public numericExpression = ref('');
  public checkerInput = new CheckerInputBtn();
  public inputBtn = '';
  //const clickBtnLog = (inputBtn: string) => {

  btnKeyInput(inputBtn: string): void {
    //btnKeyInput(inputBtn: string): string | boolean | Array<string> {
    console.log('teste+teste', inputBtn);
    if (!this.checkerInput.notIsNumber(inputBtn.toString())) {
      if (this.operatorInputFlag) {
        this.displaySentenceNumber.value = '';
        this.operatorInputFlag = false;
      }
      this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`;
    } else {
      this.addOperation(inputBtn);
    }
    // return (
    //   this.displayResult, this.numericExpression, this.displayResult, this.operatorInputFlag, this.displaySentenceNumber, this.inputBtn
    // );
  }

  btnClearDisplay(): void {
    this.displaySentenceNumber.value = '';
    this.numericExpression.value = '';
    this.displayResult.value = '0';
    this.operatorInputFlag = true;
    // return this.displayResult, this.numericExpression, this.displayResult, this.operatorInputFlag;
  }

  btnResult(): void {
    if (!this.operatorInputFlag) {
      this.displayResult.value = evaluate(`${this.numericExpression.value} ${this.displaySentenceNumber.value}`);
      this.historyResults.value.push(`${this.numericExpression.value} ${this.displaySentenceNumber.value} = ${this.displayResult.value}`);
      //this.numericExpression.value = '';
      this.displaySentenceNumber.value = '';
    } else {
      this.displayResult.value = 'Error!';
    }
    //return this.displayResult, this.numericExpression, this.operatorInputFlag;
  }

  addOperation(inputBtn: string): void {
    if (inputBtn === '.') {
      if (this.displaySentenceNumber.value.indexOf('.') === -1) {
        this.displaySentenceNumber.value = `${this.displaySentenceNumber.value} ${inputBtn}`;
      }
    } else if (inputBtn === '%') {
      if (this.displaySentenceNumber.value !== '') {
        this.displaySentenceNumber.value = `${parseFloat(this.displaySentenceNumber.value) / 100}`;
      }
    } else {
      this.addOperator(inputBtn);
    }
  }

  addOperator(inputBtn: string): void {
    console.log(this.operatorInputFlag);
    if (!this.operatorInputFlag) {
      this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `;
      this.displaySentenceNumber.value = '';
      this.operatorInputFlag = true;
    }
  }
}
