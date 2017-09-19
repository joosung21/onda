$( document ).ready(function() {

  // Top Nav Active
  $('nav > a').each(function(){
    var thisPage = $('body').attr('name');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');      
    }
  });

});