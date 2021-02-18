
//filter method plooyfill
var d = [11,2,3,4];
Array.prototype.myfilter = function(cb){
var newArray =[];
for(let i=0;i<this.length;i++){
if(cb(this[i],i,this)){
newArray.push(this[i]);
}
}
return newArray;
}


let c = d.myfilter(res=>res>4);
console.log(c,'value of c')
//map method plooyfill


var d = [11,2,3,4];
Array.prototype.mymap = function(cb){
var newArray =[];
for(let i=0;i<this.length;i++){
newArray.push(cb(this[i],i,this));
}
return newArray;
}


let c = d.mymap(item=>{
item = item+100;
return item
});
console.log(c,'value of c')


//pollyfill for find method

var d = [11,2,3,4];
Array.prototype.myfind = function(cb){
//var newArray =[];
for(let i=0;i<this.length;i++){
if(cb(this[i],i,this)){
return this[i];
}
}
}


let c = d.myfind((element)=>element > 2);
console.log(c,'value of c')


//Reduce method pollyfill



var d = [11,2,3,4];
Array.prototype.myreduce = function(cb,indata){
var newArray =indata;
for(let i=0;i<this.length;i++){
newArray =  cb(newArray,this[i],i,this);
}
return newArray;
}


let c = d.myreduce((acc,item)=> acc +item,1);
console.log(c,'value of c')