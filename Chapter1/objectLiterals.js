const x = 22;
const y = 17;
const obj = {x,y};
console.log(obj) //{ x: 22, y: 17 }

const namespace = '-webkit-';
const style = {
    [namespace+'box-sizing']: 'border-box',
    [namespace+'box-shadow']: '10px10px5px #888888'
}
console.log(style) 
//{ '-webkit-box-sizing': 'border-box',
//'-webkit-box-shadow': '10px10px5px #888888' }

module.exports = {
    square (x){
        return x*x;
    },
    cube (x){
        return x * x * x;
    }
};