import read from './reader';
import json from './parser';

export default class GameSavingsLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    return value;
  }
}
