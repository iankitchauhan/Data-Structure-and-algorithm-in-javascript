var arr = ['ab567u', 'tty78', '674u', '678gh'];

const regex = /([a-zA-Z])/g;
for(let i =0;i<arr.length;i++){
 arr[i] =  arr[i].replace(regex,'');
 console.log(arr[i],'sssss')
}

console.log(arr,'change the data');