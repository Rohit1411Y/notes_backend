const express = require('express');
const note = require('../models/notesSchema');

const notesList = async(req,res)=>{
    const notes = await note.find();
    res.json(notes);
}
const newNote = async(req,res)=>{
    try{
        const createNote =  new note(req.body);
        const result = await createNote.save();
    
        res.json(result);
    }
    catch(err){
        console.log(err);
        res.json(err)
    }
  
}
const notesById = async(req,res)=>{
    
    //const userid = note.userid;
    try{ console.log(req.params.userid);
        //console.log(note.userid);
        //const userid = req.params.userid;
        
        if(!req.params.userid) return res.status(400).json({"message":"User Id required"});
        const onenote = await note.findOne({userid:req.params.userid}).exec();
        if(!onenote) return res.status(400).json({"message":`no userid matches for ${req.params.userid}`});
        res.status(200).json(onenote);

    }
    catch(err){
        console.log(err);
        res.status(404).json(err);
    }
}
const deleteNote = async(req,res)=>{
    console.log("userid is ",req.params.id)
    // if(!req.params.userid) return res.status(400).json({'message':"User Id required"});
    const onenote = await note.findOne({id:req.params.id}).exec();
    if(!onenote) return res.status(400).json({'message':`no userid matches for ${req.params.id}`});
    const deletenote = await note.deleteOne({id:req.params.id});
    res.status(200).json({'message':`user with userid ${req.params.id} deleted`});

}
const updateNote = async(req,res)=>{
    const finduser = await note.findOne({userid:req.params.id}).exec();
   
    if(!finduser) return res.status(400).json({'message':`no user matches for  userid ${req.params.id}`});
    if(req?.body?.title) finduser.title = req.body.title;
    if(req?.body?.content) finduser.content = req.body.content;
    await finduser.save(); 
    res.status(200).json({'message':`user with userid ${req.params.id} updated`});
    
}


module.exports = {notesList,newNote,notesById,deleteNote,updateNote};