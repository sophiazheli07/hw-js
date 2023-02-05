//1

const arr = [1, 6, 8, 21, 56];
let sum = 0;

arr.forEach((el, i, arr) => {
    sum += +el / arr.length
})
console.log(sum, "average");

//2

const str = "Hello world random words here";

console.log(str.split(" ").length, "amount of words");

//3

const arr2 = [20, 90, 7, 8, 100];

let max = Math.max(...arr2);
let min = Math.min(...arr2);

console.log(max, "max")
console.log(min, "min")


