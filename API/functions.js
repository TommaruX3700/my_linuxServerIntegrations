//Author: tmx37
//Description: This file contains async functions that are used directly by tmx37-API

//#region GLOBAL VARIABLES
const fs = require('fs')
var logCurrentLine = 1;

//#endregion

//#region EXPORT
export async function tLog(logMessage) {
    const pathToCheck = getDate(); //log files are named after the date when they are created
    message = String(logMessage)
    if (fs.existsSync(pathToCheck) == true) {
        //File found
        fs.appendFile(pathToCheck, String(logCurrentLine) + ". " + message + "\n", callBackError);
    } else {
        //File not found
        const logIntro = buildLogIntro();
        fs.writeFile(pathToCheck, logIntro, callBackError)
        fs.appendFile(pathToCheck, String(logCurrentLine) + ". " + message + "\n", callBackError)
    }
    logCurrentLine+=1;
}

export function readTextFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) throw err;
        return data;
    })
}

export function outputDate(){
    return getDate();
}

export function outputTime(){
    return getTime();
}

//#endregion

//#region FUNCTIONS
function getDate () { 
    var outDate = "";
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return outDate = year + month + day;
}

function getTime () {
    var outTime = "";
    const time = new Date(); 
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return outTime = hour + ":" + minutes + ":" + seconds;
}

function buildLogIntro(){
    const outIntro = "TMX37_API,  " + getDate() + "\nLog system started \n###############################################\n"
    return outIntro;
}

function callBackError (error) {
    if(error) throw error;
}

//#endregion