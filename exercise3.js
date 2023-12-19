function isAnagram(str1, str2) {
    const arr1 = str1.toLowerCase().replaceAll(" ","").split("").sort().join("")
    const arr2 = str2.toLowerCase().replaceAll(" ","").split("").sort().join("")

    if (arr1.lenght !== arr2.lenght) {
        return false
    }

    console.log(arr1);
    console.log(arr2);

    return arr1 === arr2
}

console.log("is anagram: " + isAnagram("cat", "act  "))

function areAnagrams(str1, str2) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    // Check if the sorted characters of both strings are equal
    const sortedStr1 = cleanStr1.split('').sort().join('')
    const sortedStr2 = cleanStr2.split('').sort().join('')

    console.log(sortedStr1);
    console.log(sortedStr2);

    return sortedStr1 === sortedStr2;
}

// Example usage:
const str1 = "cat";
const str2 = "act";

const result = areAnagrams(str1, str2);
console.log(result);  // Output: true