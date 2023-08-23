const joke = require('give-me-a-joke');

joke.getRandomJokeOfTheDay(function(joke){
    console.log(joke);
});

