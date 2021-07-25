const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));
const someFunction=() => {
    return 19;
}
const someOtherFunction = function(fn){
    return fn()
}
 console.log(someOtherFunction(someFunction));