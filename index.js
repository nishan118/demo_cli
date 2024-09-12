//create a cli that lets the user specify a file path and the node.js process 
//count the number of words inside it 
const { Command } = require('commander');
const program = new Command();

program
  .name('file counters')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count_words')
  .description('count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    const fs = require('fs');
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        return console.log(err);
      }
      let total = 1;
      for (let i = 0; i < data.length; i++) {
        if (data[i] === ' ') {
          total++;
        }
        // console.log(data[i]);
      }
      console.log(`total number of words in ${file} is ${total}`);
    });
  });

program.parse();