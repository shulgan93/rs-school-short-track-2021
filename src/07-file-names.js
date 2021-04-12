/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [...names];
  for (let i = 0; i < names.length; i++) {
    const file = arr[i];
    let count = 1;
    arr.forEach((el, idx) => {
      if (el === file && idx !== i) {
        arr[idx] = `${el}(${count})`;
        count++;
      }
    });
    count = 1;
  }

  return arr;
}
module.exports = renameFiles;
