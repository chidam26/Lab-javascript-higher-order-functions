// Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);



// Function #2: Array Splice
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
let modifiedFood = foods.splice(2,0, "noodles", "icecream");
console.log(foods);



// Function #3: Filter
const numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray){
    let even = numberArray.filter(item => {
        return item % 2 == 0;
    });
    console.log(even);
}
isEven(numberArray);



// Function #4: Reject
const numberArray = [12,324,213,4,2,3,45,4234];
function isPrime(numberArray) {
    let prime = numberArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) 
          return false;
      }
      return true;
    });
    console.log(prime);
  }
  isPrime(numberArray);



//   Function #5: Reject
const numberArray = [12,324,213,4,2,3,45,4234];
function nonPrime(numberArray) {
    let nonprime = numberArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) 
        return true;
      }
      return false;
    });
    console.log(nonprime);
  }
  nonPrime(numberArray);



// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
 let square = myArray.map(function (number)
   {
     return number * number;
   });
console.log(square);
}
findSquareOfNumbers(myArray)



// Function #7: Reduce
const myArray = [2, 3, 5, 10];
function mutilply(myArray){
    let answer = myArray.reduce((first, next) => {
        return first*next;
    });
    console.log(answer);
}
mutilply(myArray)


// Array Lambda
const numberArray = [12,324,213,4,2,3,45,4234];
let evenNum = numberArray.filter((num) => num % 2 == 0);
console.log(evenNum);