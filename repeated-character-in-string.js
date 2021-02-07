var a =  'ankitchauhan';



function searchText(arr){
var b ={}
for(let i =0;i<arr.length;i++) {
if(!b[arr[i]]) {
b[arr[i]] = 1
} else{
b[arr[i]]++;
}
}
console.log(b,'val')
repeated =[]
for(let i in b){
if(b[i]>1){
repeated.push(i);
}
}
console.log(repeated,'repease elements');
}
searchText(a);
