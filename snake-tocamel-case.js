let snakeToCamel = snakeCaseString => snakeCaseString.replace(/([-_]\w)/g, g => g[1].toUpperCase())  
console.log(snakeToCamel('my_name'));  