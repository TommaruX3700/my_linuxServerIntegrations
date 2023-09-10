//Author: tmx37
//Description: Multipurpose API for home network developer projects

//#region IMPORT
const functions = await import('./modules/functions.mjs');
import('./modules/functions.mjs').then((functions) => {
    outputDate(),
    readTextFile(),
    outputTime()
});
//#endregion

//#region GLOBAL VARIABLES
const express = require('express');
const { outputDate, readTextFile, outputTime } = require('./modules/functions.mjs');
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
    tLog("GET-REQUEST " + req.url + " FROM " + req.ip + ", " + req.hostname + " AT " + outputTime());
});

//#endregion

//#endregion

//#region NODE_CONFIGURATION
const port = process.env.port || 8080; //port can be modified accordingly to use
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

//#endregion

