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

const crypto = require("crypto");
function md5(word) {
    return crypto.createHash("md5").update(word).digest("hex");
}
const target = "dbfcafe986040cc10ada1a4314c436db";
const chars = "abcdefghijklmnopqrstuvwxyz";
for (let char1 of chars) {
    for (let char2 of chars) {
        for (let char3 of chars) {
            for (let char4 of chars) {
                const guess = char1 + char2 + char3 + char4;
                console.log(guess)
                const hash = md5(guess);
                if (target === hash) {
                    console.log(guess);
                    process.exit(0);
                }
            }
        }
    }
}