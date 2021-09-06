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
    currentElement.innerHTML = "<h1>Modified by JavaScript!</h1>";
  }

  const button = document.querySelector('.event-button');
  button.addEventListener('click', function () {
    alert("Hey there!");
  });


  const input = document.querySelector('.input-to-copy');
  const paragraph = document.querySelector('.p-to-copy-to');

  input.addEventListener("keyup", function() {
    paragraph.innerText  = input.value;
  });
