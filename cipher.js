const cipher = {
   encode(offset, strCipher){
    //offset = Number(document.getElementById("offset"));
    //strCipher = document.getElementById("strCipher").value.toUpperCase();
    let newStr = '';
    for(let i=0; i < strCipher.length; i++){
      let cod = strCipher.charCodeAt(i);
      let newCode = ((cod - 65 + offset) % 25 + 65);
      newStr += String.fromCharCode(newCode);
      }
    //document.getElementById("strCipher").value = newStr;  
    return newStr;
  
  }
  
  
};

export default cipher;//pq


/*function encode(offset, strCipher) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  offset = Number(document.getElementById(offset));
  strCipher = document.getElementById(strCipher).value.toUpperCase();
  let newStrCipher = '';
  for (let i = 0; i < strCipher.length; i++) {
    let strLetter = strCipher[i];
    if(strLetter === ' '){
      newStrCipher += strLetter;
      continue;
    }
    let 
  }
}*/
  //