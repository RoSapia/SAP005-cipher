import cipher from './cipher.js';


//function offset() {
  let offset = document.getElementById("offset");
  let c_select = document.createElement("select");
  offset.appendChild(c_select);
  for (let i = 1; i <= 26; i++) {
    let newoption = document.createElement("option");
    c_select.appendChild(newoption);
    newoption.innerHTML = i;
  }
//}
//offset();
//function messageChoice(evt) {
  //evt.preventDefault();
  let buttonSubmit = document.getElementById("submit");
  let buttonEncode = document.getElementById("encode");
  let buttonDecode = document.getElementById("decode");
  buttonSubmit.addEventListener("click", function(evt){
    evt.preventDefault();
    console.log(buttonEncode);
    console.log(buttonDecode);
    /*if (buttonEncode.addEventListener("click", encode, true)){
      console.log("Botão encode clicado ");
    }
    else if (buttonDecode.addEventListener("click", decode)){
      console.log("Botão decode clicado ");
    }*/
  });
//}

//offset();
///messageChoice();
console.log(cipher);//pq

