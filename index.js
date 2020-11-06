import cipher from './cipher.js';

let offsetDiv = document.getElementById("offsetDiv");
let offset = document.createElement("select");
offsetDiv.appendChild(offset);
for (let i = 1; i < 26; i++) {
  let newoption = document.createElement("option");
  offset.appendChild(newoption);
  newoption.innerHTML = i;
  newoption.value = i;
}

let buttonSubmit = document.getElementById("submit");
let choice = document.getElementsByName("choice");
buttonSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();
  let strCipher = document.getElementById("str_cipher").value;

  if (choice[0].checked) {
    document.getElementById("str_cipher").value = cipher.encode(Number(offset.value), strCipher.toString().toUpperCase());
  }
  else if (choice[1].checked) {
    document.getElementById("str_cipher").value = cipher.decode(Number(offset.value), strCipher.toString().toUpperCase());
  }
});






