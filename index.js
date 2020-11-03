import cipher from './cipher.js';//pq


function offset() {
  let offset = document.getElementById('offset');
  let c_select = document.createElement('select');
  offset.appendChild(c_select);
  for (let i = 1; i <= 26; i++) {
    let newoption = document.createElement('option');
    c_select.appendChild(newoption);
    newoption.innerHTML = i;
  }
}
offset();
/*function message_choice() {
  let button_submit = document.getElementById(submit)
  let button_encode = document.getElementById(encode);
  let button_decode = document.getElementById(decode);
  button_submit.addEventListener("click", function () {
    if (button_encode.addEventListener("click", encode, true)) {//se tiver clicado chama a função encode
      console.log("Botão encode clicado ");
    }
    else if (button_decode.addEventListener("click"))
  }
}*/

//offset();
//radio_choice();
console.log(cipher);//pq

