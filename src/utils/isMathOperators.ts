export default class isMathOperator {
  public isMathOperator(str: string): boolean {
    const mathOperators = ['+', '-', '*', '/', '%']
    str = str.trim()
    return mathOperators.includes(str)
  }
}
