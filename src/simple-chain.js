const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chein: [],
  getLength() {
    return this.chein.length;
  },
  addLink(value) {
    if (value === undefined) {
      value = '';
    }
    this.chein.push(`( ${value} )~~`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != 'number' || position < 1 || position > this.chein.length) {
      this.chein = [];
      throw new Error();
    }
    this.chein.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chein.reverse();
    return this;
  },
  finishChain() {
    let result = this.chein.join('').slice(0,-2)
    this.chein = [];
    return result;
  },
};




// const chainMaker = {
//   chein: [],

//   getLength() {
//     return this.chein.length
//   },

//   addLink(value) {
//     if (value === undefined) {
//       value = '';
//     }
//     this.chein.push(`( ${value} )~~`)
//     return this
//   },

//   removeLink(position) {
//     if (typeof position != 'number' ||
//           position < 1 ||
//           position > this.chein.length) {
//       this.chein = [];
//       throw new Error();
//     }
//     this.chein.splice(position -1, 1)
//     return this
//   },

//   reverseChain() {
//     this.chein.reverse()
//     return this
//   },

//   finishChain() {

//     // resultString = '';
//     // for (let element of this.chein) {
//     //   resultString += `( ${element} )~~`;
//     // }
//     // if (resultString != '') {
//     //   resultString = resultString.slice(0, -2);
//     // }
//     // this.chain = [];
//     // return resultString;


//     let result = this.chein.join('').slice(0,-2)
//     this.chain = []
//     return result
//   }
// };

module.exports = chainMaker;
