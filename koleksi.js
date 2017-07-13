$(document).ready(function(){ 
 $(&#39;#resp-menu&#39;).on(&#39;click&#39;, function(e) {
  e.preventDefault();
  $(&#39;.menu&#39;).slideToggle();
 });
 
 $(window).resize(function(){
  var w = $(window).width();
  if(w &gt; 767 &amp;&amp; menu.is(&#39;:hidden&#39;)) {
   menu.removeAttr(&#39;style&#39;);
  }
 });
});
for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].removeAttribute("src"),imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));console.log(document.body.innerHTML);var images=document.getElementsByTagName("img"),i;for(i=0;i<images.length;i++)images[i].className+=" lazyload";$("iframe[src*='youtube.com']").addClass("lazyload"),$(document).ready(function(){$('iframe[src*="youtube.com"]').wrap('<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0 auto;width:100%"></div>'),$('iframe[src*="youtube.com"]').css({position:"absolute",top:"0",left:"0",width:"100%",height:"100%",border:"0"}),$('iframe[src*="youtube.com"]').each(function(){$(this).attr("data-src",$(this).attr("src")),$(this).removeAttr("src","")})});
$(document).ready(function(){
var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
$(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle);//rgt
});
var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
var newerLinkTitle = $(&quot;a.blog-pager-newer-link:first&quot;).text();
$(&quot;a.blog-pager-newer-link&quot;).text(newerLinkTitle);
});
});
$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$("#totop").fadeIn(100):$("#totop").fadeOut(0)}),$("#totop").click(function(){$("html, body").animate({scrollTop:0},{duration:2e3,easing:"easeInOutExpo"})})});
$("a").filter(function(){return this.hostname&&this.hostname!==location.hostname}).attr('rel', 'nofollow').attr('target', '_blank');
$(function(){if($("#HTML2").length){var o=$("#HTML2"),i=$("#HTML2").offset().top,t=$("#HTML2").height();$(window).scroll(function(){var s=$(".bloginfo").offset().top-t-20,n=$(window).scrollTop(),f=$(window).width();if(i<n&&f>1200?o.css({position:"fixed",top:0,width:"291px"}):o.css("position","static"),s<n){var c=s-n;o.css({top:c})}})}});