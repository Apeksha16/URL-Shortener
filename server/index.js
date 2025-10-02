const express = require('express');
const cors = require('cors');
const { nanoid } = require('nanoid');

const app = express();
const PORT = process.env.PORT || 3001;

// In-memory storage (use database in production)
const urlDatabase = new Map();

// Middleware
app.use(cors());
app.use(express.json());

// Validate URL function
const isValidUrl = (string) => {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

// Routes
app.post('/api/shorten', (req, res) => {
  const { originalUrl, baseUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }

  if (!isValidUrl(originalUrl)) {
    return res.status(400).json({ error: 'Invalid URL format' });
  }

  // Generate short ID
  const shortId = nanoid(8);
  const shortUrl = `${baseUrl}/${shortId}`;

  // Store in database
  urlDatabase.set(shortId, {
    originalUrl,
    shortUrl,
    shortId,
    createdAt: new Date(),
    clicks: 0
  });

  res.json({
    originalUrl,
    shortUrl,
    shortId
  });
});

// Redirect route
app.get('/:shortId', (req, res) => {
  const { shortId } = req.params;
  const urlData = urlDatabase.get(shortId);

  if (!urlData) {
    return res.status(404).json({ error: 'URL not found' });
  }

  // Increment click count
  urlData.clicks++;
  
  res.redirect(urlData.originalUrl);
});

// Get URL stats (optional)
app.get('/api/stats/:shortId', (req, res) => {
  const { shortId } = req.params;
  const urlData = urlDatabase.get(shortId);

  if (!urlData) {
    return res.status(404).json({ error: 'URL not found' });
  }

  res.json(urlData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});