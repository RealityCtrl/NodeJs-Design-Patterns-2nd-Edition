const fs = require('fs');
function readJSON(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
    let parsed;
    if(err) { return callback(err);}     //propagate the error and exit the current function
    try {
        //parse the file contents
        parsed = JSON.parse(data);
    } catch(err) {
        //catch parsing errors
        return callback(err);
    }
    //no errors, propagate just the data
    callback(null, parsed);
    });
};

//contents of package.json will be logged
readJSON("package.json", (err, parsed) =>{
    if (err){console.log(err)}
    console.log(parsed)
})

//error message logged as file doesn't exist
readJSON("package1.json", (err, parsed) =>{
    if (err){console.log(err)}
    console.log(parsed)
})

