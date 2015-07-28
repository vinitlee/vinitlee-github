Math.bound = function(n,a,b) {
  return Math.min(Math.max(n,a),b);
};

$(function() {
  fade = function() {
    $.each($('.content > *'),function(i,e) {
      e = $(e);
      var o = (e.position().top-$(window).scrollTop())/$(window).height();
      o = Math.bound((1-o)*4-1.5,0,1);
      console.log(Math.round(100-o*100));
      e.css('color','hsl(156,100%,'+Math.round(50+o*50)+'%)');
    });
  };

  fade();
  $(document).scroll(function(e) {
    fade();
  });
});