A Node.js application for parsing cryptocurrency trade data from CSV files and calculating asset balances at specified timestamps.

## Features

- CSV file upload for trade data
- Storage of parsed data in MongoDB
- Asset balance calculations for specified timestamps

## API Endpoints

### 1. Upload Trades

- **Endpoint**: `/trades/upload`
- **Method**: `POST`
- **Description**: Uploads and processes a CSV file with trade data.
- **Request Format**: `multipart/form-data` with a `file` field.

### 2. Get Balance

- **Endpoint**: `/balance/getBalance`
- **Method**: `POST`
- **Description**: Calculates asset balances at a specified timestamp.
- **Request Body**:
  ```json
  {
    "timestamp": "2022-09-28T12:00:00"
  }
  ```

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   - Create a `.env` file and add necessary environment variables.
4. **Start the Server**:
   ```bash
   npm start
   ```

## Project Structure

### Configuration

- **config/db.js**: Database configuration and connection setup.

### Controllers

- **controllers/tradeController.js**: Manages HTTP requests related to trade operations.
- **controllers/balanceController.js**: Manages HTTP requests related to balance calculations.

### Middleware

- **middlewares/errorHandler.js**: Global error handling middleware.

### Models

- **models/trade.js**: Defines the Mongoose schema and model for trade data.

### Routes

- **routes/index.js**: Combines all individual route modules.
- **routes/tradeRoutes.js**: Routes related to trade operations.
- **routes/balanceRoutes.js**: Routes related to balance calculations.

### Services

- **services/tradeService.js**: Business logic for trade operations including parsing and storing trades.
- **services/balanceService.js**: Business logic for calculating balances at specific timestamps.

### Utilities

- **utils/csvParser.js**: Utility for parsing CSV files.

### Miscellaneous

- **uploads/**: Temporary storage for uploaded CSV files.
- **.env**: Environment variable configuration file.
- **.gitignore**: Specifies files and directories to be ignored by Git (e.g., `node_modules/` and environment files).
- **package.json**: Contains project dependencies, scripts, and metadata.
- **README.md**: Provides an overview of the project, setup instructions, and usage details.
- **server.js**: Entry point for the Express.js application, setting up middleware, routes, and the server.