import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    if(!process.env.MONGO_URL){
      throw new Error('MONGO_URL is undfined');
    }
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`✅ Database connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  }
};

export default dbConnection;