Math.bound = function(n,a,b) {
  return Math.min(Math.max(n,a),b);
};

$(function() {
  fade = function() {
    $.each($('.content > *'),function(i,e) {
      e = $(e);
      var o = (e.position().top-$(window).scrollTop())/$(window).height();
      o = 1-o;
      o -= 0.6;
      o *= 20;
      // o = o>=0.6?1:0;
      // o *= 5;
      // o -= 0.4;
      o = Math.bound(o,0,1)
      console.log(Math.round(100-o*100));
      e.css('color','hsl(156,100%,'+Math.round(50+o*50)+'%)');
    });
  };

  fade();
  $(document).scroll(function(e) {
    fade();
  });
});