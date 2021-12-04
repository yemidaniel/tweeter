/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  //console.log("document ready");
  
  let escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  let createTweetElement = function(tweetData) {
    let safeUserInput = escape(tweetData.content.text);

    const $tweet = $(`
    <article class="tweet">
      <header>
        <h2><img src="${tweetData.user.avatars}"></i>&nbsp ${tweetData.user.name}</h2>
        <span>${tweetData.user.handle}</span>
      </header>
      <p>${safeUserInput}</p>
      <hr>
      <footer>
        <span>${tweetData.created_at}</span>
        <span>
          <i class="fas fa-retweet"></i>
          &nbsp;
          <i class="fas fa-flag"></i>
          &nbsp;
          <i class="fas fa-heart"></i>
        </span>
      </footer>
    </article>
    `);
  
    return $tweet;
  };
  
  let renderTweets = function(tweets) {
    //console.log("called renderTweets");

    for (let tweet of tweets) {
      const $element = createTweetElement(tweet);
      $('.tweet-container').prepend($element);
    }
  
  };


  let loadTweets = function() {

    $.ajax({url: 'http://127.0.0.1:8080/tweets/', method: 'GET'})
      .then(function(results) {
        // console.log("preparing to load tweets", results);
        renderTweets(results);
      });

  };
  loadTweets();

  
  let loadLatestTweet = function() {
    //console.log('load latest tweet called');
    $.ajax({url: 'http://127.0.0.1:8080/tweets/', method: 'GET'})
      .then(function(results) {
        let lastTweet = [];
        lastTweet.push(results[results.length - 1]);
        renderTweets(lastTweet);
      });

  };


  const $newTweetform = $('#new-tweet-form');
  $newTweetform.submit(function(event) {
    event.preventDefault();

    let min = 0;
    let max = 140;
    let tweetText = document.getElementById("tweet-text").value;

    if (tweetText.length === min) {

      //alert("Tweet content too short. Please enter a message.");
      $("#validation-msg").text("Tweet content too short. Please enter a message.");
      $("#tweet-validation").slideUp();
      $("#tweet-validation").slideDown();

    } else if (tweetText.length > max) {

      //alert(`Tweet content too long. Please limit your message to a maxumum of ${max} characters.`);
      $("#validation-msg").text(`Tweet content too long. Please limit your message to a maxumum of ${max} characters.`);
      $("#tweet-validation").slideUp();
      $("#tweet-validation").slideDown();

    } else {

      $("#tweet-validation").slideUp();
      let theData = $newTweetform.serialize();

      $.ajax({url: "/tweets/", method: 'POST', data: theData })
        .then(function() {
          //console.log(theData);

          // $('.tweet-container').empty();
          // loadTweets();
          loadLatestTweet();
        });
    }


  });

});
