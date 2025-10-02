# URL Shortener App

A beautiful, modern URL shortener application built with React frontend and Node.js Express backend. Features smooth animations, responsive design, and an intuitive user experience.

## Features

- 🔗 **URL Shortening**: Convert long URLs into short, shareable links
- 🎨 **Beautiful UI**: Modern design with smooth animations and transitions
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 📋 **Copy to Clipboard**: One-click copying of shortened URLs
- 🗑️ **Clear Function**: Easy reset for new URL shortening
- ⚡ **Fast & Lightweight**: Optimized performance with minimal dependencies
- 🔄 **Real-time Feedback**: Loading states and error handling

## Tech Stack

### Frontend
- React 18
- CSS3 with animations
- Modern ES6+ JavaScript
- Responsive design

### Backend
- Node.js
- Express.js
- nanoid for URL generation
- CORS enabled

## Project Structure

```
url-shortener/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── UrlShortener.js
│   │   │   └── UrlShortener.css
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
├── server/                 # Express backend
│   ├── index.js
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd url-shortener
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on `http://localhost:3001`
   - Frontend development server on `http://localhost:3000`

## Manual Setup (Alternative)

If you prefer to start servers individually:

1. **Start the backend server**
   ```bash
   cd server
   npm install
   npm run dev
   ```

2. **Start the frontend (in a new terminal)**
   ```bash
   cd client
   npm install
   npm start
   ```

## API Endpoints

### POST /api/shorten
Shortens a long URL.

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very/long/url"
}
```

**Response:**
```json
{
  "originalUrl": "https://example.com/very/long/url",
  "shortUrl": "http://localhost:3001/abc12345",
  "shortId": "abc12345"
}
```

### GET /:shortId
Redirects to the original URL.

### GET /api/stats/:shortId
Get statistics for a shortened URL (optional feature).

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter a long URL in the input field
3. Click the "Shorten" button
4. Copy the generated short URL using the copy button
5. Use the clear button to reset and shorten another URL

## Features in Detail

### Animations & UX
- Smooth slide-up animation on page load
- Bouncing icon animation
- Button hover effects with elevation
- Loading spinner during API calls
- Success/error feedback with animations
- Responsive design for all screen sizes

### Error Handling
- URL validation
- Network error handling
- User-friendly error messages
- Visual feedback for all states

### Responsive Design
- Mobile-first approach
- Flexible layouts for different screen sizes
- Touch-friendly buttons and inputs

## Development

### Adding New Features
1. Backend changes go in `server/index.js`
2. Frontend components go in `client/src/components/`
3. Styling goes in corresponding `.css` files

### Environment Variables
You can customize the server port by setting the `PORT` environment variable:
```bash
PORT=8000 npm run server
```

## Production Deployment

### Backend
1. Set up a production database (currently uses in-memory storage)
2. Configure environment variables
3. Deploy to your preferred hosting service

### Frontend
1. Build the production version:
   ```bash
   cd client
   npm run build
   ```
2. Serve the `build` folder using a static file server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication and URL management
- [ ] Analytics and click tracking
- [ ] Custom short URL aliases
- [ ] QR code generation
- [ ] URL expiration dates
- [ ] Bulk URL shortening
- [ ] API rate limiting
- [ ] URL preview before redirect