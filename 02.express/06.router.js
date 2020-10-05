const express =require('express');
const util =require('util')

const app = express();
app.use(express.static(__dirname + '/public'));
let shoppingRouter =express.Router();
let customerRouter =express.Router();
app.use('/shopping',shoppingRouter)
app.use('/customer',customerRouter)

app.get('/',function (req,res) {  
    res.send('Root Router');      
});
shoppingRouter.get('/',function (req,res) {  
    res.send('shopping Router');      
});
shoppingRouter.get('/index',function (req,res) {  
    res.send('shopping Router index');      
});
customerRouter.get('/',function (req,res) {  
    res.send('customer Router');      
});
customerRouter.get('/index',function (req,res) {  
    res.send('customer Router index');      
});

app.get('*', (req,res) => {
    res.status(404).send('Path not Found')
});

app.listen(3000, () => {  util.log('Server is running at http://127.0.0.1:3000');});

