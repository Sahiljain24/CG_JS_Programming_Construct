function calculateTotalWage(dailyWage, hoursPerDay) {
    const MAX_WORKING_DAYS = 20;
    const MAX_WORKING_HOURS = 160;

    let totalDays = 0;
    let totalHours = 0;
    let totalWage = 0;

    while (totalDays < MAX_WORKING_DAYS && totalHours + hoursPerDay <= MAX_WORKING_HOURS) {
        totalDays++;
        totalHours += hoursPerDay;
        totalWage += dailyWage;
    }

    return { totalDays, totalHours, totalWage };
}

// Example usage
const dailyWage = 500; // Fixed wage per day
const hoursPerDay = 8; // Assuming 8 working hours per day

const result = calculateTotalWage(dailyWage, hoursPerDay);
console.log(`Total Days Worked: ${result.totalDays}`);
console.log(`Total Hours Worked: ${result.totalHours}`);
console.log(`Total Monthly Wage: $${result.totalWage}`);
