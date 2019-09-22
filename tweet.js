let Twitter = require('twitter');
let config = require('/Users/brandonellis/Documents/Code Projects/twitter_bot/config.js');

let T = new Twitter(config);

$(function(){

    let statusUpdate;

    $("#updateTweet").submit(function(e) {
        statusUpdate = $("#tweetText").val(); 
        //console.log(statusUpdate);
        e.preventDefault();

        let tweet = {
            status: statusUpdate
        }

        console.log(tweet.status);
        
        // T.post('statuses/update', tweet, function(err, data, response) {
        //     if (err) {
        //         console.log(err);
        //     }
        // })

        
    });

    $("#submitTweet").click(function(e) {
        statusUpdate = $("#tweetText").val(); 
        //console.log(statusUpdate);
        e.preventDefault();

        let tweet = {
            status: statusUpdate
        }
        console.log(tweet.status);
        // T.post('statuses/update', tweet, function(err, data, response) {
        //     if (err) {
        //         console.log(err);
        //     }
        // })
        
    });
    
});
        

        

