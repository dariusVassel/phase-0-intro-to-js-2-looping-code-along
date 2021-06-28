// Code your solutions in this file
for (let age =30; age<40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
    let messageBank=[];
    for (let count=0; count<names.length; count++){
        //add message to a new array
        console.log(`Thank you, ${names[count]}, for the wonderful ${event} gift!`);
        messageBank[count]=`Thank you, ${names[count]}, for the wonderful ${event} gift!`;
    }
    // return that array at the end of the loop
    return messageBank;
}


writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function countDown(number){
    while (number > -1){
        console.log(number);
        number--;
    }
}

countDown(130);
