/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const sortS1 = s1.split('').sort();
  const sortS2 = s2.split('').sort();
  let res = 0;
  sortS1.forEach((el, idx, arr) => {
    if (el === arr[idx - 1]) return;
    const count1 = sortS1.reduce((acc, el1) => (el === el1 ? acc + 1 : acc), 0);
    const count2 = sortS2.reduce((acc, el2) => (el === el2 ? acc + 1 : acc), 0);
    res += Math.min(count1, count2);
  });

  return res;
}

module.exports = getCommonCharacterCount;
