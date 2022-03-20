const express = require('express');
const morgan = require('morgan');
const {APP_CONFIG}= require('../config');
const cors = require('cors')
const {DatabseConnection}= require('../infra/mongoose')
const {API_ROUTER} = require('./router');

const path = require('path')


class ExpressApp {
    constructor(){
        this.app = express();
    }

    async start (){
        await DatabseConnection.connect()
        this.app.set('views', path.join(__dirname, '../views'))
        this.app.set('view engine', 'ejs')
        this.app.use(cors());
        this.app.use(morgan(APP_CONFIG.LOGGER_TYPE));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.get('/',(req,res)=>{
            res.render('index')
        })
        
        this.app.use(API_ROUTER);
        
        this.app.listen(APP_CONFIG.PORT,()=>{
            console.log(`APP is listining at ${APP_CONFIG.PORT}`)
        })
    }

}

module.exports = ExpressApp;