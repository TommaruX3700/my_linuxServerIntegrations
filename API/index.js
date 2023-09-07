const express = require('express');
const app = express();

// ENDPOINTS:
app.get('/tmx37-api/isAlive', (req, res) => {
    const clientIP = req.ip;
    const clientHostname = req.hostname;
    const clientURL = req.url;

    console.log('GET-REQUEST from: \n IP: ' + clientIP + 'Hostname: ' + hostname + ' by URL: ' + clientURL);

    res.json(
        {
            message: 'API is alive'

        }
    );
});

// SERVER CONFIGURATION
const port = process.env.port || 8080; //port can be modified accordingly to use
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});