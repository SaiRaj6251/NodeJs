// on - listen for an event
// emit - emit an event
// always first listen the event and then emit
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log(`data recieved`)
})

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});
customEmitter.on("response", (name,id) => {
  console.log(`data recieved user:${name} with id:${id}`);
});
customEmitter.emit('response','sairaj',20)