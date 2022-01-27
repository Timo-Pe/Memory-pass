editCard = {

    inputName: document.querySelector("#input_name"),
    inputMail: document.querySelector("#input_mail"),
    inputPassword:document.querySelector("#input_pass"),
    inputTextarea: document.querySelector("#textarea_com"),

    init: () => {
        console.log('Demarrage du module d edition');
    },

    formFillingObject: () => {
        const objectCurrent = displayContent.currentObjectSelected;

        editCard.inputName.value = objectCurrent.name;
        editCard.inputMail.value = objectCurrent.mail;
        editCard.inputPassword.value = objectCurrent.password;
        editCard.inputTextarea.value = objectCurrent.commentaire;

    }

}