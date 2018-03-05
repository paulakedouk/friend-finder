var friends = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, response) {
    response.json(friends);
    // console.log(friends);
  });

  app.post('/api/friends', function(req, res) {
    var currentUser = req.body;
    // console.log('currentUser: ', currentUser);

    // Variables to store matched friend data
    var match = {
      name: '',
      photo: '',
      difference: 1000
    };

    var matched;
    var currentScores = currentUser['scores[]'];

    if (friends.length === 0) {
      friends.push(currentUser);
      res.send('Sorry! There is no one else for you to match with!');
    } else {
      for (var i = 0; i < friends.length; i++) {
        var initialDiff = 0;
        var storedScores = friends[i].scores;
        // console.log('friends score: ', friends[i].scores);

        for (var j = 0; j < storedScores.length; j++) {
          // I am not able to convert the string to a number, I tried to use parseInt, but it still not working.
          // console.log('friend score: ', friendsScores);

          initialDiff += Math.abs(parseInt(storedScores[j]) - parseInt(currentScores[j]));
        }

        if (initialDiff < match.difference) {
          match.name = friends[i].name;
          // console.log(friends[i].name);

          match.photo = friends[i].photo;
          match.difference = initialDiff;
          matched = friends[i];
        }
      }
      // console.log(currentUser);
      friends.push(currentUser);

      var result = {
        match: matched,
        user: currentUser
      };
      res.json(result);
    }
  });
};
