const userFirstValue = prompt();
const userFirstNumber = +userFirstValue;

const userSecondValue = prompt();
const userSecondNumber = +userSecondValue;



if(userFirstNumber > userSecondNumber){
  alert(userFirstNumber + " is bigger!");
}
else if(userFirstNumber === userSecondNumber){
  alert("Values are equal.");
}
else {
  alert(userSecondNumber + " is bigger...");
}
