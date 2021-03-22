function bubbleSort(arr) {
    let j=0;
    while(j<arr.length){
        for(let i=0;i<arr.length-j;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1] = temp;
            }
        }
j++;
    }

    return arr

}

console.log(bubbleSort([15,50, 10, 6, 4]),'srted array');