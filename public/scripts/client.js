/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "images/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "images/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

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

  return $tweet;
};

let renderTweets = function(tweets) {

  for (let tweet of tweets) {
    const $element = createTweetElement(tweet);
    $('.tweet-container').append($element);
  }

};

$(document).ready(function() {

  renderTweets(data);

});

