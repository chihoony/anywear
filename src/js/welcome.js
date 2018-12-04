$(document).ready(function() {

    $("#signInMoment").hide();
    $("#signUpMoment").hide();
    $("#passwordMoment").hide();
    $("#buttonIn").click(function() {
        $("#welcomeMoment").hide();
        $("#signInMoment").fadeIn(500);
    });
    $("#buttonIn1").click(function() {
        $("#passwordMoment").hide();
        $("#signInMoment").fadeIn(500);
    });

    $("#buttonUp").click(function() {
        $("#welcomeMoment").hide();
        $("#signUpMoment").fadeIn(500);
    });
    $("#buttonUp1").click(function() {
        $("#signInMoment").hide();
        $("#signUpMoment").fadeIn(500);
    });
    $("#buttonPassword").click(function() {
        $("#signInMoment").hide();
        $("#passwordMoment").fadeIn(500);
    });

    $("#backToWelcom1").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#signInMoment").hide();
    });

    $("#backToWelcom2").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#signUpMoment").hide();
    });

    $("#backToWelcom3").click(function() {
        $("#welcomeMoment").fadeIn(500);
        $("#passwordMoment").hide();
    });

    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
    M.AutoInit();

      $("#signIn").on("click", function(e){
        e.preventDefault();
        $.ajax(
            {
                type: 'post',
                url: '/api/auth',
                dataType: 'json',
                data: { password: $("#pwdForSignIn").val(), email: $("#emailForSignIn").val() },
                success: function(data){
                    console.log(data.token);
                    localStorage.setItem('token', data.token);
                    onTrip(routeIfOnTrip)
                },
                error: function(e){
                    console.log(e.responseText);
                    alert(e.responseText);
                }
            }
      )}
    );

      $("#signedUp").on("click", function(e){

        e.preventDefault();
        var formInput = document.getElementById("profileImg");
        var file = formInput.files[0];
        var formData = new FormData();
        formData.append('profileImg', file);


        var xhr = new XMLHttpRequest();
        $.ajax(
            {
                type: 'post',
                url: '/api/users',
                dataType: 'json',
                // data: { username: $("#username").val(), password: $("#pwd").val(), email: $("#email").val(), age: $("#age").val(), gender: $("#gender").val() },
                data: { username: $("#username").val(), password: $("#pwd").val(), email: $("#email").val(), gender: $("#gender").val() },
                success: function(data){
                  console.log(data.token);
                  console.log(data);
                    console.log('Created user at Username: ${data.username} Email: ${data.email}');
                    $("#welcomeMoment").fadeIn(500);
                    $("#signUpMoment").fadeOut();
                    localStorage.setItem('token', data.token);
                    // Sending profile photo
                    // everything is working, just not getting the token.
                    $.ajax(
                      {
                        type: 'PUT',
                        data: formData,
                        contentType: false,
                        cache: false,
                        processData: false,
                        headers: { 'x-auth-token': data.token },
                        url: '/api/users/setProfileImg',
                        success: function() {
                          console.log("set the image");
                        },
                        error: function() {
                          // console.log(e.responseText);
                          // alert(e.responseText);
                          console.log("error");
                        }

                      }
                    )


                },
                error: function(e){
                    console.log(e.responseText);
                    alert(e.responseText);
                }
            }
      )});

  function onTrip(callback) {
      $.ajax({
          type: 'get',
          url: '/api/trips/onTrip',
          headers:  {'x-auth-token': localStorage.getItem('token') },
          success: function(data) {
            callback(data);
          },
          error: function(e) {
            console.error(e.responseText);
          }
      });
  }

  function routeIfOnTrip(onTripData) {
      if (onTripData.onTrip) {
        console.log("current Trip");
        localStorage.setItem('currentTripID', onTripData.tripID);
        location.href = '/current';
      } else {
        console.log("alltrips");
        location.href = '/alltrips';
      }
  }

  // Currently broken. IT does not set the image after running the ajax post /api/users
  function imageSetter() {


    var formInput = document.getElementById("profileImg");
    var file = formInput.files[0];
    var formData = new FormData();

    formData.append('profileImg', file);

   //  var xhr = new XMLHttpRequest();
   //
   //
   //  // Add any event handlers here...
   //  xhr.open('PUT', '/api/users/setProfileImg', true);
   //  xhr.onload = function(oEvent) {
   //   if (xhr.status == 200) {
   //     alert("Uploaded!");
   //   } else {
   //      alert("Error " + xhr.status + " occurred when trying to upload your file.<br \/>");
   //   }
   // };
   //  xhr.send(FormData);
   //
   //  return false;

    $.ajax(
      {
        headers: { 'x-auth-token': localStorage.getItem('token') },
        type: 'PUT',
        data: formData,
        contentType: false,
        cache: false,
        processData: false,
        url: '/api/users/setProfileImg',
        success: function() {
          console.log("set the image");
        },
        error: function() {
          // console.log(e.responseText);
          // alert(e.responseText);
          console.log("error");
        }

      }
    )
  }




});
