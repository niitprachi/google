$(document).ready(function(){
  $('.google-slider').slick();

  $('.reviews .link').click(function(event) {
    event.preventDefault();

    var videosrc = $(this).data('url');

    $('#myModal').modal('show');
    $('#myModal iframe').attr('src', videosrc);
  });

  $('#myModal button').click(function () {
    $('#myModal iframe').removeAttr('src');
  });


function clickWork(e, thisA) {
  e.preventDefault();
  thisA.hide();
  $('.js-more-video').toggleClass('hide-row');
}


$('.btn-more').click(function(e) {
    var thisA = $(this);
    $('.btn-less').show();
    clickWork(e, thisA);
  });



  $('.btn-less').click(function(e) {
    var thisA = $(this);
    $('.btn-more').show();
    clickWork(e, thisA);
  });


});


