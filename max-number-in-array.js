var arr = [5, 4, 5, 6, 7, 1,10];

function maxNumber(a){
var b =0
for(let i =0;i<a.length;i++){
if(b<a[i]){
b=a[i];
}
}
return b;
}

var result = maxNumber(arr);
console.log(result,'resulted data');