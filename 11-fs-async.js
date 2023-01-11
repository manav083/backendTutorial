const { readFile, writeFile } = require("fs");

// asynchronous
console.log('start');
// if we dont provide utf coding then t will provide buffer
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the async result: ${first} ${second}`
    , (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        console.log('done with the task');
    });
  });
});

console.log('starting the next one');
