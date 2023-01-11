// fs - file module
// asynchronous - non blocking
// synchronous - blocking

// synchronous
const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);


// write file or create file if not existing(it overwrites the existing content)
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result: ${first}, ${second}`
// );


// append in the file
writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
  );

  console.log('done with the task');
  console.log('starting the next one');




