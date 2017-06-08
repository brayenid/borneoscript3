 //Parallax
	$(window).scroll(function(){
		var jarak=$(this).scrollTop();

	if (jarak > $('.menu1').offset().top -1) {
		$('.menu').addClass('nempel');
	}
	if (jarak < $('.menu1').offset().top -1) {
		$('.menu').removeClass('nempel');
	}
});
$(document).ready(function(){ 
 var touch  = $('#resp-menu');
 var menu  = $('.menu');
 
 $(touch).on('click', function(e) {
  e.preventDefault();
  menu.slideToggle();
 });
 
 $(window).resize(function(){
  var w = $(window).width();
  if(w > 767 && menu.is(':hidden')) {
   menu.removeAttr('style');
  }
 });
 
});