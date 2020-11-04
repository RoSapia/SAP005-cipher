const cipher = {
  encode(offset, strCipher) {
    let newStr = '';
    for (let i = 0; i < strCipher.length; i++) {
      let cod = strCipher.charCodeAt(i);
      let newCode = ((cod - 65 + offset) % 25 + 65);
      newStr += String.fromCharCode(newCode);
    }
    return newStr;

  }


};

export default cipher;