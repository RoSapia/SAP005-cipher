import cipher from './cipher.js';

var num = document.getElementById("offset")
function offset(num){
    var select = document.getElementsByTagName('select')[0];
        for (i = 1; i < 26; i++) {
          var newoption = document.createElement('option');
          select.appendChild(newoption);
          newoption.innerHTML = i;
          return num;
        }
}

console.log(cipher);
