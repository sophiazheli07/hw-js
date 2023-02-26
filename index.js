// 1
const arr = [[1,2,3], [4,5,6]];


arr.forEach((arrayElement) => {
    arrayElement.forEach((number) => {
        console.log(number.toString())
    });
});

// як залишити це в arr?

// 2
const arr1 = [{name: "Igor", age: 20}, {name: "Oleg", age: 40}];

const res = arr1.map((obj) => {
    const res1 = [];
    for(let key in obj) {
        res1.push(key);
        res1.push(obj[key]);
    }
    return res1;
}).flat()

const result =res.reduce((acc, el, i, arr) => {
    arr[i+1] && acc.push([el, arr[i+1]]);
    return acc;
}, [])
console.log(result.filter((el, i) => !(i%2)))

// 3

const arr2 = [1,10, 3, 5, 9];
console.log(arr2.sort((el, el2) => el - el2))
console.log(arr2.sort((el, el2) => el2 - el))