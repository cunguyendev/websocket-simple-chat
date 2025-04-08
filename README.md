# 🚀 WebSocket - Simple chat

This is a Vite-powered front-end application to make a simple chat with WebSocket

## Tech Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Requirements

- [Node.js](https://nodejs.org/en) (v23 or higher recommended)
- [pnpm](https://pnpm.io/) (v9 or higher recommended)

## Getting Started

Steps to run this app on your local machine

### 1. Clone the repo

```bash
git clone git@github.com:cunguyendev/websocket-simple-chat.git
```

Go to the root of the directory

```bash
cd websocket-simple-chat
```

### 2. Install dependencies

```bash
pnpm install
```

_This command will install the necessary packages for the app, including those inside the `websocket-server` folder._

### 3. Start the development server

Please follow the `.env.example` file to set all the environment variables for the app — for example, for local development

```js
VITE_WEBSOCKET_SERVER=ws://localhost:3000
VITE_DOMAIN_SERVER=http://localhost:3000
```

Start WebSocket server

```bash
pnpm dev-server
```

_The WebSocket server will start at http://localhost:3000 by default_

Start Frontend app

```bash
pnpm dev
```

_The frontend app will start at http://localhost:5173 by default._

📝 Or you can also use this command to start both the front-end app and the WebSocket server simultaneously:

```bash
pnpm dev-both
```

## Quick Demo

Demo page: https://websocket-chat.cunguyen.com

<video src="https://github.com/user-attachments/assets/0eed74c5-0198-45a6-94c8-13c788fa8ac6" autoplay controls>
