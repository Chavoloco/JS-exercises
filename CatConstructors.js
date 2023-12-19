class Cat {
    constructor(name, weight) {
        this.name = name
        this.weight = weight
        if (!Cat.allWeights && !Cat.counter) {
            Cat.allWeights = 0
            Cat.counter = 0
        }
        Cat.allWeights += weight
        Cat.counter ++
    }

    get name() {
        return this._name
    }

    set name(name) {
        this._name = name
    }

    get weight() {
        return this._weight
    }

    set weight(weight) {
        Cat.allWeights - this._weight
        this._weight = weight
        Cat.allWeights += this._weight
    }

    static averageWeight(){
        if (!Cat.allWeights || Cat.allWeights === 0) {
            return 0
        } else {
            return Cat.allWeights / Cat.counter
        } 
    }
}

const cat1 = new Cat("Garfield", 12)
const cat2 = new Cat("Pepe", 34)
const cat3 = new Cat("Panflus", 23)
const cat4 = new Cat("Zuzu", 73)

console.log(Cat.averageWeight());

cat4.weight = 34

console.log(Cat.averageWeight());

const arr = [-23, 4, -3, 8, -12]
arr.sort((a,b) => a - b).reverse()
console.log(arr);
const result = arr[0] * arr[1]
console.log(result);
