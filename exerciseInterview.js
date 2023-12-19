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

function processString(input) {
    const pattern = /(\d+)\[([a-z]+)\]/g;
  
    const output = input.replace(pattern, (match, count, content) => {
        return content.repeat(Number(count));
    });
    if (output.includes("[") || output.includes("]")) {
       return processString(output)
    }

    return output;
  }

  console.log(processString("3[asdf]")); 
  console.log(processString("3[a]4[b]"));
  console.log(processString("3[a2[b]]"));  

function generateOutput(inputStr) {

    const [num, content] = inputStr.split("[");
    const contentWithoutBracket = content.slice(0, -1);

    console.log(contentWithoutBracket);
    const outputStr = contentWithoutBracket.repeat(num);

    return outputStr;
}

function generateOutput(inputStr) {
    const segments = inputStr.split("]");

    // Initialize an empty string to store the result
    let outputStr = "";

    // Process each segment
    segments.forEach(segment => {
        // Find the last occurrence of '[' to get the content and multiplier
        const openBracketIndex = segment.lastIndexOf("[");
        if (openBracketIndex !== -1) {
            const multiplier = segment.substring(0, openBracketIndex)
            //const multiplier = parseInt(segment.substring(openBracketIndex + 1), 10) || 1;
            const content = segment.substring(openBracketIndex + 1);

            // Append the repeated content to the result string
            outputStr += content.repeat(multiplier);
        } else {
            // If no '[' is found, append the segment as is
            outputStr += segment;
        }
    });

    return outputStr;
}

function generateOutput(inputStr) {
    // Initialize a stack to keep track of characters and multipliers
    const stack = [];

    for (let char of inputStr) {
        if (char === ']') {
            // Pop characters until '[' is encountered
            let content = '';
            let multiplier = 0;
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                content = stack.pop() + content;
            }
            stack.pop(); // Remove '[' from the stack

            // Pop multipliers if present
            while (stack.length > 0 && !isNaN(parseInt(stack[stack.length - 1]))) {
                multiplier = multiplier * 10 + parseInt(stack.pop());
            }
            multiplier = multiplier || 1;

            // Repeat the content and push it back to the stack
            stack.push(content.repeat(multiplier));
        } else {
            // Push other characters to the stack
            stack.push(char);
        }
    }

    // Join the characters in the stack to get the final output
    const outputStr = stack.join('');

    return outputStr;
}
