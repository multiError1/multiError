/**
 * @typedef {Object} MultiErrorObj
 * @property {number[]} errors
 */

/**
 * @param {number[]} x
 * @param {number[]} y
 * return {boolean}
 */
export function isMultiErrorXBetterThanY(x, y) {
  assert(x != null);
  const len = x.length;
  assert(len === y.length);
  for (let i = 0; i < len; i++) {
    const diff = x[i] - y[i];
    if (diff !== 0) {
      return diff < 0;
    }
  }
  return false;
}

/**
 * @param {boolean} condition
 */
function assert(condition) {
  if (!condition) {
    debugger;
    throw new Error("assertion failed");
  }
}
