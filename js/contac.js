


function checkName(input){

    return isLetter(input[0]);
    function isLetter(c) {
      if(c){
        return c.toLowerCase() != c.toUpperCase();
      }
      return false;
    }
}

$(document).ready(function(){
  $("#submit").click(function(event){
    var name,lastname,number,email,message;
    name = $("#name").val();
    lastname = $("#lastaname").val();
    email = $("#email").val();
    number = $("#number").val();
    message = $("#message").val();
    console.log(name + " " + lastname + " " + number + " " + email + " " + message);
    if(!checkName(name)){
      $("form").addClass('has-error');
    }
    event.preventDefault();
  });
  $("input").keypress(function(){
    $("form").removeClass('has-error');
  });
});
