// const fs = require ("fs");
// const {Command} = require ("commander");
// const program = new Command();

// program
// .name("File related cli")
// .description("cli to file based tasks")
// .version("0.8.0");


// program.command("count_words")
// .description("counts the number of words in file")
// .argument("<file>","file to count")
// .action((file) => {
//     fs.readFile(file, "utf-8",(err, data) =>{
//         if (err){
//             console.log(err);
//         }
//         else{
//             let word = 0 ;

//             for(let i = 0 ; i<data.length; i++){
//                 if (data[i] == " "){
//                     word  ++ ;
//                 }
//             }
//             console.log(`there are ${word+1} words in ${file}`)
//         }
        
//         });
// });

// program.parse(process.argv);

const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("File related cli")
  .description("CLI to perform file-based tasks")
  .version("0.8.0");

program.command("count_words")
  .description("Counts the number of words in a file")
  .argument("<file>", "File to count words in")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Split the data by spaces, new lines, and tabs
        const words = data.trim().split(/\s+/);
        console.log(`There are ${words.length} words in ${file}`);
      }
    });
  });

program.parse(process.argv);
