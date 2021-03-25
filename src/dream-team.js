const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (members == null) {
      return false;
    } else {
      let arr = []
      for (let i = 0; i < members.length; i++) {
            console.log(members[i])
        if (typeof(members[i]) == "string") {
          arr.push(members[i].split("").filter(e => e != ' ')[0].toUpperCase())
        }
      };
      console.log(arr)
      return (arr.length != 0) ? arr.sort().join("") : false
      }
  };

