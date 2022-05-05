import { Queue } from "./Queue";

test('First In First Out', () => {
    var queue = new Queue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.pop()).toBe(1);
    expect(queue.pop()).toBe(2);
    expect(queue.peek()).toBe(3);
});
