export class CheckerInputBtn {
  public notIsNumber(inputBtn: string | number): boolean {
    return isNaN(Number(inputBtn));
  }
}
