const express = require('express');
const app = express();

// ENDPOINTS:
app.get('/tmx37-api/isAlive', (req, res) => {
    res.json({ message: 'API is alive, you  entered ' + req });
});

// SERVER CONFIGURATION
const port = process.env.port || 3000; //port can be modified accordingly to use
app.listen(port, () => {
    console.log('Server is running on port ${port}');
});