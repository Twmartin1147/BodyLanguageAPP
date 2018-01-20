$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newUser = {
      user_name: $("#burg").val().trim(),
      xxxx: $("[name=dxxxx]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/", {
      type: "POST",
      data: newUser
    }).then(
      function() {
        console.log("created new user");
        // Reload the page to get the updated list
        location.reload();
      })
    });