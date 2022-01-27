const displayModal = {


    init: () => {
        console.log("Affichage de la modale en cours ...");
        const btnAdd = document.getElementById("btn_add");
        const clearModal = document.querySelector('#modal-form #clear');
        const BtnAddModal = document.getElementById('btnAddModal');
        const btnEdit = document.querySelector('#btn_edit');
        
        btnAdd.addEventListener("click", displayModal.openModal);
        btnEdit.addEventListener("click", displayModal.openModal);
        clearModal.addEventListener("click", displayModal.closeModal);
            
        
    },

    openModal: (event) => {
            event.preventDefault()
            const idTarget = event.currentTarget.getAttribute('id');
            if (idTarget === 'btn_add'){
                document.querySelector('#btnAddModal').classList.add('active');
            }else if (idTarget === 'btn_edit'){
                document.querySelector('#btnEditModal').classList.add('active');
                editCard.formFillingObject();
            }
            document.querySelector('#modal-form').classList.add('active');
            displayModal.addFilter();
    },

    closeModal: (event) => {
        event.preventDefault();

        const btnClear = document.querySelectorAll('#form button');
        for(btn of btnClear){
            if(btn.className === 'active'){
                btn.className = '';
            };
        }
        document.querySelector('#modal-form').classList.remove('active');
        displayModal.removeFilter();
    },

    addFilter: () => {
        const filter = document.querySelector("#filter");
        filter.classList.add("active");
    },
    
    removeFilter: () => {
        const filter = document.querySelector("#filter");
        filter.classList.remove("active");
    }
    
    
}