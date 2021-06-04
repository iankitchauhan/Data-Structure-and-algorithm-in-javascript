//fib_memo through error here due to maximum call stack size reached but fib_tab fn follows bottom to top approach work fine here

function fib_memo(n,m=[]){
    if(m[n] !== undefined){
        return m[n];
    }
    if(n<=1){
        return n
    }
    m[n] = fib(n-1,m) + fib(n-2,m);
    var res = m[n];

    return res; // fib(4) + fib(3) , fib(3) + fib(2) - fib(2)+ 1 , 0 1 1 2 3 5 
}

function fib_tab(n){
  var fibs =[0,1,1];
  for(let i=3;i<=n;i++){
    fibs[i] =    fibs[i-1] +  fibs[i-2];
  }
  return fibs[n]
}


var b  = fib_tab(10000);
console.log(b,'value of a');
var a  = fib_memo(10000);
console.log(a,'value of a');
