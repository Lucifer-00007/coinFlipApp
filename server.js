const express = require('express');
const path = require('path');
const pool_con = require('./db/connect');
const app = express();
const port = process.env.PORT || 3000;

// Body Parsing Middleware
app.use(express.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for flipping the coin
app.get('/flipcoin', (req, res) => {
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
  res.json({ result });
});


// Define a route for receiving and inserting data
app.post('/api/data', (req, res) => {
  // Access data from the frontend through req.body
  const data = req.body;
  const currentDate = new Date();
  const coin_table = 'coinData';

  // Call the function to insert data into the database
  dbInserter(currentDate.toLocaleString(), data.coinVal, coin_table, (error) => {
    if (error) {
      console.log('Data insertion failed:', error);
      res.status(500).json({ message: 'Data insertion failed' });
    } else {
      console.log('Data inserted successfully!');
      res.json({ message: 'Data received and inserted successfully!', receivedData: data });
    }
  });
});


// Function to insert data into the database
const dbInserter = async (time, val, coin_table, callback) => {
  pool_con.getConnection((err, connection) => {

    // Data insertion query.    
    const insertQuery = `INSERT INTO ${coin_table} (timestamp, coinValue) VALUES ("${time}", "${val}")`;
    connection.query(insertQuery, (error, results) => {
      connection.release(); // Release the connection back to the pool when done

      if (error) {
        // Handle query error
        console.log('Database query error!');
        callback(error);
        return;
      }

      callback(null);
    });
  });
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
