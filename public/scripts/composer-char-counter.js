$(document).ready(function() {

  $("#tweet-text").keyup(function() {
    let charactersRemaining = (140 - Number($(this).val().length));

    if (charactersRemaining < 0) {

      $("#text-counter").attr("class", "counter-red");

    } else {

      $("#text-counter").attr("class", "counter");

    }
    $("#text-counter").val(charactersRemaining);

  });
});
