function prefill(n, v ) {
    if (n < 0 || typeof n ) {
        throw new TypeError(`${n} is an invalid number`)
    } else if (n === 0) {
        return []
    } else if (typeof v === "undefined") {
        v = undefined
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(v) 
        }
        return result
    } else {
        let result = []
        for (let i = 0; i < n; i++) {
            result.push(v) 
        }
        return result
    }
}

const result = prefill("xyz", 1)
console.log(result);