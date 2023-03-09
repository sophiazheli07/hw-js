// 1

const arr = [1, 2, 4, "I am not a number", "Hello", 100, 45];

const sum = arr.reduce( (acc, el) => {
    if ( typeof el === "number") {
       return acc + el;
    }
    return acc;
 }, 0);
console.log(sum);


// 2

const arr2 = [
    {city: "lviv"}, 
    {city: "Kyiv"}, 
    {city: "dnipro"}
];

console.log(arr2.every((el) => el.city[0] === el.city[0].toUpperCase()))

// 3

const arr3 = Array(10).fill(10);

const res = arr3.reduce((acc, el) => {
    el = Math.floor(Math.random()*100)
    arr3.push(el)
    return acc;
}, [])
console.log(res)
