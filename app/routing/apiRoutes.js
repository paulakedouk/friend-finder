var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, response) {
    response.json(friends);
    console.log(friends);
  });

  app.post('/api/friends', function(req, res) {
    var results = req.body;
    console.log('results: ', results);

    results.name = results.name.replace(/\s+/g, '');
    results.photo = results.photo.replace(/\s+/g, '');

    // Variables to store matched friend data
    var matchName = '';
    var matchImage = '';
    var newScores = results.scores;

    var difference = 10000;

    for (var i = 0; i < friends.length; i++) {
      var initialDiff = 0;

      console.log('friends score: ', friends[i].scores);

      for (var j = 0; j < friends[i].length; j++) {
        // console.log('new score: ', newScores[j]);
        //     initialDiff += Math.abs(friends[i].scores[h] - newScores[h]);
      }

      //   if (initialDiff < difference) {
      //     difference = initialDiff;
      //     matchName = friends[i].name;
      //     matchImage = friends[i].photo;
      //   }
    }

    // friends.push(results);
    var result = [friends[0]];
    res.json({
      status: 'OK',
      result
    });
  });
};
