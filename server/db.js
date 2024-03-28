const mongoose = require('mongoose')

require('dotenv').config();
// console.log(process.env)

const mongoUrl = process.env.MONGODB_URL;
// const MongoUrl = 'mongodb+srv://mahtab91250:7wRARjd32bE59Da3@cluster0.ipb2qp7.mongodb.net/flipzone'

// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err.message));

// mongoose.connect('MongoUrl', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });     
module.exports = mongoose