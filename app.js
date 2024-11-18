const yargs = require("yargs")
const chalk = require("chalk")
const notes = require("./notas.js")

yargs.version("1.1.0")

// Add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(argv.title + argv.body);
        notes.addNote(argv.title, argv.body);
        console.log(chalk.bgRed("Adding a new note"));
    }

})

yargs.parse()