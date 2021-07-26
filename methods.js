const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
const someFunction=() => {
    return 19;
}
const someOtherFunction = function(fn){
    return fn()
}
 console.log(someOtherFunction(someFunction));

 const array2 = [1, 4, 9, 16];
 const map1 = array2.map(x => x * 2);
 console.log(map1)
 const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ]; 
  console.log(materials.map(material => material.length));
  


  const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const array4 = [1, 30, 4, 21, 100000];
array4.sort();
console.log(array4);

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

const obj = {
  foo() {
    return 'bar';
  }
};

console.log(obj.foo());