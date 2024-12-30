const express = require('express');
const { resolve } = require('path');
let { getAllMovies, getMovieById} = require('./movie.js');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.get('/api/movies', (req, res) => {
  let result = getAllMovies();
  res.json(result);
});

app.get('/api/movies/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let result = getMovieById(id);
  res.json(result);
});
app.get('/api/movie-details',(req,res)=>{
  let id=parseInt(req.query.id);
  let result = getMovieById(id);
  res.json(result);
})


module.exports = app;

//app.listen(port);
