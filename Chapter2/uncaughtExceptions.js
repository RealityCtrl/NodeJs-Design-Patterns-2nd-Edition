/*
This code shows what happens when an error is not caught
The error from the JSON parsing is not caught and will 
propagate to event loop and kill application
*/
const fs = require('fs');
function readJSONThrows(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
    if(err) {
        return callback(err);
    }
    //no errors, propagate just the data
    callback(null, JSON.parse(data));
});
};

readJSONThrows('../fake_reviews.txt', err => console.log(err));

/*
 This will make no difference, error is in different stack
*/
try {
    readJSONThrows('../fake_reviews.txt', function(err, result) {

    });
    } catch(err) {
    console.log('This will not catch the JSON parsing exception');
}

/*
This will catch any uncaught exceptions in the process
*/
process.on('uncaughtException', (err) => {
    console.error('This will catch at last the ' +
    'JSON parsing exception: ' + err.message);
    // Terminates the application with 1 (error) as exit code:
    // without the following line, the application would continue
    process.exit(1);
    });