const fs = require("fs");

fs.writeFile("message.txt", "Hello from node.js!", (err) => {
  if (err) throw err;
  console.log("The file has been saved.");
});

fs.readFile("message.txt", "utf8", function (err, data) {
  if (err) throw err;
  // Display the file content
  console.log(data);
});
