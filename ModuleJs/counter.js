const counter = {


    nomberCard: 0,

    init: () => {
        console.log('demarrage du Compteur de cartes');
    },

    displayCount: () => {
        const counterHtml = document.querySelector('#counter');
        counter.nomberCard = displayCard.tableauCard.length;
        counterHtml.innerHTML = counter.nomberCard;
    }
   




}