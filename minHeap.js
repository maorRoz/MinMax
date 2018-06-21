module.exports = class minHeap {
    constructor() {
      this.heap = []
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length-1);
    }
    bubbleUp(index){
        while (index > 0) {
            let parent = Math.floor((index + 1) / 2) - 1;
            
            if (this.heap[parent] > this.heap[index]) {
              let temp = this.heap[parent];
              this.heap[parent] = this.heap[index];
              this.heap[index] = temp;
            }
            
            index = parent;
        }
    }

    bubbleDown(index){
        while (true) {
            let child = (index+1)*2;
            let sibling = child - 1;
            let toSwap = null;
            
            if (this.heap[index] > this.heap[child]) {
                toSwap = child;
            }

            if (this.heap[index] > this.heap[sibling] && (this.heap[child] == null || (this.heap[child] !== null &&
                this.heap[sibling] < this.heap[child]))) {
                toSwap = sibling;
            }
            
            if (toSwap == null) {
                break;
            }
            
            let temp = this.heap[toSwap];
            this.heap[toSwap] = this.heap[index];
            this.heap[index] = temp;
            
            index = toSwap;
        }
    };

    extractMin(){
        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        
        return min;
    };
}
