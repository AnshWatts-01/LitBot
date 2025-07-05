
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateBookRecommendation } from './utils/geminiClient.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/recommend', async (req, res) => {
  const { message } = req.body;
  try {
    const reply = await generateBookRecommendation(message);
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get recommendation' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
