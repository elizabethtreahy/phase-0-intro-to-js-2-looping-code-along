// Code your solutions in this file


const cards = [];
function writeCards(names, holiday) {
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);

    }
    console.log(cards);
    return cards;
}
writeCards(names, holiday);


function countDown(countDownNumber) {
    while (countDownNumber >= 0) {
        console.log(countDownNumber--);
    }
}
countDown (32);