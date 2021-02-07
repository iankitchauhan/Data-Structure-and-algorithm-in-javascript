var arr = [5, 4, 5, 6,10, 7, 1];

function maxNumber(a){
var b =0;
var secondLargest=0;
for(let i =0;i<a.length;i++){
if(b<a[i]){
b=a[i];
}
}
for(let i =0;i<a.length;i++){
if(a[i]!=b){
if(secondLargest<a[i]){
secondLargest=a[i];
}
}
}

return secondLargest;
}

var result = maxNumber(arr);
console.log(result,'resulted data');
