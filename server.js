/**
 * Created by luisfediaz on 15/03/17.
 */





var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3000 ,  function(){
   console.log("Server up");
});