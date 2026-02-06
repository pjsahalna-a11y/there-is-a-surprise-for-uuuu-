import express from 'express';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('Valentine Express API is running! ❤️');
});

// Endpoint to handle the "Yes" click
app.post('/api/record-answer', (req, res) => {
  const { answer } = req.body;
  console.log(`User answered: ${answer}`);
  
  // Here you could save to a database if you wanted
  
  res.json({ 
    success: true, 
    message: "Yay! Answer recorded.",
    timestamp: new Date().toISOString()
  });
});

export default app;