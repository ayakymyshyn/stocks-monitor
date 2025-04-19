# Stocks Monitor

A modern, real-time stock market monitoring application built with Next.js and TypeScript. Track your favorite stocks, view detailed price information, and monitor market changes with an intuitive interface.

## Features

- 🔍 Real-time stock search and tracking
- 📊 Interactive stock cards with detailed price information
- 📈 TradingView integration for advanced charting
- 💾 Local storage for favorite stocks
- 🎨 Modern UI with dark mode support
- 📱 Responsive design for all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: SWR
- **UI Components**: Radix UI + Shadcn UI
- **Charts**: TradingView Widget
- **Icons**: Lucide React, Tabler Icons
- **API**: Finnhub.io

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Finnhub API key (get it from [finnhub.io](https://finnhub.io))

### Installation

1. Clone the repository.
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file in the root directory and add your Finnhub API key:
```
FINNHUB_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── app/                 # Next.js app router pages
├── components/          # Reusable UI components
├── modules/            # Feature modules
│   └── stocks/         # Stock-related components and logic
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── zustand/            # State management store
└── public/             # Static assets
```

## Usage

1. **Search Stocks**: Use the search bar to find stocks by symbol or company name
2. **Add to Favorites**: Click the plus icon to add stocks to your favorites
3. **View Details**: Click on a stock card to see detailed price information
4. **Monitor Changes**: Track price changes with color-coded indicators
5. **View Charts**: Use the TradingView widget for advanced charting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Finnhub.io](https://finnhub.io) for providing the stock market data API
- [TradingView](https://www.tradingview.com) for the charting widget
- [Shadcn UI](https://ui.shadcn.com) for the component library
