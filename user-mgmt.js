$(document).ready(function(){

  var users = [];

  $(".userFields").submit(function(e) {
    e.preventDefault();

    // 1. Get the first name
    // 2. Get the last name
    // 3. Get the email
    // 4. Create a "user" object with the first, last, and email values
    // 5. Add the user object to your array of users
    // 6. Render the users array as HTML

    var userInput = {
      firstName: $(".firstName").val(),
      lastName: $(".lastName").val(),
      email: $(".email").val()
    };

    users.push(userInput);

$(".userList").html(users.map(function(user) {
  return "<li>" + user.firstName + user.lastName + user.email + "</li>";
}));

  });


//
//   $(document).on('click','.user', function() {
//      $(this).remove();
//    });


});
