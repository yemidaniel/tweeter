$(document).ready(function() {

  console.log('page loaded!!!');

  // $("sendTweet").click(function() {
  //   console.log("send tweet button clicked!");
  // });

  $("#tweet-text").keyup(function() {
    //console.log("char length:", $(this).val().length);
    //console.log("char length:", $(this));

    let charactersRemaining = (140 - Number($(this).val().length));

    if (charactersRemaining < 0) {
      document.getElementById("text-counter").className = "counter-red";
      //console.log("red", charactersRemaining);
    } else {
      document.getElementById("text-counter").className = "counter";
      //console.log("normal", charactersRemaining);
    };

    document.getElementById("text-counter").innerHTML = charactersRemaining;

    console.log("characters left:", (140 - Number($(this).val().length)));
  });
});
