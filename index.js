// Get all pics via querySelectorAll()
const cards = document.querySelectorAll('[class^="card"]');

function flip() {
    this.classList.add('flip');
}
// STEP 1 - Use a for loop to make each card flip upon click
/*for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', flip)
}*/

// STEP 2 - Comment out code above. Now use a do while loop to make each card flip upon click
/*let i = 0;

do {
    cards[i].addEventListener('click', flip);
    i += 1;
}
  while (i < cards.length);*/

// STEP 3 - Comment out code above. Now use a .forEach() loop to make each card flip upon click

/*cards.forEach(function(element) {
    element.addEventListener('click', flip);
});*/


// STEP 4 - Comment out code above. Now use a for OF loop to make each card flip upon click
    /*for (const card of cards){
        card.addEventListener('click', flip);
    }*/

// STEP 5 - Comment out code above. Now use .map() loop to make each card flip upon click
/*const someVar = cards.map(function(card) {
    card.addEventListener('click', flip);
    return 'hi';
});
console.log(someVar);*/

//STEP FIVE: it is giving me an error saying that "card.map" is not a function. Not sure what happened there.