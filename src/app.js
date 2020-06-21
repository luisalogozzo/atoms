$(document).ready(function() {

  $('.nav-right').on('click', 'button', function(e) {
    $('.button').removeClass('active');
    $(e.target).addClass('active');
  });

});
