# Audio Sync

Audio Sync is a web application that allows synchronized audio playback across multiple devices using WebSockets.

## Project Structure

```
.gitignore
backend/
    app.js
    package.json
    server.js
    websocket.js
frontend/
    .gitignore
    package.json
    public/
        index.html
    README.md
    src/
        App.css
        App.js
        components/
            DeviceDiscovery.js
            Player.js
        index.css
        index.js
        utils/
            sync.js
README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository:
    ```sh
    git clone https://github.com/vikash-kushwah/Audio-sync.git
    cd audio-sync
    ```

2. Install dependencies for the backend:
    ```sh
    cd backend
    npm install
    ```

3. Install dependencies for the frontend:
    ```sh
    cd ../frontend
    npm install
    ```

### Running the Application

1. Start the backend server:
    ```sh
    cd backend
    node server.js
    ```

2. Start the frontend development server:
    ```sh
    cd ../frontend
    npm start
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

- The application will discover devices and allow synchronized audio playback.
- Use the player controls to play, pause, and seek the audio.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

