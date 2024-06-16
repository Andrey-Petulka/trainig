let wrapColumn = document.querySelector('.wrap__column');
let wrapRow = document.querySelector('.wrap__row');
let blocks = document.querySelector('.blocks');
let card = document.querySelector('.card');
let textFor = document.querySelectorAll('.text-for');
let blabla = document.getElementById("app");
let num = 0;

wrapRow.onclick = function() {
    blocks.classList.toggle('blocks');
    blocks.classList.toggle('blocks__row');
    blocks.classList.remove('blocks__column');
    console.log('Клик!');
};

wrapColumn.onclick = function() {
    blocks.classList.toggle('blocks');
    blocks.classList.toggle('blocks__row');
    console.log('Клик!');
};

let longread = document.querySelector('.longread');
let colorSetting = document.querySelector('.color-setting');
let sizeSetting = document.querySelector('.size-setting');
let pixels = document.querySelector('.pixels');
let backgroundSetting = document.querySelector('.background-setting');

colorSetting.onchange = function () {
  longread.style.color = colorSetting.value;
};

sizeSetting.oninput = function () {
  pixels.textContent = sizeSetting.value;
  longread.style.fontSize = sizeSetting.value  + 'px';
};

backgroundSetting.onchange = function(){
  longread.style.backgroundColor = backgroundSetting.value;
}
/*
let password = document.querySelector('.password');
let showPassword = document.querySelector('.show-password');

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};
*/

let password = document.querySelector('.password');
let showPassword = document.querySelector('.show-password');
let securityBar = document.querySelector('.security-bar');

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = 'text';
  } else {
    password.type = 'password';
  }
};

password.oninput = function () {
  let passLength = password.value.length;
  securityBar.style.width = passLength * 10 + '%';
  if (passLength <= 5) {
    securityBar.style.backgroundColor = 'red';
  } else if (passLength > 5 && passLength < 10) {
    securityBar.style.backgroundColor = 'gold';
  } else {
    securityBar.style.backgroundColor = 'green';
  }
};

/*Массив с числами*/
const inputOne = document.getElementById("something").value;
const inputTwo = document.getElementById("something1").value;
const inputThree = document.getElementById("something2").value;
const inputFour = document.getElementById("something3").value;
const inputFive = document.getElementById("something4").value;
let arr = [inputOne, inputTwo, inputThree, inputFour, inputFive]