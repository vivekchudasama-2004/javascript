function countVowels(str) {
    // Define a string containing all vowels
    const vowels = 'aeiouAEIOU';
    let count = 0;

    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    // Return the number of vowels found
    return count;
}

// Example usage
const exampleString = "Hello, World!";
console.log("Number of vowels in the string:", countVowels(exampleString)); // Output: 3
