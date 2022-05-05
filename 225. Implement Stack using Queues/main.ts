import { MyStack } from './Stack';
const prompt = require('prompt-sync')();

// Alias MyStack as Stack
class Stack extends MyStack {};

var stack = new Stack();
var input = "";
let filter = /[a-zA-Z]+$/;
let num = /\*.[0-9]/

while (input.toLowerCase() != "exit") {
    console.log('');
    console.log(stack.toString());
    input = prompt('> ')!;
    var action = input.match(filter)!.toString();
    switch (action.toLowerCase()) {
        case "pop": console.log(stack.pop()); break;
        case "top": console.log(stack.top()); break;
        case "push": stack.push(Number(input.match(num)));
        case "empty": console.log(stack.empty); break;
    }
}
