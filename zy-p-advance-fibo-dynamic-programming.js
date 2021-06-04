function fib(n,m=[]){
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
var d =[]
var a  = fib(5);
console.log(a,'value of a');
