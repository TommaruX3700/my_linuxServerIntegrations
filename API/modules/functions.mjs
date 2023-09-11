//Author: tmx37
//Description: This file contains async functions that are used directly by tmx37-API

//import { log } from 'console';
import fs from 'fs'
//import { resolve } from 'path';

//#region GLOBAL VARIABLES
var logCurrentLine = 1;
const logPath = './logs/';
const logFile = logPath + getDate() + '.txt'; //log files are named after the date when they are created

//#endregion

//#region EXPORT
export async function tLog(logMessage) {
    const message = String(logMessage)
    if (await fs.existsSync(logFile) == true) {
        //File found
        if (logCurrentLine == 1) {
            const logIntro = buildLogIntro();
            fs.appendFile(logFile, logIntro, callBackError);
            fs.appendFile(logFile, String(logCurrentLine) + ". " + message + "\n", callBackError);
        } else{
            fs.appendFile(logFile, String(logCurrentLine) + ". " + message + "\n", callBackError);
        }
    } 
    else {
        //File not found
        const logIntro = buildLogIntro();
        fs.writeFile(logFile, logIntro, callBackError)
        fs.appendFile(logFile, String(logCurrentLine) + ". " + message + "\n", callBackError)
    }
    logCurrentLine+=1;
}

export async function readTextFile(filePath) {
    const output = await getFileContent(filePath).then((data) => {return String(data)}).catch((err) => {console.error(err); return err});
    return output;
}

export function outputDate(){
    return getDate();
}

export function outputTime(){
    return getTime();
}

//#endregion

//#region FUNCTIONS
function getFileContent(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) { reject(err); }
            else { resolve(data); }
        });
    });
}

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
    const outIntro = "\nTMX37_API, started on " + getDate() + " at " + getTime() + "\n###############################################\n";
    return outIntro;
}

function callBackError (error) {
    if(error) throw error;
}

//#endregion