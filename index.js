import cipher from './cipher.js';


function offset(){
    let offset = document.getElementById('offset');
    let c_select = document.createElement('select');
    offset.appendChild(c_select);
    let i = 0;
        for (i = 1; i <= 26; i++) {
          let newoption = document.createElement('option');
          c_select.appendChild(newoption);    
          newoption.innerHTML = i;          
        }
}

offset();

console.log(cipher);

