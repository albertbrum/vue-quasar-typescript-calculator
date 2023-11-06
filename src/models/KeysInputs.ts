import MainCalculator from './Main'
import { ref } from 'vue'

export default class KeysInputs extends MainCalculator {
  public KeyInput(inputBtn: string): void {
    switch (this.checkInput.CheckInput(inputBtn)) {
      case 'isNumber':
        this.handleNumberInput(inputBtn)
        break
      case 'isOperator':
        this.handleOperatorInput(inputBtn)
        break
      case 'isClear':
        this.handleClearInput()
        break
      case 'isResult':
        this.handleResultInput()
        break
    }
  }

  private handleNumberInput(inputBtn: string): void {
    if (
      (inputBtn === '0' && this.displaySentence.value === '0') ||
      (inputBtn === '.' && (this.displaySentence.value === '' || this.displaySentence.value.includes('.')))
    ) {
      return
    }
    this.displaySentence.value += inputBtn
    this.operatorInputFlag = false
  }

  private handleOperatorInput(inputBtn: string): void {
    if (inputBtn === '%') {
      this.handlePercentageInput()
    } else if (inputBtn === '.') {
      this.handleDotInput()
    } else {
      if (this.operatorInputFlag && this.numericExpression.value !== '') {
        const currentExpression = this.numericExpression.value
        this.numericExpression.value = currentExpression.substring(0, currentExpression.length - 3) + ` ${inputBtn} `
      } else {
        this.handleRegularOperatorInput(inputBtn)
      }
      this.operatorInputFlag = true
    }
  }

  private handlePercentageInput(): void {
    if (this.displaySentence.value !== '') {
      this.displaySentence.value = `${parseFloat(this.displaySentence.value) / 100}`
    }
  }

  private handleDotInput(): void {
    if (!this.operatorInputFlag) {
      if (!this.displaySentence.value.includes('.')) {
        this.displaySentence.value += '.'
      }
    }
  }

  private handleRegularOperatorInput(inputBtn: string): void {
    if (!this.operatorInputFlag) {
      this.numericExpression.value += `${this.displaySentence.value} ${inputBtn} `
      this.displaySentence.value = ''
      this.operatorInputFlag = true
    }
  }

  private handleClearInput(): void {
    this.displaySentence.value = ''
    this.displayResult.value = '0'
    this.numericExpression.value = ''
  }

  private handleResultInput(): void {
    if (this.displaySentence.value != '') {
      if (!this.operatorInputFlag) {
        try {
          const expression = this.numericExpression.value + this.displaySentence.value
          const result = eval(expression)
          this.displayResult.value = result
          this.historyResults.value.push(`${expression} = ${this.displayResult.value}`)
          this.numericExpression.value = ''
          this.displaySentence.value = ''
        } catch (error) {
          this.displayResult.value = 'Error!'
        }
      } else {
        this.displayResult.value = 'Error!'
      }
    }
  }
}
