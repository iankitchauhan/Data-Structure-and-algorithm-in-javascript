function collectOddNumbers(n){

    let arrayOfOddNumber=[];

    function help(arg){

        if(arg ==1){
            return 1;
        }
        if(arg%2 != 0){
            arrayOfOddNumber.push(arg)  
        }
        help(arg-1);


    }

    help(n);

}
N = 11;
var result = collectOddNumbers(N);
console.log(result,'resulted dtaa');