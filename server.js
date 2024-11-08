import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Sample route
app.get('/', (req, res) => {
  res.send(`Hello from Node.js App! Environment: ${process.env.NODE_ENV}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});