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
    
    selectionSort([5,3,4,1,2]);