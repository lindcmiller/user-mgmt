$(document).ready(function(){

  var users = [];

  $(".userFields").submit(function(e) {
    e.preventDefault();

    var userInput = {
      firstName: $(".firstName").val(),
      lastName: $(".lastName").val(),
      email: $(".email").val()
    };

    users.push(userInput);

$(".userList").html(users.map(function(user) {
  return "<li>" + user.firstName + " " + user.lastName + " : " + user.email + "</li>";

}));

$(".userFields").children('input').val('');

  });



$(document).on('click','.user', function() {
$(this).remove(); x--;
 });

});
