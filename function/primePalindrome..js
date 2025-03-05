// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));

if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
    let palindrome = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindrome}.`);
    console.log(`${palindrome} is ${isPrime(palindrome) ? "" : "not "}a Prime Number.`);
} else {
    console.log(`${num} is not a Prime Number.`);
}
