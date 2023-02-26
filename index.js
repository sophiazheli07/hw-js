// 1
const fn = function (f1, f2) {
	return {
			result1: f1(),
			result2: f2()
   }
}

fn(() => "res1", () => "res2")

// 2 Написати функцію що приймає 2 числа (а та b) 
// і повертає суму довжин цих чисел (переведідь числа у строки та дізнайтеся їх довжину)

function myFn (a, b) {
    return (a.toString() + b.toString())
}
console.log(myFn(2, 66).length)