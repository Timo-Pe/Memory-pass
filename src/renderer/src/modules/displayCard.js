const displayCard = {


    tableauCard: [],

    init: () => {

        console.log("demarrage du module d'affichage des cartes...");


        displayCard.cardsDisplayList();

    },

    cardsDisplayList: () => {

        displayCard.tableauCard = [];
        const listCardHtml = document.querySelector('#list-object ul');
        listCardHtml.innerHTML = '';

        fs.readFile(app.jsonFile, function (err, datas) {
            if (err) throw err;

            displayCard.tableauCard = JSON.parse(datas);

            displayCard.tableauCard.forEach(entries => {

                let dataCard = displayCard.createCardHtml(entries.name, entries.id);

                listCardHtml.appendChild(dataCard);
            });
            counter.displayCount();
            displayContent.objectSelected();
        });
    },



    createCardHtml: (name, id) => {
        const newCard = document.createElement('li');

        const newSpanName = document.createElement('span');
        newSpanName.innerHTML = name;
        newSpanName.classList.add('name_object');

        const newSpanId = document.createElement('span');
        newSpanId.innerHTML = id;
        newSpanId.classList.add('id_object');

        const newLink = document.createElement('a');
        newLink.setAttribute('href', ' ');
        newLink.appendChild(newSpanId);
        newLink.appendChild(newSpanName);

        newLink.classList.add('object');



        newCard.appendChild(newLink);
        return newCard;
    }
}