import { CheckerInputBtn } from 'src/utils/CheckersInput';

export interface ICalculator {
  btnKeyInput(inputBtn: string): void;
  btnClearDisplay(): void;
  btnResult(): void;
  checkerInput: CheckerInputBtn;
}
