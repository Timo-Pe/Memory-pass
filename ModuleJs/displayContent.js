displayContent = {

    currentObjectSelected: null,

    siteName: document.querySelector('#space-sitename'),
    userName: document.querySelector('#space-username'),
    password: document.querySelector('#space-password'),
    commentaire: document.querySelector('#space-commentaire'),
    cardDivers: document.querySelector('#card-divers'),
    groupBtn: document.querySelector('#group_btn'),

    init: () => {
        console.log('demarrage du module de contenu');

        
    },

    objectSelected: () => {
        const cardList = document.querySelectorAll('.object');

        for(cardSelected of cardList){
           
            cardSelected.addEventListener('click', displayContent.captionIndex)
        }
       
    },

    captionIndex: (event) => { 
        event.preventDefault();
        const currentObjectChild = event.target.firstChild.innerHTML;
        
        const indexCurrentObject = displayCard.tableauCard.findIndex(x => x.id === currentObjectChild);

        const objectCurrent = displayCard.tableauCard[indexCurrentObject];

        displayContent.currentObjectSelected = objectCurrent;
        displayContent.displayContentCard(objectCurrent);
        
    },

    displayContentCard: (currentObject) => {

        displayContent.siteName.innerHTML = currentObject.name;
        displayContent.userName.innerHTML = currentObject.mail;
        displayContent.password.innerHTML = currentObject.password;
        displayContent.commentaire.innerHTML = currentObject.commentaire;
        displayContent.cardDivers.classList.replace("element-disabled", "element-active");
        displayContent.groupBtn.classList.replace("element-disabled", "element-active");
    },

    closeContentCard: () => {
        displayContent.cardDivers.classList.replace("element-active", "element-disabled");
        displayContent.groupBtn.classList.replace("element-active", "element-disabled");
    }



}