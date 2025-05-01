import chalk  from "chalk";

console.log(chalk.blue("Hello world!"));
console.log(chalk.red.bold("Hello world!"));
console.log(chalk.green.underline("this is green and underlined"));

const path = require('path')

console.log(__dirname)
console.log(path.join(__dirname,"index.js"))
