$(document).ready(function(){

  $("#new-message-button").on('click', function(){
    console.log("The button works");
    var inputText = $("#new-message-body").val();
    var newMessage = "<li class='message'>";
        newMessage += "<a class='delete' href='#'>Delete</a>";
        newMessage += "<h3 class='author'>Me</h3>";
        newMessage += "<p class='new-message-body'>";
        newMessage += inputText;
        newMessage +="</p>";
        newMessage += "<span class='timestamp'></span";
        newMessage += "</li>";
    $('#conversation').append(newMessage);
      console.log("Message Sent");
    $('.delete').on('click', function(){
      console.log("x(button) is click-able");
      $(this).parent().remove();
      console.log("message was deleted");
    });
  });

  $("#new-message-body").keypress(function(e) {
    var inputText = $("#new-message-body").val();
    var newMessage = "<li class='message'>";
        newMessage += "<a class='delete' href='#'>Delete</a>";
        newMessage += "<h3 class='author'>Me</h3>";
        newMessage += "<p class='new-message-body'>";
        newMessage += inputText;
        newMessage +="</p>";
        newMessage += "<span class='timestamp'></span";
        newMessage += "</li>";
    if (e.which == 13) {
      $('#conversation').append(newMessage);
      console.log("Enter Key Works");
      console.log("Message Sent");
      $('.delete').on('click', function(){
        console.log("x(button) is click-able");
        $(this).parent().remove();
        console.log("message was deleted");
      });
    }
  });




});
