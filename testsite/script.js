"use strict";

/*sdjfnsdlf */
//
let sum = 0;

function add(x, y, z)
{
  let sum = x + y + z;
  return sum;
}
function display()
{
  console.log(sum);
}

sum = add(1, 2, 3);
sum = add(3, 4, 5);
display();

let s = "He said \"Here's looking at you kid\"";
console.log(s);


let numbers = [0, 0, 0];
function doit(n)
{
  let num = 10;
  for (let i = 1; i < n; i++)
  {
    num += i;
    numbers[i] = num;
  }
}
doit(3);
console.log(numbers);

let ticketHolder = {
  ticketID : "GCIWMY",
  tickholder : "Chris O'Gre",
  seats : ["Sec E Row 22 Seat 1",
           "Sec E Row 22 Seat 2"]
};
let amt = 0;
for (let i = 0; i < ticketHolder.seats.length; i++)
{
  amt += 125;
}
console.log(amt);
