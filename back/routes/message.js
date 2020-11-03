var express= require('express');
var messageController=require('../controllers/MessageController');


var api=express.Router();

api.post('/message/enviar', messageController.send)
api.get('/message/:de/:para', messageController.data_msm) //creamos la ruta con la funcion
// /:de/:para quien envie el mensaje y quien recepciona el mensaj



module.exports=api;

