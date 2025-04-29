# TON Telegram Mini App

A Telegram Mini App built with React, TypeScript, and Vite that integrates with the TON blockchain. This app allows users to check the balance of any TON wallet address.

## Features

- TypeScript support for better type safety
- Tailwind CSS for modern UI design
- Telegram WebApp SDK integration
- TON blockchain connection via TON Center API
- Wallet balance checking functionality
- Responsive and user-friendly interface

## Technologies Used

- React + TypeScript
- Vite
- Tailwind CSS
- Telegram WebApp SDK (@twa-dev/sdk)
- TON Center API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/tomato2kx/MiniappTele.git
   cd MiniappTele
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173)

## Usage

1. Enter a TON wallet address in the input field
2. Click the "Connect to TON" button
3. View the wallet balance displayed below

## Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory, ready to be deployed to your hosting service of choice.

## License

MIT
