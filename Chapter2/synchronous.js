const fs = require('fs')
const cache ={}
function consistentReadSync(filename){
    if(cache[filename]){
        return cache[filename];
    }else{
        cache[filename] = fs.readFileSync(filename, 'utf8');
        return cache[filename]
    }
}
const file_path = "../fake_reviews.txt"
console.log("Before first");
console.log(consistentReadSync(file_path).substr(0, 10));
console.log("Before Second");
console.log(consistentReadSync(file_path).substr(0, 10));
