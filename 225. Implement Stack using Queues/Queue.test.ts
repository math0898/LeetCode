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

test('Size and Empty Check', () => {
    var queue = new Queue();
    expect(queue.empty()).toBe(true);
    expect(queue.size()).toBe(0);
    queue.push(1);
    expect(queue.empty()).toBe(false);
    expect(queue.size()).toBe(1);
    queue.push(2);
    expect(queue.size()).toBe(2);
    queue.push(3);
    expect(queue.size()).toBe(3);
    queue.peek();
    expect(queue.size()).toBe(3);
    expect(queue.empty()).toBe(false);
    queue.pop();
    expect(queue.size()).toBe(2);
    expect(queue.empty()).toBe(false);
    queue.pop();
    expect(queue.empty()).toBe(false);
    expect(queue.size()).toBe(1);
    queue.pop();
    expect(queue.empty()).toBe(true);
    expect(queue.size()).toBe(0);
});
