// Code your solutions in this file

function writeCards(arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        output += "Thank you, ${arr[i]} for the wonderful birthday gift!";
    }
    return output;
}

let names = ["Ada", "Brendan", "Ali"];
console.log(writeCards(names));
