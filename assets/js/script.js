$(function(){
  var nb = 0;
  $('#plus').click(function(){
    nb += 1;
    $('#text').val(nb);
  });

  $('#moins').click(function(){
    nb -= 1;
    $('#text').val(nb);
  });

});
