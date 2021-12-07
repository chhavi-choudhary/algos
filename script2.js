let secondElem=document.getElementById("second");
secondElem.innerText="I am new to this second group";
let thirdElem=document.getElementById("third");
thirdElem.innerHTML="I am <em>new team member</em> to this second group";
secondElem.style.fontWeight="bold"


const allButtons = document.getElementsByTagName('button');
for (let i = 0 ; i < allButtons.length ; i++) {
  allButtons[i].style.backgroundColor = 'skyblue';
}
const allWithRed = document.getElementsByClassName('red');
for (let i = 0 ; i < allWithRed.length ; i++) {
  allWithRed[i].style.color = 'green';
}
