# 225. Implement Stack using Queues

Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `top`, `pop`, and `empty`).

Implement the `MyStack` class:

- `void push(int x)` Pushes element x to the top of the stack.
- `int pop()` Removes the element on top of the stack and returns it.
- `int top()` Returns the element on the top of the stack.
- `boolean empty()` Returns `true` if the stack is empty, `false` otherwise.

__Notes:__

- You must use __only__ standard operations of a queue, which means that only `push to back`, `peek/pop from front`, `size` and `is empty` operations are valid.
- Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or dequeue (double-ended queue) as long as you only use a queue's standard operations.

__Example 1:__

```md
__Input__
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
__Output__
[null, null, null, 2, 2, false]

__Explanation__
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
```

__Constraints:__

- `1 <= x <= 9`
- At most 100 calls will be made to `push`, `pop`, `top`, and `empty`.
- All the calls to `pop` and `top` are valid.

__Follow-up:__ Can you implement the stack using only one queue?

[Implement Stack Using Queues on LeetCode](https://leetcode.com/problems/implement-stack-using-queues/)

## Approach Two Queues

Cycle the elements of the 'stack' between the two queues. Once at the last element it can be returned and not added to the other queue.

## Approach Single Queue

Cycle elements through a single queue to return the 'top-most' element.

[Submission](https://leetcode.com/submissions/detail/693836031/)

[Commit](https://github.com/math0898/LeetCode/tree/34fbb3887de2b24f9dae83c086c2404a1dc1e07b)
