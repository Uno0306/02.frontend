const a = 1;
const b = "1";

// console.log(a == b);        // true
// console.log(a === b);       // false

const c = a;
// console.log(a == c);        // true 
// console.log(a === c);       // true

function sum() {
    return(a,b)  => {a + b};
}

const sum1 = sum();
const sum2 = sum();

// console.log(sum1 === sum2);
// console.log(sum1 === sum1);
// console.log(sum2 === sum2);

const sum3 = sum1;
// console.log(sum3 === sum1);
// console.log(sum3 === sum2);

const sum4 = sum1();
// console.log(sum4 === sum1);