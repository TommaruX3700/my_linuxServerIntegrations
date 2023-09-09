//Author: tmx37
//Description: multipurpose API for home network developer projects

//#region IMPORT
import { 
            tLog,
            readTextFile
        } from './functions';

//#endregion

//#region GLOBAL VARIABLES
const express = require('express');
const app = express();

//#endregion

//#region ENDPOINTS:
//#region GET-REQUESTS
//returns client IP and informations 
app.get('/tmx37-api/isAlive', (req, res) => {
    const clientIP = req.ip;
    const clientHostname = req.hostname;
    const clientURL = req.url;
    console.log('##########\n> GET-REQUEST from: \n    - IP: ' + clientIP + '\n    - Hostname: ' + clientHostname + '\n    - by URL: ' + clientURL);
    res.json(
        {
            message: 'API is alive'
        }
    );
});

//return API version
app.get('/tmx37-api', (req, res) => {
    const pathFile = 'Version';
    res.json(
        {
            message: readTextFile(pathFile)
        }
    );
});

//#endregion

//#endregion

//#region NODE_CONFIGURATION
const port = process.env.port || 8080; //port can be modified accordingly to use
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

//#endregion

