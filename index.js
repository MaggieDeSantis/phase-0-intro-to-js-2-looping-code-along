const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards (names, event) {
    let messages=[]
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}
console.log ["Guadalupe", "Ollie", "Aki"] ;
console.log (writeCards(namems));


function countDown(number) {
    let value= number
    while (value >=0) {
        console.log(value--);
    }
    return number;
}