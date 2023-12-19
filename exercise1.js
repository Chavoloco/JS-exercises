//123456

function numberConverter(num) {
    const str = String(num)
    const arr = str.split("")
    /*for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e.length === 0) {
            arr[i] = "+"
        }
    }
    const result = String(arr).replaceAll(",","")*/
    const result = arr.join("+")
    console.log(result);
}

numberConverter(123456)

function formatNumberAsString(number) {
    // Convert the number to a string and split it into an array of digits
    const digits = Array.from(String(number), Number);
    
    // Join the digits with '+' to create the desired string
    const resultString = digits.join('+');
    
    return resultString;
}

// Example usage:
const number = 123456;
const result = formatNumberAsString(number);
console.log(result);