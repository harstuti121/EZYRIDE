import express from 'express';
import mysql from 'mysql2/promise'; // Use mysql2/promise for async/await
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import session from'express-session';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());

app.use(cors({
  origin: process.env.ORIGIN, // Allow only specific frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
  credentials: true // Enable cookies and other credentials
}));
app.use(cookieParser());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'vrms', // Replace with your DB name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check Database Connection
pool.getConnection()
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(403).json({ message: 'Authentication required' });
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

// Customer Login Route
app.post('/customer_login', async (req, res) => {
  const {c_no, c_password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ? AND c_password = ?', [c_no, c_password]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    console.log(user)
    const token = jwt.sign({ c_no: user.c_no, c_name: user.c_name }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.status(200).json({ message: 'Login successful', user: { name: user.c_name } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Customer Register Route
app.post('/customer_register', async (req, res) => {
  const { c_no, c_name, c_aadhar, c_lic_no, c_DOB, c_state, c_city, c_street, c_pin, c_email, c_gender, c_password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM customer WHERE c_no = ?', [c_no]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await pool.query(
      'INSERT INTO customer (c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [c_no, c_name, c_lic_no, c_DOB, c_aadhar, c_email, c_state, c_city, c_street, c_pin, c_gender, c_password]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/owner_login', async (req, res) => {
  const { number, password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ? AND o_password = ?', [number, password]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = rows[0];
    const token = jwt.sign({ o_no: user.o_no, o_name: user.o_name }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Owner Register Route
app.post('/owner_register', async (req, res) => {
  const { o_no, o_name, o_aadhar, o_DOB, o_state, o_city, o_street, o_pin, o_email, o_gender, o_password } = req.body;

  try {
    const [rows] = await pool.query('SELECT * FROM owner WHERE o_no = ?', [o_no]);
    if (rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    await pool.query(
      'INSERT INTO owner (o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [o_no, o_name, o_DOB, o_aadhar, o_email, o_state, o_city, o_street, o_pin, o_gender, o_password]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//get all the data of vehicle
app.get('/vehicles', async (req, res) => {
    try {
        // Extract query parameters from the request
        const { category, color, price_min, driver_required } = req.query;

        // Start building the SQL query with basic vehicle selection and include owner address
        let sqlQuery = `
            SELECT v.v_insurance, v.v_name, v.v_type, v.v_rto, v.v_color, v.v_mileage, v.v_engine_type, v.o_no, v.v_image, o.o_street
            FROM vehicle v
            JOIN owner o ON v.o_no = o.o_no
            WHERE o.o_no IN (SELECT DISTINCT d.o_no FROM driver d)
        `;

        // Dynamically add conditions based on the query parameters
        const conditions = [];
        const queryParams = [];

        if (category) {
            conditions.push(`(v.v_type = ? OR ? IS NULL)`);
            queryParams.push(category, category);
        }
        if (color) {
            conditions.push(`(v.v_color = ? OR ? IS NULL)`);
            queryParams.push(color, color);
        }
        if (price_min) {
            conditions.push(`(v.v_pay >= ? OR ? IS NULL)`);
            queryParams.push(price_min, price_min);
        }
        if (driver_required) {
            if (driver_required === 'yes') {
                conditions.push(`(o.o_no IN (SELECT DISTINCT d.o_no FROM driver d))`);
            } else {
                conditions.push(`(o.o_no NOT IN (SELECT DISTINCT d.o_no FROM driver d))`);
            }
        }

        // Append the conditions to the base query if any
        if (conditions.length > 0) {
            sqlQuery += ` AND ${conditions.join(' AND ')}`;
        }

        // Execute the query with parameters
        const [rows] = await pool.execute(sqlQuery, queryParams);

        // Send the response with the filtered vehicles
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        res.status(500).json({ message: 'Error fetching vehicles' });
    }
});


//to get the allot driver 



// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
