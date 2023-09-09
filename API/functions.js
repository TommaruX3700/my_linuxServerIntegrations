//Author: tmx37
//Description: this file contains async functions that are used directly by tmx37-API

//#region GLOBAL VARIABLES
const fs = require('fs')

const logIntro = buildLogIntro();
var logCurrentLine = 1;

var reader = new FileReader();

//#endregion

//#region EXPORT
export async function tLog(logMessage = "") {
    const pathToCheck = getDate();

    //File found
    if (fs.existsSync(pathToCheck) == true) {
        fs.appendFile(pathToCheck, String(logCurrentLine) + " " + logMessage + "\n", callBackError);
    } else {
        //File not found
        fs.writeFile(pathToCheck, logIntro, callBackError)
        fs.appendFile(pathToCheck, String(logCurrentLine) + " " + logMessage + "\n", callBackError)
    }
    logCurrentLine+=1;
}

export function readTextFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) throw err;
        return data;
    })
}

//#endregion

//#region FUNCTIONS
function getDate () {
    var outDate = "";
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return outDate = year + month + day;
}

function buildLogIntro(){
    const outIntro = "TMX37_API,  " + getDate() + "\nLog system started \n###############################################\n"
    return outIntro;
}

function callBackError (error) {
    if(error) throw error;
}

//#endregion