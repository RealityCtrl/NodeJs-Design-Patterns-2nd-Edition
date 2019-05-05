const fs = require('fs');
const cache = {};
function inconsistentRead(filename, callback) {
    if(cache[filename]) {
    //invoked synchronously
        callback(cache[filename]);
    } else {
    //asynchronous function
        fs.readFile(filename, 'utf8', (err, data) => {
        cache[filename] = data;
        callback(data);
        });
    }
}
const file_path = "../fake_reviews.txt"
inconsistentRead(file_path, (data)=> console.log("Done1 " + data.substr(0, 10)))

inconsistentRead(file_path, (data)=> console.log("Done2 "+data.substr(0, 10)))


function createFileReader(filename) {
    const listeners = [];
    inconsistentRead(filename, value => {
        listeners.forEach(listener => listener(value));
    });
    return { 
        onDataReady: listener => listeners.push(listener)
    };
}

const reader1 = createFileReader(file_path);
reader1.onDataReady(data => {
    console.log("First call: "+data.substr(0, 10));


    const reader2 = createFileReader(file_path);
    reader2.onDataReady(data => {
        console.log("Second call: "+data.substr(0, 10));
    })
});
