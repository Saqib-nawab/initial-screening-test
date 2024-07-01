// Function to check if a string is palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.toLowerCase().replace(/[\W_]/g, ''); //from stack overflow in order to omit capital letter dependencies as Karak is a pallindrom but will not be detected which is why

    // Initialize pointers for start and end of the string
    let left = 0;
    let right = str.length - 1;

    // Iterate through the string from both ends towards the center
    while (left < right) {
        // If characters at current pointers do not match, return false
        if (str[left] !== str[right]) {
            return false;
        }
        // Move the pointers towards the center
        left++;
        right--;
    }
    // If the entire string has been compared without mismatches, it's a palindrome
    return true;
}

//testing
console.log(isPalindrome("karak")); // Output: true
console.log(isPalindrome("doctor")); // Output: false
