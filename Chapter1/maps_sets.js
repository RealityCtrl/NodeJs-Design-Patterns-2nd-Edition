const profiles = new Map();
profiles.set('twitter', '@adalovelace');
profiles.set('facebook', 'adalovelace');
profiles.set('email', 'ada@lovelace.com');

console.log(profiles.size); //3
console.log(profiles.has('email')); //true
console.log(profiles.get('email')); //ada@lovelace.com
console.log(profiles.has('youtube')); //false
profiles.delete('facebook')
console.log(profiles.has('facebook')); //false
console.log(profiles.get('facebook')); //undefined

//[ 'twitter', '@adalovelace' ]
//[ 'email', 'ada@lovelace.com' ]
for (const entry of profiles){
    console.log(entry)
}

//key: twitter, value @adalovelace
//key: email, value ada@lovelace.com
profiles.forEach((value, key) => console.log(`key: ${key}, value ${value}`))

//functions as keys
const tests = new Map();
tests.set(() => 2+2, 4);
tests.set(() => 2*2, 4);
tests.set(() => 2/2, 1);
tests.forEach((value, key) => console.log(key() === value ? 'PASS': 'FAIL')) // PASS, PASS, PASS


const setints = new Set([0, 1, 2, 2, 3]);
console.log(setints); //Set { 0, 1, 2, 3 }
console.log(setints.size); //4
setints.add(3); //not added
console.log(setints); //Set { 0, 1, 2, 3 }
console.log(setints.size); //4
setints.delete(0)
console.log(setints); //Set {1, 2, 3 }
console.log(setints.size); //3

for (const entry of setints){
    console.log(entry) //1 2 3
}
setints.forEach(entry => console.log(entry)) // 1 2 3