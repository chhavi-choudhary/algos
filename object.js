const person1 = {
  name: "Brian",
  ageRange: "25-35"
};
const person2 = {
  name: "Jack",
  ageRange: "65-75"
};
const person3 = {
  name: "Jackiee",
  ageRange: "69-73"
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you'll like Daft Punk you crazy millenial.");
  } else if (person.ageRange === "65-75") {
    console.log(
      "You're obviously going to like Johnny Cash. He walks the line."
    );
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  }
};
dog.speak();

const cat={
  name:"catty",
  nickname:"cutieee",
  age:3,
  dance(parameter1, parameter2){
    console.log("dada dudu dda",parameter1, parameter2)
  }
}

cat.dance("tatataatta", "gagaagagag")




suggestMusic(person1);
suggestMusic(person2);
suggestMusic(person3);