/*
class HashTable{
constructor(key, value){
    this.key=key
    this.value=[]
}

set(key, value){

}

get (key){
    return this.keyGetter()
}

keyGetter(){

}

}*/

function randString(){
    let chars = "abcdefghijklmnopqrstuvwxyz"
    let randChars = ''
    if(length >0){
        for(let i=0; i<length; i++){
            randChars +=chars.charAt(Math.floor(Math.random()*chars.length))
        }
    }
    return randChars;
}



function tryHash(){

const crypto = require("crypto");
var hash = crypto.createHash("md5").update(word).digest("hex");
let target = "dbfcafe986040cc10ada1a4314c436db";

const word = randString()
for(let i =0; i<word.length; i++){
    if (i === target){
    }
}

console.log(hash)
}

tryHash()