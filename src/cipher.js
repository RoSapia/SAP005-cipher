const iniAlpha = 65
const fimAlpha = 90
const spin = 26
const cipher = {
  encode(offset, strCipher) {
    let newStr = ''
    for (let i = 0; i < strCipher.length; i++) {
      let cod = strCipher.charCodeAt(i)
      if (cod >= iniAlpha && cod <= fimAlpha) {
        let newCode = ((cod - iniAlpha + offset) % spin + iniAlpha)
        newStr += String.fromCharCode(newCode)
      }
      else {
        newStr += String.fromCharCode(cod)
      }
    }
    return newStr
  },

  decode(offset, strCipher) {
    let newStr = ''
    for (let i = 0; i < strCipher.length; i++) {
      let cod = strCipher.charCodeAt(i)
      if (cod >= iniAlpha && cod <= fimAlpha) {
        let newCode = ((cod - fimAlpha - offset) % spin + fimAlpha)
        newStr += String.fromCharCode(newCode)
      }
      else {
        newStr += String.fromCharCode(cod)
      }
    }
    return newStr
  }
};

export default cipher;