/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;

  const arr = str.split('').reduce((acc, el, idx, copyArr) => {
    if (el !== copyArr[idx + 1] && count === 1) {
      acc.push(el);
      return acc;
    }
    if (el === copyArr[idx + 1]) {
      count++;
      return acc;
    }
    acc.push(count + el);
    count = 1;
    return acc;
  }, []);

  return arr.join('');
}

module.exports = encodeLine;
