const express =require('express');
const util =require('util')
const app = express();

app.get('/',function (req,res) {
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express</title>
    </head>
    <body>
        <h1>welcome to Express</h1>
    </body>
    </html>   
    `
    res.send(html);
   
});
app.get('*', (req,res) => {
    res.status(404).send('Path not Found')
});

app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');});

//status method chaining