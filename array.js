/* const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join("|"));
console.log(primeNumbers.push(18,19));
console.log(primeNumbers)
//Methods

const courses = [
    { teacher: "Kyle Simpson", course: "JS Function Lite" },
    { teacher: "Sarah Drasner", course: "Intro to Vue" },
    { teacher: "Brian Holt", course: "Complete Intro to React v3" },
    { teacher: "Steve Kinney", course: "State Management" }
  ];
  courses.push({ teacher: "Sean Larkin", course: "Webpack" });
  console.log(courses);
  courses[2] = { teacher: "Brian Holt", course: "Complete Intro to React v4" };
  console.log(courses);

  

  let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
console.log(myFish);
console.log(removed);
removed = myFish.splice(2, 2, 'drum')
console.log(myFish);
console.log(removed);
removed=myFish.splice(1,0,'hey','really')
console.log(myFish);
console.log(removed); */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1));
console.log(animals.slice(0,3));
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers)
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);

