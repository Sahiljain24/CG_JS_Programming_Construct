
// Generate 5 random two-digit numbers and calculate sum and average
let numbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // 10 to 99
    numbers.push(num);
    sum += num;
}

let average = sum / numbers.length;
console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
