let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// 

function random(min, max) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

console.log("==============================")

do {
    rand = random(min, max);
    console.log(rand);
}
while (rand !== 10);
