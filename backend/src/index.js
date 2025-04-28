require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const mainRoute = require('../routes/Routes');
const {connectToDb}=require('../dataBase/db')


//middleware
app.use(express.json());
app.use(cors());

//database connection
connectToDb();

//routing
app.use('api/v1',mainRoute);

app.listen(PORT, () => {
  console.log(`server is  running at the ${PORT}`);
})