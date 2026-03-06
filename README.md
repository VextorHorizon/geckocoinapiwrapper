# CoinGecko Crypto API Wrapper

This project is an API Wrapper for fetching cryptocurrency data from CoinGecko using NestJS and TypeScript. it is designed for ease of use via Postman or for integration with other systems.

## System Requirements

- Node.js (v18 or higher recommended)
- npm

## Installation

1. Navigate to the project folder
2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development

Run the server locally for development or testing:
```bash
npm run start:dev
```
The system will be available at: http://localhost:3000

## Production API

Alternatively, you can access the live API directly at:
https://geckocoinapiwrapper.vercel.app

## API Usage

### Get Crypto Data

Fetch price and basic statistics of a cryptocurrency using its CoinGecko ID.

- Endpoint: `/crypto/:id`
- Method: `GET`
- Example URL (Local): http://localhost:3000/crypto/bitcoin
- Example URL (Production): https://geckocoinapiwrapper.vercel.app/crypto/bitcoin

### Data Response Format

```json
{
  "id": "bitcoin",
  "symbol": "btc",
  "name": "Bitcoin",
  "current_price_usd": 65432.10,
  "market_cap_usd": 1285000000000,
  "total_volume_usd": 35000000000,
  "price_change_24h_usd": 450.25,
  "price_change_percentage_24h": 0.69,
  "last_updated": "2026-03-06T21:52:19.000Z"
}
```

## Important Project Structure

- `src/crypto/crypto.controller.ts`: Manages API routing
- `src/crypto/crypto.service.ts`: Handles data fetching logic from CoinGecko API
- `src/crypto/crypto.module.ts`: Integrates the crypto module components
