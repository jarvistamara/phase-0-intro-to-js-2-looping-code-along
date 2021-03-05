// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return birthday;
}
/*
let number = 10;
function countdown (number) {
    while (number >= 10) {
        console.log(number--);
      }
}*/

//declare and instantiate your variable
let number = 10;



function countdown(number) {
    while (number > 0) {
    console.log(number);
    number--;
    }
}

alert("Done");