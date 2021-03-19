// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    function helper(inp){
       if(inp === '') {
           return '';
       }
       
       return helper(inp.substr(1)) + inp[0];
    }
   let palin = helper(str);
   if(palin === str){
       return true;
   }
   
   return false;
    
  }
  
  
  
  
  