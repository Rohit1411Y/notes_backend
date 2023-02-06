const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect(`mongodb+srv://Rohit:rohit123@notescluster.hvskmbw.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log('connected successfully');
}).catch((err)=>{
    console.log(`Error in connectiong ${err.message}`);
})
