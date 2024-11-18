const fs = require ('fs');
const chalk = require ('chalk');

const addNote = function(title, body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    });

        if(duplicateNotes.length === 0){
            notes.push({
                title: title,
                body: body
            });
            saveNotes(notes);
            console.log(chalk.bgGreen("new note added"));

        }else{
            console.log(chalk.bgRed("note title taken"));
        }
}


const listNotes = function(){
    const notes = loadNotes();
    console.log(chalk.bgGreen("your notes"));
    notes.forEach((notes) => {
        console.log(note.title);
    });
}

const readNotes = function(title){
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(note){
        console.log(chalk.bgGreen(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.bgRed("note not found"))
    }
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return[];
    }
}