import class ActionsInputKeysCalc from './ActionsInputKeysCalc';

export class OperationsCalc extends ActionsInputKeysCalc {
  constructor(displaySentenceNumber: HTMLInputElement, displayResult: string | number, historyResults: string[]) {
    super(displaySentenceNumber, displayResult, historyResults);
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
      super.addOperator(inputBtn);
    }
  }
}
