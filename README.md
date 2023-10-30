# Multiplayer Game

Basic multiplayer game made with NodeJS, Express and Socket.IO.
This project uses Factories and Observers with a shared dependencies between Frontend and Backend.

## Standalone

To run this application in your machine you need to have installed:
- NodeJS - v12.X or above
- npm

After ensure this items, you can run:

```bash
npm start
```

## Container
To run this application on a container, you need first to build the image:  
```bash
docker build -t {your_dockerhub_user}/nodejs-multiplayer-game .
```

And after that you need to run:

```bash
docker run -p 80:3000 -d {your_dockerhub_user}/nodejs-multiplayer-game
```
