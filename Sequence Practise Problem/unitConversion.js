
// Unit Conversions

// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches is ${feet.toFixed(2)} feet`);

// b. Convert 60 feet x 40 feet to meters
const feetToMeter = 0.3048;
let lengthInMeters = 60 * feetToMeter;
let widthInMeters = 40 * feetToMeter;
console.log(`60ft x 40ft is ${lengthInMeters.toFixed(2)}m x ${widthInMeters.toFixed(2)}m`);

// c. Calculate area of 25 such plots in acres
let areaInMeters = lengthInMeters * widthInMeters;
let totalAreaInAcres = (areaInMeters * 25) / 4046.86; // 1 acre = 4046.86 m²
console.log(`Total area of 25 plots in acres: ${totalAreaInAcres.toFixed(4)} acres`);
