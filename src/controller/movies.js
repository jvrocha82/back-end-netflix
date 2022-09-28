var movie = require("./temp_list");
class MoviesController{
    async list_type(req, res) {
       let type = req.params.type;
       let currentList = movie.returnList(type)
       return currentList.results.length > 0 ? res.status(200).json(currentList) :  res.status(500).json(currentList)
    }
    async get_movie(req, res){
        let movieId = req.params.movieId;
        let movieInfo = await movie.getMovie(movieId);
        console.log(movieInfo)
        return movieInfo ? res.status(200).send(movieInfo) :  res.status(500).send(movieInfo)
    }
}
module.exports = new MoviesController()