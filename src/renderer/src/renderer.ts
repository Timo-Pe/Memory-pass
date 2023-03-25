
import counter  from './modules/counter';


import "../assets/scss/styles.scss";
import "../assets/variables.css";
import "../assets/reset.css";

export const app: {jsonFile: string , init: any} = {
  
  jsonFile: 'Recu/datas.json',
  init: function (){
      
      // infoBox.init();
      // displayModal.init();
      // displayCard.init();
      // editCard.init();
      counter.init();
      // dataWork.init();
      // displayContent.init();
  }
}

document.addEventListener('DOMContentLoad', app.init());