var a =  [1,2,3,4,3,2,5,5,5,5,5,5,5,];
var b ={}
for(let i in a) {
if(!b[a[i]]){
b[a[i]]='true'
}
}
let d = Object.keys(b)
console.log(d,'objects')