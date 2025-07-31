# Real-Time Commerce

This project demonstrates a minimal real-time order system using React, Node.js and Socket.io. It is intended as a reference implementation for the Beeyond tech assignment.

## Architecture

```
+------------+      WebSocket/HTTP      +------------+
|  Frontend  | <----------------------> |  Backend   |
+------------+                          +------------+
```

- **Frontend**: React app served via Nginx.
- **Backend**: Node.js Express API with Socket.io.
- **Docker Compose** orchestrates the services.

## Stack

- Node.js + Express
- React.js
- Socket.io
- Docker & Docker Compose

## Folder Structure

- `backend/` - Express API and WebSocket server
- `frontend/` - React application
- `docker-compose.yml` - development orchestration

## Setup

```bash
# clone repository
git clone <repo-url>
cd real-time-commerce

# copy environment variables
cp backend/.env.example backend/.env

# start services
docker-compose up --build
```

The frontend will be available on <http://localhost:3000> and the backend API on <http://localhost:4000>.

## Deployment Notes

Use a VM (AWS EC2, DigitalOcean, etc.) and install Docker. Clone this repository and run `docker-compose up -d` to start the services. Configure Nginx as a reverse proxy if hosting multiple services on the same VM.
