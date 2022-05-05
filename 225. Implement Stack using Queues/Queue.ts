/**
 * Basic implementation of a Queue.
 * 
 * @author Sugaku
 */
export class Queue {

    /**
     * Creates an empty queue.
     */
    constructor () {

    }

    /**
     * Accessor method for wether the queue is empty or not.
     * 
     * @returns True if the queue contains no elements, otherwise false.
     */
    empty (): boolean {
        return false;
    }

    /**
     * Accessor method for the size of the queue.
     * 
     * @returns The size of the queue.
     */
    size (): number {
        return 1;
    }

    /**
     * Returns the first value in the queue without deleting it.
     * 
     * @return The value at the front of the queue.
     */
    peek (): Number {
        return null;
    }

    /**
     * Returns the first value in the queue and removes it.
     * 
     * @return The value at the front of the queue.
     */
    pop (): Number {
        return null;
    }

    /**
     * Adds a new element to the end of the queue.
     * 
     * @param n The element to add to the end of the queue.
     */
    push (n:number): void {

    }
}
