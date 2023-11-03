import MainCalculator from './Main'

export default class DisplayOutput extends MainCalculator {
  public setDisplay(handlerSentence: string, operatorInputFlag: boolean): any {
    this.displaySentence.value = handlerSentence
    this.operatorInputFlag = operatorInputFlag
  }
}
