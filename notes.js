const fs=require('fs');
const chalk=require('chalk');

const getNotes=()=>{
    return "Your notes..";
}

debugger


const addNote=(title,body)=>{

    const notes=loadNotes();
    
    const duplicate=notes.filter(function (note){
        if(note.title===title)
        {
            return true;
        }
    })

    if(duplicate.length===0)
    {
        notes.push({
            title:title,
            body:body
        })
        saveNote(notes);
        console.log("Added successfully");
    }

    else {
        console.log("title Taken please add note again");
    }

}
console.log(duplicate)

const saveNote=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{

    try{
    const dataBuffer=fs.readFileSync('notes.json');
    const data=dataBuffer.toString();
    return JSON.parse(data);
    } catch(e)
    {
        return [];
    }

}

const removeNote=(title)=>{

    var notes=loadNotes();
    var count=0;
    notes=notes.filter((note)=>{
        if(note.title!==title)
        {
            count++;
            return true;
        }
    
    })

  if(count===notes.length-1){
    saveNote(notes);
    console.log(chalk.bgGreenBright("Note removed "))
  }
  else{
      console.log(chalk.bgRedBright("Title to be removed not found"));
  }

}


const listNote=()=>{
    const notes=loadNotes();
    console.log(getNotes())
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((note)=> note.title===title)
    if(note)
    {
        console.log(chalk.inverse.bold.yellow(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.inverse.bold.red("Error"))
    }
}

module.exports=({
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
})