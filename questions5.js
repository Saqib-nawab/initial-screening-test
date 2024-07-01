
/*
Question 5:
Write a function that will take an array of numbers and return the number most repeated
in the array with how many times it was repeated. For example, if the array is
[4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times..
*/

// Function to find the most repeated number and its count in an array
function repeatednums(arr) {

    // Object to store counts of each number
    let countnum = {};

    // Iterate through the array to count occurrences of each number
    for (let num of arr) {
        if (countnum[num]) {
            countnum[num]++;
        } else {
            countnum[num] = 1;
        }
    }

    // Variables to store the most repeated number and its count
    let mostRepeatedNumber;
    let maxCount = 0;

    // Iterate through countnum to find the number with the highest count
    for (let num in countnum) {
        if (countnum[num] > maxCount) {
            mostRepeatedNumber = num;
            maxCount = countnum[num];
        } a// Function to find the most repeated number and its count in an array
        function repeatednumsNumber(arr) {
            if (arr.length === 0) {
                return "Array is empty";
            }

            // Object to store frequencies of each number
            let frequencyMap = {};

            // Calculate frequencies of each number in the array
            for (let num of arr) {
                if (frequencyMap[num]) {
                    frequencyMap[num]++;
                } else {
                    frequencyMap[num] = 1;
                }
            }

            // Variables to store the most repeated number and its frequency
            let mostRepeatedNum;
            let maxFrequency = 0;

            // Find the number with the highest frequency
            for (let num in frequencyMap) {
                if (frequencyMap[num] > maxFrequency) {
                    mostRepeatedNum = num;
                    maxFrequency = frequencyMap[num];
                }
            }

            // Return the result as a formatted string
            return `${mostRepeatedNum} is repeated ${maxFrequency} times`;
        }

        // Example usage:
        const array1 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
        console.log(repeatednumsNumber(array1)); // Output: "4 is repeated 5 times"

        const array2 = [1, 2, 3, 4, 5];
        console.log(repeatednumsNumber(array2)); // Output: "1 is repeated 1 times"

        const array3 = []; // Empty array case
        console.log(repeatednumsNumber(array3)); // Output: "Array is empty"

    }

    // Return the result as a string
    return `${mostRepeatedNumber} is repeated ${maxCount} times`;
}

// testing:
const array1 = [4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5];
console.log(repeatednums(array1)); // Output: "4 is repeated 5 times"
