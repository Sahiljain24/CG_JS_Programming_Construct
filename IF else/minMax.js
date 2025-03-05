// Generate 5 random 3-digit numbers and find min & max
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // 100 to 999
}

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Numbers:", numbers);
console.log("Minimum Value:", min);
console.log("Maximum Value:", max);
