const express =require('express');
const morgan =require('morgan');

const app = express();

//app.use(morgan('combined'));

app.use(morgan(':method + :date + :remote-addr'));
app.use(function(request,response){
    response.send(`<h1>express Basic</h1>`);
});

app.listen(3000, function () {
   console.log('Server is running at http://127.0.0.1:3000');
});