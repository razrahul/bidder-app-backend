# Bidder App Backend

This is the backend service for the Bidder App, built with Node.js and MySQL.

## Prerequisites

- Node.js (v14 or higher)
- MySQL

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/bidder-app-backend.git
    cd bidder-app-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    ```

4. Initialize the database:
    ```sh
    npm run init-db
    ```

## Running the Application

To start the server, run:
```sh
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/bids` - Retrieve all bids
- `POST /api/bids` - Create a new bid
- `GET /api/bids/:id` - Retrieve a bid by ID
- `PUT /api/bids/:id` - Update a bid by ID
- `DELETE /api/bids/:id` - Delete a bid by ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.