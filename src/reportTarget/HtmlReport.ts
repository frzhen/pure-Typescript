/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/5 17:52
 * @Email: fred.zhen@gmail.com
 */
import fs from 'fs';
import { OutputTarget } from "../interfaces/OutputTarget";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}
