
$(function() {
  $('.carousel').carousel({
    interval: false
  });
  $('.search-icon').on('click',function() {
    $('.main-menu .input-group').slideToggle();
  });
});
