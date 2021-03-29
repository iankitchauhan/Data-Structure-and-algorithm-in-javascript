function bubbleSort(arr) {
    let j=0;
    var noSwap=true;
    while(j<arr.length){
        for(let i=0;i<arr.length-j;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1] = temp;
                noSwap = false;
            }
        }
        if(noSwap){
            break;
        }
j++;
    }

    return arr

}

console.log(bubbleSort([25,15,50, 10, 6, 4]),'srted array');//optimised
