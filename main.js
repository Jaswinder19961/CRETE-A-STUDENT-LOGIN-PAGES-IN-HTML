var myHeading = document.querySelector('h1');
myHeading.textContent='Website for login!';

document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Current User Mr.' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Current User Mr.' + storedName;
}

myButton.onclick = function() {
  setUserName();
}