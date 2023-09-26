//Author: tmx37
//Description: Multipurpose API for home network developer projects

//#region IMPORT
import express from 'express';
import { readTextFile, outputDate, outputTime, tLog } from './modules/functions.mjs';

const app = express();

const vFile = './Version';
const version = await readTextFile(vFile).then((output) => {return output;}).catch((err) => {console.error("Cant find version")});

//#endregion

//#region ENDPOINTS:
//#region GET-REQUESTS

//Returns API basic informations as json
app.get('/tmx37-api', (req, res) => { 
    res.json(
        {
            API_VERSION: version,
            message: 'API is alive',
            date: outputDate(),
            clientIP: req.ip,
            clientHostname: req.hostname,
            clientURL: req.url
        }
    );
    tLog("GET-REQUEST '" + req.url + "' FROM " + req.ip + ", '" + req.hostname + "' AT " + outputTime());
});

//#endregion

//#endregion

//#region NODE_CONFIGURATION
const port = process.env.port || 8080; //port can be modified accordingly to use

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

//#endregion

