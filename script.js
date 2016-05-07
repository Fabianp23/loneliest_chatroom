$(document).ready(function(){

  function sendMethod(){
    var inputText = $("#new-message-body").val();

    var getDate = new Date;
    var timeStampInHours = getDate.getHours()
    function timeFixer(t){
      if (t >= 12 ) {
        return t - 12 + ": " + getDate.getMinutes() + "pm";
      } else {
        return t + ": " + getDate.getMinutes() + "am";
      };
    }

    var newMessage = "<li class='message'>";
        newMessage += "<a class='delete' href='#'>Delete</a>";
        newMessage += "<h3 class='author'>Me</h3>";
        newMessage += "<p class='new-message-body'>";
        newMessage += inputText;
        newMessage += "</p>";
        newMessage += "<span class=timestamp>"
        newMessage += timeFixer(timeStampInHours);
        newMessage += "</span";
        newMessage += "</li>";

    $('#conversation').append(newMessage)
      // console.log("Message Sent");
    $('.delete').on('click', function(){
      // console.log("x(button) is click-able");
      $(this).parent().remove();
      // console.log("message was deleted");
    });
  }

  $("#new-message-button").on('click', function(){
    sendMethod();
  });

  $("#new-message-body").keypress(function(e) {
    if (e.which == 13) {
      sendMethod();
    }
  });

});
