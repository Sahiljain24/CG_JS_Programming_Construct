// Define constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

// Generate a random work type (0 = No Work, 1 = Part Time, 2 = Full Time)
let workType = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
let workHours = 0;

// Use switch case to determine work hours
switch (workType) {
    case 1:
        workHours = PART_TIME_HOURS;
        console.log("Employee worked Part Time");
        break;
    case 2:
        workHours = FULL_TIME_HOURS;
        console.log("Employee worked Full Time");
        break;
    default:
        workHours = 0;
        console.log("Employee did not work");
}

// Calculate wage
let dailyWage = workHours * WAGE_PER_HOUR;
console.log("Daily Wage: $" + dailyWage);
