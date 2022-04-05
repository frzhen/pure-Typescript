/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 11:57
 * @Email: fred.zhen@gmail.com
 */
import { OutputTarget } from "../interfaces/OutputTarget";

export class ConsoleReport implements OutputTarget{

  print(report:string): void {
    console.log(report);
  }
}
