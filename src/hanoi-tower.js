const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const speedSecond = turnsSpeed / 3600
  const turns = Math.pow(2, disksNumber) - 1 
  const result = {
    turns: turns,
    seconds: Math.floor(turns / speedSecond)
  }
  return result
};
