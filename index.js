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

let number = 10;

function countDown( startingNumber ) {
  while ( startingNumber > 0 ) {
    console.log( startingNumber );
    startingNumber -= 1;
  }
  console.log( startingNumber );
}