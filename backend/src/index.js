require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
const DoctorRoute = require('../routes/DoctorRoutes');
const { connectToDb } = require('../dataBase/db')
const bodyParser = require('body-parser');
const PostRoute=require('../routes/PostRoutes')


//middleware
app.use(express.json());
app.use(cors());
//for handling raw  file uploads
app.use('/api/v1/doctor/upload/:doctorId', bodyParser.raw({ type: 'application/octet-stream', limit: '10mb' }));

//database connection
connectToDb();

//routing
app.use('/api/v1', DoctorRoute); //route for handling profile section
app.use('/api/v1', PostRoute); //route for handling post section

app.listen(PORT, () => {
  console.log(`server is  running at the ${PORT}`);
})