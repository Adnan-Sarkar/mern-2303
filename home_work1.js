// even & odd
let x = 10;

if (x % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Leap Year

let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not Leap Year");
}

// Switch Case
let y = 1;
switch (y) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("Not Matched!!");
}
