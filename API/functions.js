//Author: tmx37
//Description: this file contains async functions that are used directly by tmx37-API

//#region GLOBAL VARIABLES
const fs = require('fs')
var reader = new FileReader();

//#endregion

//#region EXPORT
export async function tLog(logMessage = "") {
    //TODO:
    //      check if log with actual date exists
    //          if yes, append message to it
    //          if not, create new file with actual date, append description message and input message to it 
    
    const actualDate = Date.

    try {
        //File found
        fs.readFile(actualDate);
        fs.appendFile(actualDate, logMessage, function (err) {if(err) throw err;});

    } catch {
        //File not found
        fs.writeFile(actualDate, logIntro, function(err) {if(err) throw err;})
        fs.appendFile(actualDate, logMessage, function(err) {if(err) throw err;})
    }
    
}

export function readTextFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) throw err;
        return data;
    })
}
  

//#endregion

//#region FUNCTIONS

//#endregion