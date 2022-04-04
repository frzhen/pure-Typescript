"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
/**
 * @Author: Fred R. Zhen
 * @Date: 2022/4/4 16:59
 * @Email: fred.zhen@gmail.com
 */
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    ;
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
