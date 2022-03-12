import read from './reader';
import json from './parser';

export default class GameSavingsLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      const value = json(data);
      resolve(value);
    });
  }
}
