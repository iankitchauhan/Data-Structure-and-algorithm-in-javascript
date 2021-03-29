function selectionSort(a){
    let min = 0
    for(let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
    if(a[j]>a[j+1]){
    min =j+1;
    }
    }
    let temp = a[min];
    a[min]=a[i];
    a[i]=temp;
    
    }
    
    console.log(a,'sorted array');
    return a;
    }
    
    selectionSort([5,3,4,1,2]); //time complexity is O(n2) not good but better than bubble sort as we swap in the end but in bubble sort we swap on each iteration