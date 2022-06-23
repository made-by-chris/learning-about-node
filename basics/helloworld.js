const fs = require("fs");

fs.writeFile("hello2.txt", "hello im a computer program", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
