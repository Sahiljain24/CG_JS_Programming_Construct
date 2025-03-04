function calculateMonthlyWage(dailyWage) {
    const WORKING_DAYS_PER_MONTH = 20; // Fixed working days in a month
    return dailyWage * WORKING_DAYS_PER_MONTH;
}

// Example usage
const dailyWage = 500;
console.log(`Daily Wage: $${dailyWage}`);
console.log(`Monthly Wage (20 days): $${calculateMonthlyWage(dailyWage)}`);
