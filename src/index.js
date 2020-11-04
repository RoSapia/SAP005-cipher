import cipher from './cipher.js';

let offset = Number(document.getElementById("offset"));
let strCipher = document.getElementById("str_cipher").value.toUpperCase();
document.getElementById("str_cipher").value = cipher.newStr;
let createOffset = document.getElementById("offset");
let c_select = document.createElement("select");
createOffset.appendChild(c_select);
for (let i = 1; i <= 26; i++) {
  let newoption = document.createElement("option");
  c_select.appendChild(newoption);
  newoption.innerHTML = i;
}

let buttonSubmit = document.getElementById("submit");
let choice = document.getElementsByName("choice");
buttonSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log(choice);
  if (choice[0].checked) {
    console.log("Botão encode clicado ");
  }
  else if (choice[1].checked) {
    console.log("Botão decode clicado ");
  }
});



console.log(cipher.encode(offset, strCipher));

