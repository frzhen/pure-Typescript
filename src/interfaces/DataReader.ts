/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 23:40
 * @Email: fred.zhen@gmail.com
 */
export interface DataReader {
  read(): void;
  data: string[][];
}
