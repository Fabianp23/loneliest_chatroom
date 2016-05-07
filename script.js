$(document).ready(function(){

  $("#new-message-button").on('click', function(){
    console.log("The button works");
    $('#conversation').append($("#new-message-body").val());
      console.log("Message Sent");
  })

});
