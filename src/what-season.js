const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const season = ["spring", "summer", "autumn", "winter"]
  if (date == undefined ||  date == null) {
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    throw Error()
  }
  
  if (date.getMonth() >= 11 || date.getMonth() < 2 ) {
    return season[3]
  } else if (date.getMonth() > 7) {
    return season[2]
  } else if (date.getMonth() > 4) {
    return season[1]
  } else {
    return season[0]
  }
};
