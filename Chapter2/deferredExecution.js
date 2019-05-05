const fs = require('fs');
const cache = {};

// process.nextTick makes this run before any other I/O event is fired on the next pass of the event loop

function consistentReadAsync(filename, callback){
    if (cache[filename]){
        process.nextTick(()=>callback(cache[filename]));
    }else{
        fs.readFile(filename, 'utf8', (err, data) =>{
            cache[filename] = data;
            callback(data);
        })
    }
}

const file_path = "../fake_reviews.txt"
consistentReadAsync(file_path, (data)=> console.log("Done1 " + data.substr(0, 10)))

consistentReadAsync(file_path, (data)=> console.log("Done2 "+data.substr(0, 10)))


function createFileReader(filename) {
    const listeners = [];
    consistentReadAsync(filename, value => {
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

//Using setImmediate instead of process.nextTick

function consistentReadAsync2(filename, callback){
    if (cache[filename]){
        setImmediate(()=>callback(cache[filename]));
    }else{
        fs.readFile(filename, 'utf8', (err, data) =>{
            cache[filename] = data;
            callback(data);
        })
    }
}

consistentReadAsync2(file_path, (data)=> console.log("Done3 " + data.substr(0, 10)))

consistentReadAsync2(file_path, (data)=> console.log("Done4 "+data.substr(0, 10)))


function createFileReader(filename) {
    const listeners = [];
    consistentReadAsync2(filename, value => {
        listeners.forEach(listener => listener(value));
    });
    return { 
        onDataReady: listener => listeners.push(listener)
    };
}

const reader3 = createFileReader(file_path);
reader1.onDataReady(data => {
    console.log("First immediate call: "+data.substr(0, 10));


    const reader4 = createFileReader(file_path);
    reader4.onDataReady(data => {
        console.log("Second immediate call: "+data.substr(0, 10));
    })
});