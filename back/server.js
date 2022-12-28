const mongoose = require('mongoose');
const dotenv = require('dotenv');
const App =require('./app');

// App.use(express.json())
dotenv.config();

const port = process.env.PORT || 8000;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }).then(() => {
     console.log('DB connection stablished!');
     App.listen(port, () => {
         console.log(`<--- App running on ${process.env.NODE_ENV} (Port: ${port}) --->`);
     });
 } 
 );



