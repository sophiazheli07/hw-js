// 1
class SuperArray extends Array {
    constructor (arr) {
        super(arr);
    }
    at() {
        return {
            element: this[0][this[0].length - 1],
            array: this[0]
        }
    }
}
const array = new SuperArray([1,2,3,4]) 
console.log(array.at(0))
