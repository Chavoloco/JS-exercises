//Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//A 1-interesting polygon is just a square with a side of length 1. 
//An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, 
//side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

function solution(n) {
    return n * n + (n - 1) * (n - 1)
}

const result = solution(7)

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a,b) => a - b);
console.log(array1);