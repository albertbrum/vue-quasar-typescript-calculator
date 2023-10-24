export default class CheckerInputBtn {
  public notIsNumber(inputBtn: string): boolean {
    return isNaN(Number(inputBtn));
  }
}
