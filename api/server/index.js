const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const {mongoose} = require('./database');
const cors = require('cors');
const app = express();
//SETTINGS****************************************
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES*************************************
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//ROUTES*****************************************

app.use('/api/employees',require('./routes/employees.routes'));




















app.listen(app.get('port'),()=>{
    console.log(`server on port ${ app.get('port')}`.yellow);
});