const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const cors = require("cors");
const connecttoDb = require("./config/dbHandler");

const adminRoute = require('./routers/adminRoutes');
const clinicalRoute = require('./routers/clinicalCourseRoutes');
const financialRoute = require('./routers/financialsRoutes');
const studentcourseRoute = require('./routers/studentCourseRoutes');
const studentRoute = require('./routers/studentRoutes');
const userLogin = require('./routers/userLoginRoutes');

const app = express();
app.use(cors());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000', // Restrict to your frontend origin
  credentials: true, // Allow credentials like cookies and authorization headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Headers that your frontend will send
}));

// Handle preflight requests
app.options('*', cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(morgan("dev"));

// Connect to the database
connecttoDb();

// All routes for userRouters
app.use('/api/admin', adminRoute);
app.use('/api/clinicalcourse', clinicalRoute);
app.use('/api/financial', financialRoute);
app.use('/api/studentcourse', studentcourseRoute);
app.use('/api/student', studentRoute);
app.use('/api/userLogin', userLogin);

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
