// 1
const obj1 = {
	city: "Lviv",
	visitors: 150000
};


console.log("City "+ obj1.city + " " + "has " + obj1.visitors + " visitors" + " nowadays");

// 2 


const obj = {
	n1: 10,
    n2: 90,
	n3: 100
}

let total = 0;

for (let value in obj) {
  total += obj[value];
}

console.log(total)