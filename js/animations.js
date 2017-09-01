$(document).ready(function(){


var setupTweets = function(){
  $('.stats').hide();

  $('.tweet').hover(
  function(){$(this).find('.stats').show();},
  function(){$(this).find('.stats').hide();}
  );

  $('.tweet').find('ul, .reply').hide();

  $('.tweet').click(function(){$(this).find('ul, .reply').show();});
}
setupTweets();

$('#tweet-controls').hide();
$('#tweet-content .tweet-compose').click(function(){
  $('#tweet-controls').show('fast', 'linear');
  $(this).css("height", "75px");
});

$('#tweet-content .tweet-compose').on('input', function(){
  var text = $(this);
  var chars = $('#char-count');
  if(text.val().length > 130){
    chars.css("color", "red");
  }else{
    chars.css("color", "black");
  }
  if(text.val().length > 140){
    $('#tweet-submit').prop('disabled', true);
  }else{
    $('#tweet-submit').prop('disabled', false);
  }
  chars.text(140-text.val().length);
});

$('#tweet-submit').click(function(){

    var tweet = '<div class="tweet"><div class="content">' +
    '<img class="avatar" src="img/alagoon.jpg" />'
      + '<strong class="fullname">Your Name Here</strong>'
      + '<span class="username">@YourName</span>'
      + '<p class="tweet-text">' + $('#tweet-content .tweet-compose').val() +
      '</p><div class="tweet-actions">'
        + '<ul><li><span class="icon action-reply"></span> Reply</li>'
        + '<li><span class="icon action-retweet"></span> Retweet</li>'
        +  '<li><span class="icon action-favorite"></span> Favorite</li>'
        + '<li><span class="icon action-more"></span> More</li>'
        + '</ul></div><div class="stats"><div class="retweets">'
        + '<p class="num-retweets">30</p><p>RETWEETS</p>'
        + '</div><div class="favorites"><p class="num-favorites">6</p>'
        +  '<p>FAVORITES</p></div><div class="users-interact"><div>'
        +  '<img src="img/jennyshen.jpg" /><img src="img/damenleeturks.jpg" />'
        +  '</div></div><div class="time">1:04 PM - 19 Sep 13</div>'
        +  '</div><div class="reply"><img class="avatar" src="img/alagoon.jpg" />'
        +  '<textarea class="tweet-compose" placeholder="Reply to @theonion"/>'
        +  '</textarea></div></div></div>)'
  $('#stream').prepend(tweet);
  setupTweets();


});



});
