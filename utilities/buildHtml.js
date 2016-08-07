/* eslint-disable no-console */
/* eslint-disable quotes */
import fs from "fs";
import cheerio from "cheerio";
import colors from "colors"; //eslint-disable-line no-unused-vars

fs.readFile("client/index.html", "utf8", (error, markup) => {
    if (error) {
        return console.log(error.red);
    }

    const $ = cheerio.load(markup);
    $("head").prepend('<link rel="stylesheet" href="material.icons.css">');
    $("head").prepend('<link rel="stylesheet" href="material.style.css">');
    $("head").prepend('<link rel="stylesheet" href="simpletextrotator.css">');
    $("head").prepend('<link rel="stylesheet" href="animate.css">');
    $("head").prepend('<link rel="stylesheet" href="style.css">');

    fs.writeFile("dist/index.html", $.html(), "utf8", (writeError) => {
        if (writeError) {
            return console.log(`Couldn't open and write to - ${writeError.path}`.red);
        }
        console.log("index.html was successfully written to the '/dist' folder".green);
        return 1;
    });
    return 0;
});
