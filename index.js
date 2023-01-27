// 1

const arr = ["1", "2", "4", "7"];
const res = [];

arr.forEach((el) => {
    res.push(+el)
})
console.log(res);

// 2

const arr1 = ["Poland", "Ukraine", "USA"];
const res1 = [];

arr1.forEach((el) => {
    res1.push(el[0])
});
console.log(res1);

// 3 

const arr2 = ["Lviv", "Kyiv", "Poltava"];
console.log(arr2.indexOf("Kyiv"));