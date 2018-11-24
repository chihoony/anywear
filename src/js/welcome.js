$(document).ready(function() {

    $("#signInMoment").hide();
    $("#signUpMoment").hide();
    $("#passwordMoment").hide();
    $("#buttonIn").click(function() {
        $("#welcomeMoment").fadeOut();
        $("#signInMoment").fadeIn(500);
    });
    $("#buttonIn1").click(function() {
        $("#passwordMoment").fadeOut();
        $("#signInMoment").fadeIn(500);
    });

    $("#buttonUp").click(function() {
        $("#welcomeMoment").fadeOut();
        $("#signUpMoment").fadeIn(500);
    });
    $("#buttonUp1").click(function() {
        $("#signInMoment").fadeOut();
        $("#signUpMoment").fadeIn(500);
    });
    $("#buttonPassword").click(function() {
        $("#signInMoment").fadeOut();
        $("#passwordMoment").fadeIn(500);
    });

    $("#backToWelcom1").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#signInMoment").fadeOut();
    });

    $("#backToWelcom2").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#signUpMoment").fadeOut();
    });

    $("#backToWelcom3").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#passwordMoment").fadeOut();
    });

    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
    M.AutoInit();



    // SAMPLE AJAX
    // TODO: add post for creating a user, and another one logging in.
    var user = { password: "something", email: "a@gmail.com"};
    console.log(JSON.stringify(user));
    $.ajax( {
        type: "POST",
        // beforeSend: function(request) {
        //   request.setRequestHeader("x-auth-token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmVlMGM5YWM2ZTNmNjNkN2MwY2JiMWQiLCJpYXQiOjE1NDIzMjc1MTd9.J9M-QaTWFmk-yJR2C6kAFi6k06exgQS7l6OEoQj7BpE');
        // },
        processData: 'false',
        url: window.location + "api/auth",
        data: { password: "something", email: "a@gmail.com"},
        success: function() {
          console.log("properly authenticated");
        },
        failure: function() {
          console.log("I didn't work");
        }
      });


});
