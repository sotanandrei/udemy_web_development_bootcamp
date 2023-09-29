/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

const questions = [
  {
    type: "input",
    name: "url",
    message: "Enter your url here: ",
  },
];

// inquirer
inquirer.prompt(questions).then((answers) => {
  const url = answers.url;
  var qr_png = qr.image(url, { type: "png" });
  qr_png.pipe(fs.createWriteStream("qr_img.png"));

  fs.writeFile(
    "/home/andreisotan/udemy_webdev_bootcamp/2.4 QR Code Project/URL.txt",
    url,
    (err) => {
      if (err) {
        console.error(err);
      }
      console.log("File was written succesfully.");
    }
  );
});
