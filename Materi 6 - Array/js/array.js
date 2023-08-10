let bike=new Array(); // membuat array kosong

let car=Array(
    "BMW","Ferari","Honda","Ford","McLeren"
);
console.log(car[2]);

// change value array
car[4]="Mercedez";
console.log(car[4]);

// size array / length
console.log(car.length);

/* OPERATION */

// add element array akhir
let motor=[
    "suzuki","honda","yahayu"
];
console.log(motor);

motor.push("BMW");
console.log(motor);

// add element array awal
motor.unshift("Aprilia");
console.log(motor);

// delete element array di akhir
motor.pop();
console.log(motor);

// delete element array di awal
motor.shift();
console.log(motor);

// find element array
let findA=motor.indexOf('suzuki');
console.log(findA);

// check is array tipe data
console.log(Array.isArray(motor));