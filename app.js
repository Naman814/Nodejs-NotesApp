const notes=require('./notes.js');
const yargs=require('yargs')
const chalk=require('chalk');
const {argv}=require('yargs')


yargs.version('1.1.0');

yargs.command({
    command:'add',
    describe:"adding Note",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'

        },
        body: {
            describe:"body",
            demandOption:true,
            type:'string'
        }
    },
    handler(){
       notes.addNote(argv.title,argv.body);  // ES6
    }
})

yargs.command({
    command:'remove',
    describe:"removing Note",
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'

        }
    },
    handler:function(){
       notes.removeNote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:"Listing Note",
    handler:function(){
       notes.listNote();
    }
})

yargs.command({
    command:'read',
    describe:'reading note',
    builder:{
        title:{
            describe:"title",
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.readNote(argv.title);
    }

})

 yargs.argv
