const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const addition = options.addition === undefined ? '' : options.addition
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes
  const separator = options.separator === undefined ? '+' : options.separator
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes
  const newStr = str + ((addition + additionSeparator).repeat(additionRepeatTimes-1) + addition)
  return (newStr + separator).repeat(repeatTimes - 1) + newStr
};
  