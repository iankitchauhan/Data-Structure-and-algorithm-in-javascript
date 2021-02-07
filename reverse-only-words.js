let text = 'ankit chauhan';
let textArray = a.split(' ');
let j=0;
reverseArray =[];
while(j<textArray.length) {
let text ='';
singleWord = textArray[j]
for(let i=singleWord.length-1;i>=0;i--){
text = text +singleWord[i]
}
reverseArray.push(text)
j++;
}
console.log(reverseArray.join(' '),'reverse array');

//console.log(b,'value of b')