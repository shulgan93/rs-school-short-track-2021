/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, el, idx, arr) => {
    if (idx === 0) return el.reduce((accInner, element) => accInner + element);
    let count = 0;
    el.forEach((innerEl, innerIdx) => {
      if (arr[idx - 1][innerIdx] !== 0) {
        count += innerEl;
      }
      return false;
    });
    return acc + count;
  }, 0);
}

module.exports = getMatrixElementsSum;
