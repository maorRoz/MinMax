const heap = require('./minHeap')

function getKMax(array,k){
    const minHeap= new heap();
    for(let i=0;i<array.length && i < k ; i++){
        minHeap.insert(array[i]);
    }
    for(let i = k;i<array.length;  i++){
        let min = minHeap.extractMin();
        if(min >= array[i]){
            minHeap.insert(min);
        }
        else{
            minHeap.insert(array[i]);
        }
    }
    return minHeap.extractMin();
}
let array = [0,0,9,5,6,1]
let kMax =  getKMax(array,3);
console.log(kMax);

process.exit();