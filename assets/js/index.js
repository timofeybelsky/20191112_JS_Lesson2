const x = prompt("Please, enter your number:");

if( !isNaN(x) ) {

    const result = x % 2;

    if (result === 0) {
        alert("Ура! Число чётное! :)");
    } else {
        alert("О нет... число не чётное... :(")
    }

}
else{
    alert("Value is not a number!");
}
/*
let userValue = prompt();

console.log( userValue * userValue );


// - 2 пример -

let firstNumber = prompt("First number:");
firstNumber = parseFloat(firstNumber);
console.log("First number:", firstNumber);

let secondNumber = prompt("Second number:");
console.log("Second number:", secondNumber);
secondNumber = parseFloat(secondNumber);

const sum = firstNumber + secondNumber;
console.log("Sum : ", sum);

const avg = sum / 2;
console.log("Avg :", avg);

// - 3 пример -


console.log(" ");
console.log(" --- ");
console.log(" ");

let storona = prompt("Please, enter storony of square:");
storona = parseFloat(storona);
console.log("Storona of square:", storona);

let S = storona * storona;
console.log("S of square:", S);

// - 4 пример -

console.log(" ");
console.log(" --- ");
console.log(" ");

let km = prompt("Please, enter how many KM:");
km = parseFloat(km);
console.log("KM = ", km);

let M = km * 0.621371;
console.log("M = ", M);

// - 6 пример -

console.log(" ");
console.log(" --- ");
console.log(" ");

let a = prompt("Please, enter a:");
a = parseFloat(a);
console.log("a = ", a);

let b = prompt("Please, enter b:");
b = parseFloat(b);
console.log("b = ", b);

let X = -b/a;
console.log("X = ", X);

// - 7 пример -

console.log(" ");
console.log(" --- ");
console.log(" ");

let hours = prompt("Please, enter hours:");
hours = parseInt(hours);
console.log("Hours = ", hours);

let minutes = prompt("Please, enter minutes:");
minutes = parseInt(minutes);
console.log("Minutes = ", minutes);

let ostHours = 23 - hours;
let ostMinutes = 60 - minutes;

console.log("До конца дня осталось ", ostHours, "часов и ", ostMinutes ," минут");

 */