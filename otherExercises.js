function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        }else{
            console.log(i);
        }  
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function stringReverse(str) {
    return str.split("").reverse().join("")
}

function binarySearch(arr, target) {
    arr.sort()
    console.log(arr);
    let right = 0;
    let left = arr.length - 1;

    while (right <= left) {
        const mid = Math.floor((right + left) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return its position
        } else if (arr[mid] < target) {
            right = mid + 1; // Target is in the right half
        } else {
            left = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found in the array
}

// Example usage:
const sortedArray = [1,8, 3, 4, 5, 6, 7, 9,2];
const targetElement = 3;
const position = binarySearch(sortedArray, targetElement);

//linked lists
const linkedList = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    }
}

function matrixMultiplier() {
    const matrix1 = [
        [1,2,3],
        [3,4,5],
        [4,5,2],
    ]
    
    const matrix2 = [
        [1,4,3,4],
        [3,4,5,6],
        [4,6,2,3]
    ]
    
    let result = Array.from({length: matrix1.length}, () => Array(matrix2[0].length).fill(0) ) 
    console.log(result);
    
    console.log(matrix1.length); // show the number of rows
    console.log(matrix2[0].length); //show the numer of columns
    
    
    for (let i = 0; i < matrix1.length; i++) {
        for (let y = 0; y < matrix2.length; y++) {
            result[i][y] = matrix1[i][y] * matrix2[i][y]
            //console.log(matrix1[i][y] * matrix2[i][y]);
        }
    }
}

const image = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  ];

  class Rectangle{
    constructor(x = 0,y = 0,width = 0, height = 0){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}


function findRectangle(image) {
    

    const rectangle =  new Rectangle()

    if (image.length === 0) {
        throw new Error('Rectangle doesnt exist')
    }
    let width = 0
    let heigh = 0

    for (let i = 0; i < image.length; i++) {
        if (image[i].includes(0)) {
            heigh++
        }
        for (let y = 0; y < image[0].length; y++) {
            if (image[i][y] === 0) {
                if (rectangle.x === 0 && rectangle.y === 0) {
                    rectangle.x = y
                    rectangle.y = i
                }  
                width++
            }
            if (width > 0 && image[i][y] === 1 && rectangle.width === 0) {
                rectangle.width = width
            }
        }
    }
    rectangle.height = heigh
    console.log(rectangle);    
}

//findRectangle(image)



