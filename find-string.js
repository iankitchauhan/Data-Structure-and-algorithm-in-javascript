var a =  'ankitchauhan';
var key='chauhan'


function searchText(arr,keys){
var j =0
keyLength= keys.length;
while(j<a.length){
let text=''
for(let i =0+j;i<keyLength+j;i++) {
text = text + arr[i]
}
console.log(text,'text data')
if(text == key) {
return true;
}
j++;

}

}
searchText(a,key);
