import { Queue } from './Queue';

/**
 * The MyStack class implements a basic stack using a single queue.
 * 
 * @author Sugaku
 */
export class MyStack {

    /**
     * The queue being used to mock a stack.
     */
    private queue:Queue;

    /**
     * Creates a new stack object.
     */
    constructor () {
        this.queue = new Queue();
    }

    /**
     * Adds an item to the stack.
     * 
     * @param x The item to add to the stack.
     */
    push (x: number): void {
        this.queue.push(x);
    }

    /**
     * Removes the top most element of the stack.
     * 
     * @returns The top most element of the stack.
     */
    pop (): number {
        for (var i = 0; i < this.queue.size() - 1; i++) {
            var n = this.queue.pop();
            if (n != null) this.queue.push(n);
        }
        return this.queue.pop();
    }

    /**
     * Peers at the top most element without removing it.
     * 
     * @returns The top most element of the stack.
     */
    top (): number {
        for (var i = 0; i < this.queue.size() - 1; i++) {
            var n = this.queue.pop();
            if (n != null) this.queue.push(n);
        }
        var n = this.queue.pop();
        this.queue.push(n);
        return n;
    }

    /**
     * Accessor method used to determine whether the stack is empty or not.
     * 
     * @returns True if and only if the stack is empty.
     */
    empty (): boolean {
        return this.queue.empty();
    }
}
