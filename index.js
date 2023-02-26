// 1. Написати функцію яка отримує від`ємне число
// аргументом та повертає додатнє число на базі від`ємного -1 → 1 

function myFn2(num) {
    console.log(Math.abs(num))
} 
myFn2(-1)


// 2. Написати функцію що отримує об`єкт та повертає всі його ключі у вигляді масиву
//{name: “Igor”, age: 23} → [”name”, “age”]

function myFn(obj) {
    let arr = [];
    for (let i in obj) {
        arr.push(i);
    }
    return arr;
  }
console.log( myFn({name: "Igor", age: 23}))

// 3. Створіть свій метод map для масивів 

Array.prototype.myMap = function(callback) {
    let newArr = [];
    let x = this.length;
    for (let i = 0; i < x; i++) {
      let count = callback(this[i]);
      newArr.push(count);
    }
    return newArr;
  };
  
  let arr = [1, 2, 3];
  arr = arr.myMap(e => e * 2);
  console.log(arr);