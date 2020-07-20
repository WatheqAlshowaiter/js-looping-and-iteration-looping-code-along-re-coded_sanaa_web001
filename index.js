function countDown(number) {
  // let n = number;
  while (number>= 0) {
    console.log(number);
    number--;
  }
}

countDown(3);


function writeCards(names, giftName) {
  for (let i = 0; i < names.length; i++) {
      console.log("Thank you, " + names[i] + ", for the wonderful " + giftName + " gift!");
  }
}

writeCards(["Lisa", "Kaitlin", "Jan"],"surprise");