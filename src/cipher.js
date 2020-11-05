const cipher = {
  encode(offset, strCipher) {
    let newStr = '';
    for (let i = 0; i < strCipher.length; i++) {
      let cod = strCipher.charCodeAt(i);
      if (cod >= 65 && cod <= 90) {
        let newCode = ((cod - 65 + offset) % 26 + 65);
        newStr += String.fromCharCode(newCode);
      }
      else {
        newStr += String.fromCharCode(cod);
      }
    }
    return newStr;
  },
  
  decode(offset, strCipher) {
    let newStr = '';
    for (let i = 0; i < strCipher.length; i++) {
      let cod = strCipher.charCodeAt(i);
      if (cod >= 65 && cod <= 90) {
        let newCode = ((cod - 90 - offset) % 26 + 90);
        newStr += String.fromCharCode(newCode);
      }
      else {
        newStr += String.fromCharCode(cod);
      }
    }
    return newStr;
  }
};

export default cipher;