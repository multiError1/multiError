/**
 * @typedef {Object} MultiErrorObj
 * @property {number[]} errors
 */

/**
 * @param {MultiErrorObj} x
 * @param {MultiErrorObj} y
 * return {boolean}
 */
export function isXBetterThanY(x, y) {
  const len = x.errors.length;
  assert(len === y.errors.length);
  for (let i = 0; i < len; i++) {
    const diff = x.errors[i] - y.errors[i];
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
