//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings

let arrayString = ['winning', 'tomato'];
function firstAndLast(array) {
  let newArray = [];
  let newElement = array.map(i => (i.charAt(0) + i.charAt(i.length-1)));
  newArray.push(newElement);
  return newArray;
}
console.log(firstAndLast(arrayString));


//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled
// let carArray = ["Bentley", "BMW", "McClaren", "Mercedez-Benz", "Ferrari", "Lamborghini"];
// carArray.forEach(element => console.log(element);
// let num = ["word", 2, 4, 6, 8, 10];
// function double(array) {
//     array.forEach(element => console.log(element.toString()*2));
//     return array;
//   }
//   double(num);
const doubleValues = (arr) => {
    let newArray = [];
    arr.forEach((value) => {
        newArray.push(value * 2);
    });
    return newArray;
};
console.log(doubleValues)


//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here
function firstAndLast(array) {
    let newArray = [];
    array.forEach(function (value) {
        newArray.push(value[0] + value[value.length -1]);
    }
)};  

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
// TIP: use nested loop;
for (let i = 1; i < 5; i++) {
    let element = i;
    console.log(`${element.toString()}`)*3;
};