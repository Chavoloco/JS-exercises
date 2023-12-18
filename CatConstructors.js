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

/*const cat1 = new Cat("Garfield", 12)
const cat2 = new Cat("Pepe", 34)
const cat3 = new Cat("Panflus", 23)
const cat4 = new Cat("Zuzu", 73)

const averageWeight = Cat.averageWeight()

console.log(averageWeight);

cat3.weight = 34

console.log(averageWeight);*/

const arr = [-23, 4, -3, 8, -12]
let result = - Number.MAX_VALUE
for (let index = 0; index < arr.length; index++) {
    
    if (arr[index] * arr[index + 1] > result) {
        result = arr[index] * arr[index + 1]
        console.log(result);
    }
    console.log(`result:  ${result}`);
}

if (Number.MAX_VALUE > -12) {
    console.log("hola");
}