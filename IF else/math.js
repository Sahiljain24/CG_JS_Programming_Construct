// Read three numbers and perform arithmetic operations
const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const c = parseFloat(process.argv[4]);

const op1 = a + b * c;
const op2 = a % b + c;
const op3 = c + a / b;
const op4 = a * b + c;

let results = [op1, op2, op3, op4];

console.log("Results of operations:");
console.log("a + b * c =", op1);
console.log("a % b + c =", op2);
console.log("c + a / b =", op3);
console.log("a * b + c =", op4);

console.log("Maximum Value:", Math.max(...results));
console.log("Minimum Value:", Math.min(...results));
