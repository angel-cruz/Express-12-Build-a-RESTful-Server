# Movie Finder API

A beginner-friendly Express API that searches movies and retrieves details using OMDb.

## Setup

1. Run `npm install`.
2. Replace `your_actual_api_key_here` in `.env` with your activated OMDb API key.
3. Run `npm start` or `npm run dev`.
4. Visit `http://localhost:3001/`.

## Endpoints

- `GET /api/search?title=Batman` — search for movies.
- `GET /api/movies/tt0372784` — retrieve movie details by IMDb ID.

Missing or blank search titles return HTTP 400. OMDb lookup failures return HTTP 404. Network errors return HTTP 500.

**Security:** Never commit `.env` or your real API key.
