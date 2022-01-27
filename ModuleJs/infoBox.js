const infoBox = {

    colorBox: "red",

    init: () => {
        console.log("demarrage du module de box info");
    },
    
    displayBoxMessage: (message, color) => {

        const box = document.querySelector("#info_card");
        infoBox.colorBox = color;
        box.classList.add(color);
        box.textContent = message;
        setTimeout(infoBox.closeInfoBox, 2000);
    },
    closeInfoBox: () => {
        document.querySelector('#info_card').classList.remove(infoBox.colorBox);
    }
}


                