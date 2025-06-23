# MLOps Kubernetes Task

This project demonstrates a microservices-based web application with user authentication, containerized using Docker, and orchestrated using Kubernetes on Minikube.

---

## 🧱 Architecture Overview

* **Frontend Service:** React-based UI for user interaction
* **Backend Service:** Node.js/Express API handling user requests and authentication
* **Database Service:** PostgreSQL for storing user data and authentication details

---

## 🔐 User Authentication Module

* **Signup:** Register new users
* **Login:** Authenticate users
* **Forgot Password:** Reset user password via email/token

---

## 🛠 Technology Stack

| Layer    | Technology            |
| -------- | --------------------- |
| Frontend | React                 |
| Backend  | Node.js (Express)     |
| Database | PostgreSQL            |
| Auth     | JWT (JSON Web Tokens) |

---

## 🐳 Containerization (Docker)

* **Dockerfiles:**

  * `frontend/Dockerfile`
  * `backend/Dockerfile`
  * `database/Dockerfile`
* **Docker Compose:**

  * Multi-container setup with `docker-compose.yml`

---

## ☸️ Orchestration & Deployment (Kubernetes)

* **Kubernetes YAMLs:**

  * Deployment and Service files for each microservice
* **Minikube Setup:**

  * Expose frontend via `NodePort` or `LoadBalancer`
* **Pods & Replicas:**

  * Each service runs in pods with **3 replicas**

---

## 🚀 Implementation Steps

1. **Frontend (React)**

   * Create responsive UI components

2. **Backend (Node.js + Express)**

   * Implement APIs: `/signup`, `/login`, `/forgot-password`

3. **Database (PostgreSQL)**

   * Setup schema for users & tokens

4. **Dockerize Each Service**

   * Build separate Dockerfiles
   * Use `docker-compose` for local development

5. **Kubernetes Deployment**

   * Apply YAML files for pods, services, and replicas
   * Deploy on Minikube

6. **Start Minikube & Apply Configs**

   * Build & push Docker images
   * Apply Kubernetes configurations using `kubectl`

---

## 📁 Project Structure (Simplified)

```
mlops-kubernetes-task/
├── backend/
│   └── Dockerfile
├── frontend/
│   └── Dockerfile
├── database/
│   └── init.sql
├── docker-compose.yml
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   └── postgres-deployment.yaml
└── README.md
```
