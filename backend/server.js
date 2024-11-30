import express from "express";
import weather from "./routes/weather.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
import cors from "cors";

const port = process.env.PORT || 8000;

const app = express();
if (!process.env.WEATHER_API_KEY) {
  console.error("WEATHER_API_KEY is not set");
  process.exit(1);
}

// CORS middleware
app.use(cors({ origin: "http://localhost:3000" }));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Routes
app.use("/api/weather", weather);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
