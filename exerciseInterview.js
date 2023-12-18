/*. Given this input: “3[asdf]” you have to generate an output string: asdfasdfasdf
# Q1
## input => “3[asdf]”
## output => “asdfasdfasdf”
# Q2
## input => “3[a]4[b]”
## output => “aaabbbb”
# Q3
## input => “3[a2[b]]”
## interim output => “3[abb]”
## output => “abbabbabb”
*/

function repeater(str) {
    const regex = /(\d+)\[(.*?)\]/g
    const match = str.match(regex)
    for (const i of match) {
        const number = i.match(/(\d+)/g)
        const string = i.match(/[a-z]+/g)
        if (Object.keys(number).length > 1) {
            const inner = ""
            for (let j = Object.keys(number).length; j >= 0; j--) {
                inner += string[j].repeat(number[j])
                console.log(inner)
            }
        }
        else {
            //console.log(i)
        }
    }
}
repeater("3[abs]2[er5[tr]]4[as]")
