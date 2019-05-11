/*

The variable exports
is just a reference to the initial value of module.exports; we have seen that such a value is
essentially a simple object literal created before the module is loaded.
This means that we can only attach new properties to the object referenced by the exports
variable, as shown in the following code

*/
exports.hello = () => {
    console.log('Hello');
}
