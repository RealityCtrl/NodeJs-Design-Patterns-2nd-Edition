/*If we want to export something other than an object literal, 
such as a function, an instance,
or even a string, we have to reassign module.exports as follows:
*/
module.exports = {
    hello(){
        console.log('Hello');
    }
}