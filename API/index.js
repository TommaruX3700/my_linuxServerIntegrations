//Author: tmx37
//Description: multipurpose API for home network developer projects

//#region IMPORT
import { 
            tLog,
            readTextFile,
            outputDate,
            outputTime
        } from './functions';

//#endregion

//#region GLOBAL VARIABLES
const express = require('express');
const app = express();

//#endregion

//#region ENDPOINTS:
//#region GET-REQUESTS

app.get('/tmx37-api', (req, res) => { //Returns API basic informations as json
    const versionFile = 'Version';
    res.json(
        {
            API_VERSION: readTextFile(versionFile),
            date: outputDate(),
            message: 'API is alive',
            clientIP: req.ip,
            clientHostname: req.hostname,
            clientURL: req.url
        }
    );
    tLog(outputTime + " - " + "GET-REQUEST " + req.url + " FROM " + req.ip + ", " + req.hostname);
});

//#endregion

//#endregion

//#region NODE_CONFIGURATION
const port = process.env.port || 8080; //port can be modified accordingly to use
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

//#endregion

