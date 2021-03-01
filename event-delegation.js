let c;
var a = document.getElementById('parent');
if(a){
a.addEventListener('click',function(event){
if(c){
c.removeAttribute('style');
}
let target = event.target; 
 c = target;
target.style.color='red';

})
}