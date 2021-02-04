// False values in JS
// false
// 0
// undefined
//null
// NaN
// True values in JS
// '0', '', []
let name = '';
console.log(name);
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}