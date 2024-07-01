
/*
Question 3:
Write a function that will take an array as input and return the sum of the two largest
numbers in a n array. For example, in the array [3,7,1,5,11,19] the result would be 30
because 11 and 19 are the largest numbers.
*/


// Function to find sum of two largest numbers in an array
function sumOfTwoLargest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }

    // Initialize variables to store the two largest numbers
    let largest1 = 0;
    let largest2 = 0;

    // Iterate through the array to find the two largest numbers
    for (let num of arr) {
        if (num > largest1) {
            largest2 = largest1; // Update the second largest number
            largest1 = num; // Update the largest number
        } else if (num > largest2 && num !== largest1) {
            largest2 = num; // Update the second largest number
        }
    }

    // Return the sum of the two largest numbers
    return largest1 + largest2;
}

// testing:
const array1 = [3, 7, 1, 5, 11, 19];
console.log(sumOfTwoLargest(array1)); // Output: 30
