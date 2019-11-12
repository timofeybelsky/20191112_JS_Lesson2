const userValue = prompt("Please enter number:");
const userNumber = +userValue;


if(Number.isNaN(userNumber)){

  alert("Error! Value is not number. :(");

}
else{

  if( userNumber % 5 === 0 && userNumber % 2 === 0 && userNumber % 3 === 0 ){

    alert("Number is kratnoe!!! ^_^");

  }
  else{

    alert("Oh... number is not kratnoe... O_O");

  }
}
