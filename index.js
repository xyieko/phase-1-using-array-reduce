const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Assuming batteryBatches is defined and is an array of numbers

// Use reduce to sum up the total batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Start with an initial value of 0

console.log(totalBatteries); // This will log the total number of batteries
