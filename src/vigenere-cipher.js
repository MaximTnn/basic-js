const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.reversFlag = !isDirect
  }
  encrypt(str, key) {

    if (!str || !key) {
      throw Error('Check input parametrs!')
    }

    const lenth = Math.ceil(str.split('').length / key.split('').length)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const keyWork = key.toUpperCase().replace(/\s+/g, "").repeat(lenth)
    const strWork = str.toUpperCase().split(" ")
    const result = []
    let iter = 0

    strWork.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        let keyin = alphabet.indexOf(keyWork[iter])
        let wordIn = alphabet.indexOf(el[i])
        if (wordIn !== -1) {
          let curIndex = (keyin + wordIn) % 26
          result.push(alphabet[curIndex])
          iter += 1
        } else {
          result.push(el[i])
        }
      } if (strWork.indexOf(el) !== strWork.length -1){
        result.push(' ')
      }
    })
    if(this.reversFlag == true) {
      return result.reverse().join('')
    } else {
      return result.join('')
    }
  }    
  decrypt(str, key) {

    if (!str || !key) {
      throw Error('Check input parametrs!')
    }

    const lenth = Math.ceil(str.split('').length / key.split('').length)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    const keyWork = key.toUpperCase().replace(/\s+/g, "").repeat(lenth)
    const strWork = str.toUpperCase().split(" ")
    const result = []
    let iter = 0

    strWork.forEach((el) => {
      for (let i = 0; i < el.length; i++) {
        let keyin = alphabet.indexOf(keyWork[iter])
        let wordIn = alphabet.indexOf(el[i])
        if (wordIn !== -1) {
          let curIndex = (wordIn + 26 - keyin) % 26
          result.push(alphabet[curIndex])
          iter += 1
        } else {
          result.push(el[i])
        }
      } if (strWork.indexOf(el) !== strWork.length -1){
        result.push(' ')
      }
    })
    if(this.reversFlag == true) {
      return result.reverse().join('')
    } else {
      return result.join('')
    }
      
  }
}

module.exports = VigenereCipheringMachine;
