
function camelToUnderscore(arg){
    arg = arg.replace(/[A-Z]/g,(res)=> `_${res.toLowerCase()}`)
    return arg
    }
    
    
    console.log(camelToUnderscore('myName'),'check data');