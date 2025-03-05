// Perform different unit conversions
const conversionType = parseInt(process.argv[2]);
const value = parseFloat(process.argv[3]);

switch (conversionType) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value / 0.3048).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Use 1 for Feet to Inches, 2 for Feet to Meters, 3 for Inches to Feet, 4 for Meters to Feet.");
}
