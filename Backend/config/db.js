const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://pranavpandey2309:F1DIb3gSHV7qcUPE@cluster0.1hm1x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

module.exports = connectDB;