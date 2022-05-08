require('dotenv').config()
const Trello = require("./main");

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('No hay configuración con Api Key y con Token')
}


const trello1 = new Trello(process.env.KEY, process.env.TOKEN);
let cardTitle = `Card Nueva ${new Date()}`

trello1.addCard(cardTitle, 'Launch X', "6264e42be72d295e64f5c083",
    function (error, trelloCard) {
        if (error) {
            console.log('Could not add card:', error);
        }
        else {
            console.log('Added card:', trelloCard);
        }
    }
);