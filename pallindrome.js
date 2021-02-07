let a = 'ana';
var b='';
for(let i =a.length-1;i>=0;i--){
b = b+a[i];
}
console.log(b,'value of b')
if(a ==b) {
console.log('its a pallindrome')
} else{
console.log('its not a pallindrome')
}