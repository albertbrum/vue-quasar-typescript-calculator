import { inputBtn } from './inputBtnOperatorOrNumber';
export class checkerInputBtn {
  notIsNumber(inputBtn) {
    return isNaN(Number(inputBtn));
  }
}
