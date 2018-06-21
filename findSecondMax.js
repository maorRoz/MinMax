let array = [2,2,5,1,0]

let max,almostMax;
max = array[0];
almostMax = max+1;
for(let i  = 1;i<array.length;i++){
    if(max < array[i]){
        almostMax = max;
        max = array[i];
    }
    else if((almostMax > max || almostMax < array[i]) && max > array[i]){
        almostMax = array[i];
    }
}
console.log(almostMax);
process.exit();


