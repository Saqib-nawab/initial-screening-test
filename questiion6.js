

/*
Question 6:
Write a function that will take an array as input, it will rotate the array to the right 1 time
and return the rotated array.Rotation of the array means that each element is shifted right
by one index.For example, the rotation of array A = [3, 8, 9, 7, 6] is[6, 3, 8, 9, 7]
*/


//Sorry i could not find a way to without using built-in function
function rotateRight(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const rotatedArray = [...arr];
    const lastElement = rotatedArray.pop();
    rotatedArray.unshift(lastElement);

    return rotatedArray;
}

// testing:
const array1 = [3, 8, 9, 7, 6];
console.log(rotateRight(array1)); // Output: [6, 3, 8, 9, 7]
