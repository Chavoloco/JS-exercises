//Create a class Person and create 3 objects with name, age and address (Names: John, Anna, Rocky, Aviva). 
//Assign those 3 objects into an array and sort them by descending age. Then create a function that will receive the array 
//of objects as argument and return an array of boolean depending on if the name is a palindrome or not 
//(Expected result: [John: false, Anna: true, Rocky: false, Aviva: true]).

class Person {
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }
}

const people = [
    new Person("John", 23, "12 Street"),
    new Person("Anna", 54, "43 Street"),
    new Person("Aviva", 12, "56 Street")
]

people.sort((a, b) => (a.age > b.age ? -1 : 0))



//console.log(people[1].name.split("").reverse());



function arePalindromes(arr) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].name;
        if (element.toLowerCase() === element.toLowerCase().split("").reverse().join("")) {
            arr[i] = `${element}: true`
        } else {
            arr[i] = `${element}: false`
        }
    }
    return arr
}

console.log(arePalindromes(people))
