import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import Card from './models/card.js'; 
dotenv.config();


const app = express();

app.use(cors()); 
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World');
});

//create card
app.post('/api/create-card', async (req, res) => {
  const { title, description } = req.body;
  try {
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get a card by title
app.get('/api/cards/:title', async (req, res) => {
    try {
      const card = await Card.findOne({ title: req.params.title });
      if (!card) return res.status(404).json({ message: 'Card not found' });
      res.json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get all cards
app.get('/api/cards', async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.listen(5000, () => {
  console.log('Server is running on port 5000!');
});
