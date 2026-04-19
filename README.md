# SCA Hello World CI/CD Project

## Overview
This project demonstrates a complete DevOps workflow involving:
- A Node.js web application
- Docker containerization using Docker Desktop
- CI/CD pipeline using GitHub Actions
- Automated deployment to Docker Hub

The application has been enhanced beyond a basic Hello World service to include multiple API routes and system information endpoints.

---

## Author
**Name:** Francis  
**Docker Hub Username:** vick  

---

## Application Description

This is a lightweight Node.js HTTP server that provides JSON-based responses for different routes.

### Available Endpoints:

 Route      | Description                     
------------|---------------------------------
 `/`        | Welcome message + available routes
 `/health`  | Service health check            
 `/info`    | System and runtime information  

---

## Sample Response

### `/info`
```json
{
  "message": "Hello from CI/CD Dockerized App",
  "status": "running",
  "timestamp": "2026-04-19T12:00:00.000Z",
  "hostname": "container-host",
  "platform": "linux",
  "uptime": "120 seconds",
  "memory": {
    "free": "512 MB",
    "total": "2048 MB"
  }
}
Tech Stack
Node.js
Docker
GitHub Actions (CI/CD)
Docker Hub
Dockerization
Build Image
docker build -t vickogwa/sca_hello_world .
Run Container
docker run -p 3005:3000 vickogwa/sca_hello_world
Access Application
http://localhost:3005
CI/CD Pipeline

This project uses GitHub Actions to automate:

Checkout code
Build Docker image
Authenticate with Docker Hub
Push image to registry
Workflow File
.github/workflows/docker.yml
Docker Hub Repository

Your image is available here:

https://hub.docker.com/r/vickogwa/sca_hello_world
GitHub Secrets Required

To run CI/CD successfully, the following secrets are configured:

DOCKER_USERNAME → vickogwa
DOCKER_PASSWORD → Docker Hub Personal Access Token (Write enabled)
Project Structure
SCA_HELLO_WORLD/
│
├── app.js
├── package.json
├── Dockerfile
├── README.md
└── .github/
    └── workflows/
        └── docker.yml
CI/CD Flow
Code Push → GitHub Actions → Docker Build → Docker Hub Push
Key Learning Outcomes
Containerizing applications with Docker Desktop
Building CI/CD pipelines using GitHub Actions
Managing secrets securely in GitHub
Deploying images to Docker Hub automatically
Creating lightweight production-style Node.js APIs
Author Note

This project was built as part of a DevOps learning journey focused on CI/CD automation and containerization best practices.
