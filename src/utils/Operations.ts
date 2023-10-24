// import { ActionsInputKeys } from './ActionsInputKeys';

// export class Operations extends ActionsInputKeys {
//   constructor(
//     displaySentenceNumber: HTMLInputElement,
//     displayResult: HTMLDivElement,
//     historyResults: HTMLDivElement
//   ) {
//     super(displaySentenceNumber, displayResult, historyResults);
//   }

//   addOperation(inputBtn: string): void {
//     if (inputBtn === '.') {
//       if (this.displaySentenceNumber.value.indexOf('.') === -1) {
//         this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`;
//       }
//     } else if (inputBtn === '%') {
//       if (this.displaySentenceNumber.value !== '') {
//         this.displaySentenceNumber.value = `${parseFloat(this.displaySentenceNumber.value) / 100}`;
//       }
//     } else {
//       super.addOperator(inputBtn);
//     }
//   }
// }
