let obj = {};
const weak_map = new WeakMap();
weak_map.set(obj, {key: "aValue"});

console.log(weak_map.get(obj)); //{ key: 'aValue' }
obj = undefined;
console.log(weak_map.has(obj)) //false
// now obj and the associated data in the map will be cleaned up in the next gc cycle

let obj1 = {key: "val1"};
let obj2 = {key: "val2"};
const weak_set = new WeakSet([obj1, obj2]);

console.log(weak_set.has(obj1)) //true
obj1 = undefined;
console.log(weak_set.has(obj1)) //false
