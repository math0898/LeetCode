import { MyStack } from './Stack';
const prompt = require('prompt-sync')();

// Alias MyStack as Stack
class Stack extends MyStack {};

var stack = new Stack();
var input = "";
let filter = /[a-zA-Z]+/;
let num = /\d/

while (input.toLowerCase() != "exit") {
    console.log('');
    console.log(stack.toString());
    input = prompt('> ')!;
    var action = input.match(filter)!.toString();
    switch (action.toLowerCase()) {
        case "pop": console.log(stack.pop()); break;
        case "top": console.log(stack.top()); break;
        case "push": stack.push(Number(input.match(num))); break;
        case "empty": console.log(stack.empty()); break;
        case "help":
            console.log("- empty         Prints whether the stack reports being empty or not.");
            console.log("- exit          Exits this interactive display of the stack.");
            console.log("- help          Prints this hopefully useful guide.");
            console.log("- pop           Removes the top-most item from the stack.");
            console.log("- push  <num>   Adds an item to the stack.");
            console.log("- top           Prints the top-most item on the stack without removing it.");
            break;
    }
}
