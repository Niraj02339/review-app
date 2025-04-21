import express from 'express';  // ES module import
import cors from 'cors';        // ES module import

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Feedback Collector API is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
const authRoutes = require('./routes/authRoutes');

app.use('/api/auth', authRoutes);
const feedbackRoutes = require('./routes/feedbackRoutes');

app.use('/api/feedback', feedbackRoutes);
