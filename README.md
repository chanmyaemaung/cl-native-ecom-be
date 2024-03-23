# CL ECOM BE API

The CL ECOM BE API is a backend application built using Node.js. It serves as the backend for the CL ECOM, providing a RESTful API for managing and retrieving data related to the e-commerce platform and just use for React Native E-commerce App.

## Features

- User authentication and authorization
- Product management (CRUD operations)
- Order management (CRUD operations)
- Cart management (CRUD operations)
- Payment integration
- Email notifications

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Refresh Tokens (for token renewal)
- Stripe (Payment integration) Or Add custom payment gateway
- Nodemailer (Email notifications)

## Getting Started

To get started with the CL ECOM BE API, follow these steps:

1. Clone the repository: `git clone https://github.com/chanmyaemaung/cl-native-ecom-be.git`
2. Install dependencies: `npm install` or `pnpm install`
3. Set up environment variables (e.g., database connection string, JWT secret, Stripe API keys)
4. Start the server: `npm run dev` or `pnpm run dev` for development mode or `npm start` or `pnpm start` for production mode
5. The server should now be running on `http://localhost:8000`

## API Documentation

For detailed information on the available API endpoints and how to use them, refer to the [API documentation](/docs/api.md).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
