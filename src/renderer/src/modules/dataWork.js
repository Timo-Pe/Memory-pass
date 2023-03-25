const { cp } = require("fs");

const dataWork = {


    fileStatus: false,


    init: () => {

        console.log('Lancement du module des datas ...');
        const BtnAddModal = document.getElementById('btnAddModal');
        const BtnEditModal = document.getElementById('btnEditModal');
        const BtnDelModal = document.querySelector('#btn_del');
        dataWork.verifFile();
        BtnAddModal.addEventListener("click", dataWork.createObject);
        BtnEditModal.addEventListener("click", dataWork.editObject);
        BtnDelModal.addEventListener("click", dataWork.deleteObject);


    },

    generateId: () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    },

    createObject: (event) => {
        event.preventDefault();

        const uniqueId = dataWork.generateId();

        const newObject = {
            id: uniqueId,
            name: document.querySelector('#input_name').value,
            mail: document.getElementById('input_mail').value,
            password: document.getElementById('input_pass').value,
            commentaire: document.getElementById('textarea_com').value
        }

        if (dataWork.fileStatus === false) {

            const resultCreate = dataWork.createFileJson([newObject]);
            if (resultCreate) {
                dataWork.fileStatus = resultCreate;
                infoBox.displayBoxMessage("Un fichier à été crée avec votre premiere carte", 'vert');
            } else {
            
                console.log(resultCreate)
                console.log("Probleme lors de la creation de l'object");
            }

        } else {

            fs.readFile(app.jsonFile, function (err, datas) {
                if (err) throw err;
                let datasJsonParse = JSON.parse(datas);


                datasJsonParse.push(newObject);

                dataWork.createFileJson(datasJsonParse);
                infoBox.displayBoxMessage("La carte a été crée avec succes", 'vert');
                
            })
        }

    },

    verifFile: () => {

        fs.stat(app.jsonFile, function (err) {
            if (err) {
                console.log('le fichier est inexistant');
                infoBox.displayBoxMessage("Le fichier de mot passe n'a pas été crée", 'orange');
                dataWork.fileStatus = false;
            } else {
                infoBox.displayBoxMessage("Un fichier de mot de passe existe", 'orange');
                console.log('le fichier existe');
                dataWork.fileStatus = true;

            }
        })
    },

    editObject: (event) => {
        event.preventDefault();
        const idCurrentObjectSelected = displayContent.currentObjectSelected.id;

        const newObject = {
            id: idCurrentObjectSelected,
            name: document.querySelector('#input_name').value,
            mail: document.getElementById('input_mail').value,
            password: document.getElementById('input_pass').value,
            commentaire: document.getElementById('textarea_com').value
        }

        fs.readFile(app.jsonFile, function (err, datas) {
            if (err) throw err;

            let datasJsonParse = JSON.parse(datas);

            const indexCurrentObject = datasJsonParse.findIndex(x => x.id === idCurrentObjectSelected);

            datasJsonParse.splice(indexCurrentObject, 1);

            datasJsonParse.push(newObject);

            dataWork.createFileJson(datasJsonParse);
        })

    },

    deleteObject: (event) => {
        event.preventDefault();

        if (confirm("Vous etes sur le point de supprimé la fiche actuellement ouverte , etes vous sur ?")){
            const idCurrentObjectSelected = displayContent.currentObjectSelected.id;
            fs.readFile(app.jsonFile, function (err, datas) {
                if (err) throw err;
    
                let datasJsonParse = JSON.parse(datas);
    
                const indexCurrentObject = datasJsonParse.findIndex(x => x.id === idCurrentObjectSelected);
    
                datasJsonParse.splice(indexCurrentObject, 1);
                
                dataWork.createFileJson(datasJsonParse);
                displayContent.closeContentCard();

                infoBox.displayBoxMessage("La carte a été supprimée", 'orange');
                
            })    
        }
        
    },

    createFileJson: (datas) => {
        let fileJson = JSON.stringify(datas, null, 4);
        fs.writeFile(app.jsonFile, fileJson, function (err) {
            if (err) {
                console.log(err)
            } else {
                document.getElementById('form').reset()
                displayCard.cardsDisplayList();
                
                console.log("Le fichier a été crée avec succes");
            }
        });
        return true;
    },


}