const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2); // concat combina dois arrays
console.log(a3); // [1, 2, 3, 4, 5, 6]

console.log("==========================");

const b1 = [1, 2, 3];
const b2 = [4, 5, 6];
const b3 = [...b1, ...b2]; // spread operator combina dois arrays
console.log(b3); // [1, 2, 3, 4, 5, 6]