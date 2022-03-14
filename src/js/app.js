import read from './reader';
import json from './parser';

export default class GameSavingsLoader {
  static load() {
    return new Promise((resolve) => {
      read().then((data) => json(data)).then((data) => {
        resolve(data);
      });
    });
  }
}
