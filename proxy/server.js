const express = require('express');
const interceptor = require('./middleware/interceptor');
const axios =  require('axios');
const app = express();

// Init middleware
app.use(interceptor);


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/api/hubspot/blog-posts', (req, res) => {
  axios
    .get(
      `https://api.hubapi.com/content/api/v2/blog-posts?hapikey=&state=PUBLISHED&offset=${req
        .query.offset}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Proxy server started on port ${PORT}`));