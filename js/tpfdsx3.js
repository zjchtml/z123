$(function(){
	$("#im").scale("200px","200px");
})
$.fn.extend({
	scale:function(_width,_height){
     this.hover(function(){
      $(this).animate({"width":_width,"height":_height,"left":"50px","top":"50px"},1000);
 },function(){
      $(this).animate({"width":"100px","height":"100px","left":"0","top":"0"},1000);
})
}
})