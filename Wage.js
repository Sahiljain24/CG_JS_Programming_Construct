// Constants
const WAGE_PER_HOUR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

/**
 * Function to get work hours based on employee type
 * @returns {number} Work hours (0, 4, or 8)
 */
function getWorkHours() {
    let workType = Math.floor(Math.random() * 3); // 0 = No Work, 1 = Part Time, 2 = Full Time

    switch (workType) {
        case 1:
            console.log("Employee worked Part Time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work");
            return 0;
    }
}

// Get work hours and calculate wage
let workHours = getWorkHours();
let dailyWage = workHours * WAGE_PER_HOUR;

console.log("Daily Wage: $" + dailyWage);
