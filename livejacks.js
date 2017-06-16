	$(window).scroll(function(){
		var jarak=$(this).scrollTop();

	if (jarak > $('.menu1').offset().top -1) {
		$('.menu').addClass('nempel');
	}
	if (jarak > $('.menu1').offset().top -1) {
		$('.iklan2').addClass('muncul');
	}
	if (jarak < $('.menu1').offset().top -1) {
		$('.menu').removeClass('nempel');
	}
	if (jarak < $('.menu1').offset().top -1) {
		$('.iklan2').removeClass('muncul');
	}
	if (jarak > $('.menu1').offset().top -1) {
		$('.sosmed').addClass('muncul');
	}
	if (jarak < $('.menu1').offset().top -1) {
		$('.sosmed').removeClass('muncul');
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
