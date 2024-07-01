/*
Question 1:
Write a function that will take an array as input, sort, and return the array in descending
order. For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2].
*/
// Function to sort an array in descending order without using built-in functions
function sortDescending(arr) {
    // Implementing Bubble Sort algorithm
    let n = arr.length; //finds array length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element is smaller than the next element
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Return the sorted array
    return arr;
}

// Example usage:
const inputArray = [3, 2, 7, 4, 6, 9];
const sortedArray = sortDescending(inputArray);
console.log(sortedArray); // Output: [9, 7, 6, 4, 3, 2]
