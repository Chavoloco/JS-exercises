//Create a function that receives a String as a parameter and return True or False if the String is a Pangram. 
//(“The quick brown fox jumps over the lazy dog”).

function isPangram(sentence) {
    const AphabetLength = 26
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const regex = /[a-z]/
    const set = new Set()

    for (const i of sentence.toLowerCase()) {
        if (i.match(regex)) {
            set.add(i)
        }
        
    }

    return (AphabetLength === set.size ? true : false)
}

//console.log( isPangram("The quick brown fox jumps over the lazy dog23"))





//Create a function that receives a String as a parameter and return True or False if the String is a Pangram. 
//(“The quick brown fox jumps over the lazy dog”).

function isPangram2(string) {
    const pattern = /[a-z*]/g
    const setOfChars = new Set(string.match(pattern))
    if (setOfChars.size === 26) {
        return true
    } else {
        return false
    }
}

console.log(isPangram2("The quick brown fox jumps over the lazy dog"))