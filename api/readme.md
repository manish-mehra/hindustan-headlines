# Hindustan Headline API

The Hindustan Headline API is a Node.js REST API that fetches the latest news from various news websites. It uses Node.js, Express, TypeScript, and Cheerio for web scraping.

## Setup Backend

To set up the Hindustan Headline API backend, follow these steps:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository from GitHub:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd hindustan-headlines-api
```

3. Install the dependencies:

```
npm install
```

### Running the API

There are three scripts defined in the `package.json` file:

- `build`: Compiles TypeScript code to JavaScript in the `dist` folder.
- `start`: Starts the API server from the compiled JavaScript code in the `dist` folder.
- `dev`: Starts the API in development mode, which enables live reloading.

To run the API server in development mode, use the following command:

```
npm run dev
```

This will start the server, and you should see a message indicating that the server is running on a specific port (e.g., http://localhost:3000).

### Available Endpoints

The API provides the following endpoints to fetch news data from different sources:

- `/aaj-tak-news`: Fetches the latest news from Aaj Tak.
- `/india-today-news`: Fetches the latest trending news from India Today.
- `/ndtv-news`: Fetches the latest news from NDTV.
- `/toi-news`: Fetches the latest news from Times of India.
- `/zee-news`: Fetches the latest news from Zee News.
- `/news-18-news`: Fetches the latest news from News18.
- `/indian-express-news`: Fetches the latest news from Indian Express.
- `/times-now-news`: Fetches the latest news from Times Now.

### Scraped Data Sources

The API fetches news from the following URLs:

- Aaj Tak: [https://www.aajtak.in/](https://www.aajtak.in/)
- India Today: [https://www.indiatoday.in/trending-news](https://www.indiatoday.in/trending-news)
- NDTV: [https://www.ndtv.com/latest](https://www.ndtv.com/latest)
- Zee News: [https://zeenews.india.com/latest-news](https://zeenews.india.com/latest-news)
- Times of India: [https://timesofindia.indiatimes.com/](https://timesofindia.indiatimes.com/)
- News18: [https://www.news18.com/news/](https://www.news18.com/news/)
- Indian Express: [https://indianexpress.com/latest-news/](https://indianexpress.com/latest-news/)
- Times Now: [https://www.timesnownews.com/latest-news](https://www.timesnownews.com/latest-news)

## Folder Structure

```
src/
-- /constants
-- /controller
-- /interfaces
-- /routes
-- /scraper
-- /utils
```

## Technologies Used

- Node.js
- Express
- TypeScript
- Cheerio (for web scraping)

## License

This project is licensed under the ISC License. Feel free to use and modify it according to your needs.

---
For any queries or issues, please feel free to contact me. Happy coding!