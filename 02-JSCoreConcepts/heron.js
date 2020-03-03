// boki trójkąta
var a = 3;
var b = 4;
var c = 5;
var h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let pole = (a,b,c,h) => {
    let p = 0.5 * (a + b + c)
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
};

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${pole(a,b,c,h)}.`);