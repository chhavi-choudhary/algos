const square=document.querySelector('.redsquare');
square.style.backgroundColor="blue";
const squa=document.querySelector('.greensquare');
squa.style.backgroundColor="pink";
squa.style.border="3px solid magenta"

const square2=document.getElementById('yellowsquare');
square2.style.backgroundColor="grey";

const elementsToChange = document.querySelectorAll('.js-target');
  for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerText = "Modified by JavaScript!";
  }