const mongoose = require ('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/building-maintenance',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
   
    });

    module.exports = mongoose.connection;