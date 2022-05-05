/**
 * A simple node which contains data and made hold a path to a next item.
 * 
 * @author Sugaku
 */
class Node {

    /**
     * The data being stored in this node.
     */
    public data:number;

    /**
     * Either null or the next node in the sequence.
     */
    public next:Node | null;

    /**
     * Creates a new Node with the given number value.
     * 
     * @param n The number value to store in this node.
     */
    constructor (n:number) {
        this.data = n;
        this.next = null;
    }
}

/**
 * Basic implementation of a Queue.
 * 
 * @author Sugaku
 */
export class Queue {

    /**
     * The head node for the queue.
     */
    private head:Node | null;

    /**
     * The length of the queue.
     */
    private length:number; 

    /**
     * Creates an empty queue.
     */
    constructor () {
        this.length = 0;
        this.head = null;
    }

    /**
     * Accessor method for wether the queue is empty or not.
     * 
     * @returns True if the queue contains no elements, otherwise false.
     */
    empty (): boolean {
        return this.length == 0;
    }

    /**
     * Accessor method for the size of the queue.
     * 
     * @returns The size of the queue.
     */
    size (): number {
        return this.length;
    }

    /**
     * Returns the first value in the queue without deleting it.
     * 
     * @return The value at the front of the queue.
     */
    peek (): number | null {
        return this.head == null ? null : this.head.data;
    }

    /**
     * Returns the first value in the queue and removes it.
     * 
     * @return The value at the front of the queue.
     */
    pop (): number | null {
        if (this.head == null) return null;
        this.length--;
        var data = this.head.data;
        this.head = this.head.next;
        return data;
    }

    /**
     * Adds a new element to the end of the queue.
     * 
     * @param n The element to add to the end of the queue.
     */
    push (n:number): void {
        this.length++;
        var current = this.head;
        if (this.head == null) {
            this.head = new Node(n);
            return;
        }
        while (current!.next != null) current = current!.next;
        current!.next = new Node(n);
    }

    /**
     * Returns this queue in the form of a string.
     * 
     * @return the queue in a string form.
     */
    toString (): string {
        var toReturn:string = "";
        var current = this.head;
        if (this.head == null) return "Empty Queue";
        else {
            toReturn += current!.data;
            current = current!.next;
        }
        while (current!.next != null) {
            toReturn += ", " + current!.data;
            current = current!.next;
        }
        return toReturn;
    }
}
