/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

let createTweetElement = function(tweetData) {

  const $tweet = $(`
  <article class="tweet">
    <header>
      <h2><img src="${tweetData.user.avatars}"></i>&nbsp ${tweetData.user.name}</h2>
      <span>${tweetData.user.handle}</span>
    </header>
    <p>${tweetData.content.text}</p>
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

  // console.log('testing call to createTweetElement');

  return $tweet;
};

let createTweetElementTest = function() {

  const tweetData = {
    "user": {
      "name": "Newton ABC",
      "avatars": "images/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const $tweet = createTweetElement(tweetData);

  return $tweet;
};


$(document).ready(function() {

  // console.log('client.js: page loaded!!!');
  // console.log(createTweetElementTest());

  $('.tweet-container').append(createTweetElementTest());

});

