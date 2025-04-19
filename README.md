# Subscription Tracker

A Node.js application to track and manage subscriptions with automated email reminders.

## Features

- User authentication and authorization
- Create, read, update, and delete subscriptions
- Automated email reminders (7, 5, 2, and 1 days before renewal)
- REST API endpoints for all operations
- Workflow integration for scheduled reminders

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with required environment variables (see below)
4. Start development server: `npm run dev`

## Environment Variables

- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `EMAIL_PASSWORD`: Gmail app password for nodemailer
- `UPSTASH_WORKFLOW_TOKEN`: Upstash workflow token
- `SERVER_URL`: Base URL for workflow callbacks

## API Endpoints

### Subscription Routes

- `POST /api/v1/subscriptions`: Create new subscription
- `GET /api/v1/subscriptions`: Get all subscriptions
- `GET /api/v1/subscriptions/:id`: Get subscription details
- `PUT /api/v1/subscriptions/:id`: Update subscription
- `DELETE /api/v1/subscriptions/:id`: Delete subscription
- `POST /api/v1/subscriptions/:id/cancel`: Cancel subscription

### Workflow Route

- `POST /api/v1/workflows/subscription/reminder`: Workflow endpoint for reminders

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- Nodemailer (for email reminders)
- Upstash Workflows (for scheduling)
- Day.js (for date handling)

## License

MIT
