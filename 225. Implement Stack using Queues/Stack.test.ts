import { MyStack } from './Stack';

// Alias MyStack to Stack
class Stack extends MyStack {};

test('First In Last Out', () => {
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.top()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.top()).toBe(1);
    expect(stack.pop()).toBe(1);
});

test('Empty Check', () => {
    var stack = new Stack();
    expect(stack.empty()).toBe(true);
    stack.push(1);
    expect(stack.empty()).toBe(false);
    stack.push(2);
    stack.push(3);
    expect(stack.empty()).toBe(false);
    stack.pop();
    expect(stack.empty()).toBe(false);
    stack.pop();
    expect(stack.empty()).toBe(false);
    stack.pop();
    expect(stack.empty()).toBe(true);
});
