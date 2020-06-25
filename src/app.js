$(document).ready(function() {

  $('.nav-right').on('click', 'a', function(e) {
    $('.nav-right a').removeClass('active-header');
    if (!$(e.target).hasClass('button')) {
      $(e.target).addClass('active-header');
    }
  });

  $('.cross').on('click', function() {
    $('.newsletter-box').hide();
  });

  $('.services-row .h4').on('click', function(e) {
    $('.services-row .h4 h4').removeClass('active-main');
    $(this).find('h4').addClass('active-main');
    $('.services-row .h4').siblings('.line').find('svg').removeClass('active-line');
    $(this).siblings('.line').find('svg').addClass('active-line');
  });

  $('.lang a').on('click', function(e) {
    $('.lang a').removeClass('active-lang');
    $(this).addClass('active-lang');
  });

});
