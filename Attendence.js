// Define constants for presence states
const PRESENT = 1;

// Generate a random number (0 or 1)
let attendance = Math.floor(Math.random() * 2); // 0 means Absent, 1 means Present

// Check employee status
if (attendance === PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}
