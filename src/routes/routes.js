var express = require("express");
var router = express.Router();

const movies = require('../controller/movies');

router.get("/", (req, res) => {
  res.send("api online");
});

router.get("/movies/list/:type", movies.list_type )
router.get("/movies/getInfo/:movieId", movies.get_movie )
module.exports = router;
