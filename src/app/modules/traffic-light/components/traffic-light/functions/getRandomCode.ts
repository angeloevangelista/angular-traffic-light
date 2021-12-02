import * as crypto from 'crypto-js';

function getRandomCode(length: number): string {
  return crypto.lib.WordArray.random(length).toString();
}

export { getRandomCode };
