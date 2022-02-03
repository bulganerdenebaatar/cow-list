const ModelCows = require('../database/index.js');

const GetCows = (req, res) => {
  ModelCows.GetCows((err, cows) => {
    if (err) {
      res.send(err)
    } else {
      res.send(cows)
    }
  })
}

const PostCows = (req, res) => {
  console.log(req.query)
  const cowInfo = req.query
  ModelCows.PostCows(cowInfo, (err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(cowInfo)
    }
  })
}

module.exports = {
  GetCows, PostCows
};