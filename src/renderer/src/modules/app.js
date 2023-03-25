const fs = require('fs');

const app = {
    jsonFile: 'Recu/datas.json',
    init: function (){
        
        infoBox.init();
        displayModal.init();
        displayCard.init();
        editCard.init();
        counter.init();
        dataWork.init();
        displayContent.init();
    }
}

document.addEventListener('DOMContentLoad', app.init());