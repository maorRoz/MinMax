let array = [0,0,9,5,6,1]

let min,secondMin;
min = array[0];
secondMin = min-1;
for(let i  = 1;i<array.length;i++){
    if(min > array[i]){
        almostMin = min;
        min = array[i];
    }
    else if((secondMin < min || secondMin > array[i]) && min < array[i]){
        secondMin = array[i];
    }
}
console.log(secondMin);
process.exit();