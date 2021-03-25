const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0
    for (const arr of matrix) {
      arr.forEach(e => {
        if (e == "^^" ) {
          result += 1
        }
      })
    }
    return result
};
