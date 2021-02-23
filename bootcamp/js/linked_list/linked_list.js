class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    Add(element) {
        let node = new Node(element);
        let current;
        if (this.head == null)
        {
            this.head = node;
        }
        else 
        {
            current = this.head;
            while (current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        ++this.size;
    }

    IsEmpty() {
        return this.size == 0; 
    } 

    PrintList() { 

        let current = this.head; 
        let str = '';

        while (current) 
        { 
            str += current.element +  ' => '; 
            current = current.next; 
        } 

        console.log(str); 
    }
    
    GetFirst() {
        return this.head;
    }

    GetLast() {
        let current = this.head;
        let res = current;
        if (current == null)
        {
            return null;
        }
        else
        {
            while (current.next)
            {
                res = current.next;
                current = current.next;
            }
            return res;
        }
    }

    RemoveKNode(k) {
        if (k > this.size)
        {
            return -1; 
        } 
        else 
        { 
            let i = 0; 
            let current = this.head; 
            let previous = current; 
  
            if (k === 0) 
            { 
                this.head = current.next; 
            } 
            else 
            {  
                while (i < k) 
                { 
                    previous = current; 
                    current = current.next;
                    ++i; 
                } 
                previous.next = current.next; 
            } 

            --this.size; 
            return (current.element); 
        } 
    }

    Reverse () {
        let previous = null;
        let current = this.head;
        let temp = null;
    
        while (current != null) 
        {
            temp = current.next;        // As I explained earlier, I save the next pointer in the temp variable.
            current.next = previous;    // Then I reverse the pointer of the current node to its previous node.
            previous = current;         // The previous node becomes the node we are currently at.
            current = temp;             // And the current nodes becomes the
                                        // next node we saved earlier. And we keep iterating.
        }

        return (previous);                 // At the end, our previous node will be the head node of the new list. 
    };
    
}


/****************************/
let linkedlist = new LinkedList();

console.log(linkedlist.IsEmpty());
linkedlist.Add(1);
linkedlist.Add(2);
linkedlist.Add(3);
linkedlist.Add(4);
linkedlist.PrintList();
console.log(linkedlist.GetFirst());
console.log(linkedlist.GetLast());

