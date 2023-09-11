let undefine;
// const undefine;
let nothing = null;

console.log(undefine); // => undefined - in console
console.log(nothing); // => null

console.log(typeof nothing); // => object
console.log(typeof undefine); // => undefined

console.log(undefine ?? nothing); // => null

// ---

console.log(0o32); // => 26
console.log(0b1001); // => 9
