let d =[];
function collectOddNumbers(n){

  if(n.length ==0 ){
    return;
  }

  if(n[0]%2 !=0){
d.push(n[0])
  }
  collectOddNumbers(n.slice(1))

}
N = [1,2,3,4,5,17,6,7,8,9,10,11];
var result = collectOddNumbers(N);
console.log(d,'resulted dtaa');let d =[];
function collectOddNumbers(n){

  if(n.length ==0 ){
    return;
  }

  if(n[0]%2 !=0){
d.push(n[0])
  }
  collectOddNumbers(n.slice(1))

}
N = [1,2,3,4,5,17,6,7,8,9,10,11];
 collectOddNumbers(N);
console.log(d,'resulted dtaa');