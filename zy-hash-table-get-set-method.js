class HashTable{
    constructor(size=4){
        this.keyMap = new Array(size);
    }


 _hash(key){
  let WEIRD_PRIME =31;
  let total =0;
  for(let i =0; i<Math.min(key.length,100); i++)  {
      let char = key[i];
      let value = char.charCodeAt(0)-96;
total = (total*WEIRD_PRIME + value ) % this.keyMap.length;
  }
  return total;
}

set(key,value){
let index = this._hash(key);
if(!this.keyMap[index]){
  this.keyMap[index] =[];  
}
this.keyMap[index].push([key,value]);
}


}
let ht = new HashTable();

ht.set("hello world","goodbye!!");
ht.set("dogs are","cool");
ht.set("i love","pizza");
ht.set("cats are","fine");
