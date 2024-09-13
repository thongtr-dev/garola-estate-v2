import mongoose from 'mongoose';
let connected = false;

const connectDB = async (): Promise<void> => {
  mongoose.set('strictQuery', true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log('MongoDB is connected');
    return;
  }

  const mongoUri = process.env.MONGODB_URI;

  // Check if MONGODB_URI is defined
  if (!mongoUri) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(mongoUri);
    connected = true;
  } catch (error) {
    console.log('MongoDB connection error:', error);
    throw error; // Re-throw the error if necessary
  }
};

export default connectDB;
