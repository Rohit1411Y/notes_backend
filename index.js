const express = require('express');
require('./db/connection');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());



//app.use(express.json());
app.get('/',(req,res)=>{
res.send("Hello home page here");
});
// app.get('/notes',async(req,res)=>{
//     const notes = await note.find();
//     res.json(notes);
// });
app.use('/notes',require('./routes/notes_route'));

app.listen(3000,()=>{
console.log(`listening at ${3000}`);
})
