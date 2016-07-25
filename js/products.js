$(document).ready(function() {
    var max = 0;
    $("article.container").each(function(){
      if($(this).height() > max){
        max = $(this).height();
      }
    });

    $("article.container").each(function(){
      $(this).height(max + max * 0.1);
    });
    console.log($("span.glyphicon").css('position'));
});
