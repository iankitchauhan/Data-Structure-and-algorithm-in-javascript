function binarySearch(arr,key) {

min = 0;
max = arr.length -1;
while(min<max) {
    let middle = Math.floor((min +max)/2);
    if(a[middle]>key){
        max = middle -1;
    } else if(a[middle]<key){
        min = middle +1;
    }
}

}