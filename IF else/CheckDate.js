// Check if a given date is between March 20 and June 20
const day = parseInt(process.argv[2]); // Read day from command line
const month = parseInt(process.argv[3]); // Read month from command line

if ((month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6)) {
    console.log(true);
} else {
    console.log(false);
}
