


function checkName(input){

    return isLetter(input[0]);
    function isLetter(c) {
      if(c){
        return c.toLowerCase() != c.toUpperCase();
      }
      return false;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateNumber(number) {
    var re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return re.test(number);
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
    if(!validateEmail(email)){
      $("#errorEmail").css('display','block');
    }
    if(!checkName(name)){
      $("#errorName").css('display','block');
    }
    if(!checkName(lastname)){
      $("#errorLastName").css('display','block');
    }
    if(message.length < 40){
      $("#errorMessage").css('display','block');
    }
    if(!validateNumber(number)){
      $("#errorNumber").css('display','block');
    }
    event.preventDefault();
  });
  $("input").keypress(function(){
    $("form").removeClass('has-error');
    $("#errorEmail").css('display','none');
    $("#errorName").css('display','none');
    $("#errorLastName").css('display','none');
    $("#errorNumber").css('display','none');
    $("#errorMessage").css('display','none');
  });
});
