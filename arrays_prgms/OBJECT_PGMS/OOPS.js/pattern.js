var pattern="hhaai hhoowl"
var words=pattern.split(" ")
for(word of words){
    let st=new Set()
    for(let char of word){
        st.add(char)
    }
    console.log(st);
}