class Person {
    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }
}
/*
John
Aviva
Ana
*/

const person1 = new Person("John", 43, "Bv Sn Juan")
const person2 = new Person("Aviva", 34, "Av. Glarciar")
const person3 = new Person("Ana", 56, "41 Street")

const arr = [person1, person2, person3]

arr.sort((a, b) => a.age - b.age)

console.log(arr)

