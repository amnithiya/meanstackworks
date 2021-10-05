var pattern="ABCABB"
//find first recursive character "A"
var word_count={}
for(let char of pattern){
    if(char in word_count){
        console.log(char,"is first recursive character");
        break;
    }
    else{
word_count[char]=1
    }
}

var pattern="BCABB"
//find first recursive character
var word_count={}
for(let char of pattern){
    if(char in word_count){
        console.log(char,"is first recursive character");
        break;
    }
    else{
word_count[char]=1
    }
}

var arr=[10,11,10,20,21,21]
//find duplicate elements
var duplicates={}
for(let num of arr){
    if(num in duplicates){
        duplicates[num]+=1
    }
    else{
        duplicates[num]=1
    }
}
console.log(duplicates);