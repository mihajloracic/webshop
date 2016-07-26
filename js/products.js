function addToCart(name, quantity,price){
  cart.push({name,quantity,price});
}

var cart = [];
var table = '';
$(document).ready(function() {
    var max = 0;
    $("article.container").each(function(){
      if($(this).height() > max){
        max = $(this).height();
      }
    });

    $(".row.empty").each(function(){
      $(this).height(max - $(this).parent().parent().height());
    });
    //var d = $("input.supply").data('stock');
    var d;
    $(".plus").click(function(event){
      event.preventDefault();
        d = $(this).parent().parent().parent().children('.row').children('input')[0];
        var max = $(d).data('stock');
        var current = $(d).val();
        if(max <= current){

        }else{
          $(d).val(+current + 1);
        }
    });
    $(".minus").click(function(event){
      event.preventDefault();
        d = $(this).parent().parent().parent().children('.row').children('input')[0];
        var max = $(d).data('stock');
        var current = $(d).val();
        if(current <= 0 ){

        }else{
          $(d).val(+current - 1);
        }
    });
    $(".supply").on('input',function(){
      if($(this).val() > $(this).data('stock')){
        $(this).val($(this).data('stock'));
      }
      if($(this).val() < 0){
        $(this).val(0);
      }
    });
    $(".addCart").click(function(event){
      event.preventDefault();
      var productName = $(this).parent().parent().siblings('h3').text();
      d = $(this).parent().parent().parent().children('.row').children('input')[0];
      var productQuantity = $(d).val();
      var max = $(d).data('stock');
      var price = $(this).parent().siblings().children()[0];
      price = $(price).children()[0];
      price = $(price).text();

      if(!productQuantity == 0 && max >= productQuantity){
          addToCart(productName,productQuantity,price);
          $(d).data('stock',max-productQuantity);
          $(cart).each(function(){
            table = '<tr><td>' + this.name + '</td><td>' +  this.quantity + '</td><td>' + this.price +'</td><td>' + this.price * this.quantity +  '</td></tr>';
            console.log(this);
          });
          $(".checkout").append(table);
      }

    });
});
