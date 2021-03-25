const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1
    if (arr instanceof Array) {
      arr.forEach((elem) => {
        if(elem instanceof Array) {
        let maxLevel = this.calculateDepth(elem) + 1
          if (level < maxLevel) {
            level = maxLevel
          }
        }
      });
           
    }
    return level
  }
};

