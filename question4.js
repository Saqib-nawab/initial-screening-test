// Function to find missing elements in an array from 0 to highest number

/*
Question 3:
Write a function that will take an array as input and return an array with every missing
element from 0 to the highest entry. For example, in an array [3,4,9,1,7,3,2,6] the highest
entry is 9, and missing numbers are [0,5,8].
*/


function findMissingNumbers(arr) {
    if (arr.length === 0) {
        return [];
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Initialize an array to store missing numbers
    let missingNumbers = [];

    // Find missing numbers from 0 up to the highest number in the sorted array
    let current = 0;
    for (let num of arr) {
        while (current < num) {
            missingNumbers.push(current);
            current++;
        }
        current = num + 1; // Move to the next number after 'num'
    }

    // If there are numbers missing at the end of the range
    while (current <= arr[arr.length - 1]) {
        missingNumbers.push(current);
        current++;
    }

    // Return the array of missing numbers
    return missingNumbers;
}

// Example usage:
const array1 = [3, 4, 9, 1, 7, 3, 2, 6];
console.log(findMissingNumbers(array1)); // Output: [0, 5, 8]

const array2 = []; // Empty array case
console.log(findMissingNumbers(array2)); // Output: []

const array3 = [10, 11, 12]; // Higher range example
console.log(findMissingNumbers(array3)); // Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
