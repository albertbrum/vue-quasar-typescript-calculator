// import { evaluate } from 'mathjs'
// import { ICalculatorMethods } from 'src/interfaces/ICalculatorMethods'
// import { ICalculatorState } from 'src/interfaces/ICalculatorStates'
// import CheckerInputBtn from '../utils/CheckerInput'
// import { ref } from 'vue'
// import Operations from './Operations'

// export default class ActionsInputKeys implements ICalculatorMethods, ICalculatorState {
//   public displayResult = ref('0')
//   public historyResults = ref([''])
//   public operatorInputFlag = false
//   public displaySentenceNumber = ref('')
//   public numericExpression = ref('')
//   public checkerInput = new CheckerInputBtn()
//   public inputBtn = ''
//   public newOperation = new Operations(this.displaySentenceNumber)

//   public btnKeyInput(inputBtn: string): void {
//     console.log('teste+teste', inputBtn)
//     if (!this.checkerInput.notIsNumber(inputBtn.toString())) {
//       if (this.operatorInputFlag) {
//         console.log({ inputBtn })
//         this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
//         this.operatorInputFlag = false
//       }
//       this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
//     } else {
//       this.addOperation(inputBtn)
//     }
//   }

//   public btnClearDisplay(): void {
//     this.displaySentenceNumber.value = ''
//     this.numericExpression.value = ''
//     this.displayResult.value = '0'
//     this.operatorInputFlag = false
//   }

//   public btnResult(): void {
//     if (!this.operatorInputFlag) {
//       this.displayResult.value = evaluate(`${this.numericExpression.value} ${this.displaySentenceNumber.value}`)
//       this.historyResults.value.push(`${this.numericExpression.value} ${this.displaySentenceNumber.value} = ${this.displayResult.value}`)
//       this.numericExpression.value = ''
//       this.displaySentenceNumber.value = ''
//     } else {
//       this.displayResult.value = 'Error!'
//     }
//   }

// public addOperation(inputBtn: string): void {
//   if (inputBtn === '.') {
//     if (this.displaySentenceNumber.value.indexOf('.') === -1) {
//       this.displaySentenceNumber.value = `${this.displaySentenceNumber.value}${inputBtn}`
//     }
//   } else if (inputBtn === '%') {
//     if (this.displaySentenceNumber.value !== '') {
//       this.displaySentenceNumber.value = `${parseFloat(this.displaySentenceNumber.value) / 100}`
//     }
//   } else {
//     this.addOperator(inputBtn)
//   }
// }

// public addOperator(inputBtn: string): void {
//   console.log(this.operatorInputFlag)
//   if (!this.operatorInputFlag) {
//     this.numericExpression.value += `${this.displaySentenceNumber.value} ${inputBtn} `
//     this.displaySentenceNumber.value = ''
//     this.operatorInputFlag = true
//   }
// }
// }
