import cipher from './cipher.js';


function offset(){
    var offset = document.getElementById('offset');
    var c_select = document.createElement('select');
    offset.appendChild(c_select);
    var i = 0;
        for (i = 1; i < 26; i++) {
          var newoption = document.createElement('option');
          c_select.appendChild(newoption);    
          newoption.innerHTML = i;          
        }
}

offset();

console.log(cipher);

