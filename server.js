const express = require('express');
//const fs = require('fs');
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');
//const db = require('./db/db.json')



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



 app.use("/api", apiRoute)
 app.use("/", htmlRoute)



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);