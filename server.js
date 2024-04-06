const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27018/cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  subscribedAt: {
    type: Date,
    default: Date.now,
  },
});

// Define Model
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Handle POST request for subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(200).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
