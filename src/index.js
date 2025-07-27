import express from 'express';
import "dotenv/config";
import cors from 'cors';
import authRoutes from "./routes/authRoutes.js"
import { connect } from 'mongoose';
import { connectDB } from './lib/db.js';
import bookRouter from './routes/bookRoutes.js';
import job from './lib/cron.js';

const app = express();
const PORT =process.env.PORT || 3000;

job.start();
// app.use(express.json());
app.use(cors());
// imge large size ki dalne ke lite ye use karna padega     app.use(express.json({ limit: '10mb' }));
 app.use(express.json({ limit: '10mb' }));

app.use("/api/auth",authRoutes);
app.use("/api/books",bookRouter)

// console.log({PORT});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});