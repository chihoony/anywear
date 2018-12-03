$(document).ready(() => {
    $('#current').click(navigateOnTrip);

  $.ajaxSetup({
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
});

function navigateOnTrip() {
    $.ajax({
        type: 'get',
        url: '/api/Trips/onTrip',
        success: function(data) {
            console.log("here");
            console.log(JSON.stringify(data));
            if (data.onTrip) {
                localStorage.setItem('currentTripID', data.tripID);
                location.href = '/current';
            } else {
                alert("Not on a trip");
                location.href = '/createtrip';
            }
        },
        error: function(e) {
            console.log(e.responseText);
        }
    });
}

});
{/* <li><a id="createTrip" href="/createtrip">+NewTrip</a></li>
<li><a id="current" href="/current">CurrentTrip</a></li>
<li><a id="allTrips" href="/alltrips">Trips</a></li>
<li><a id="profile" href="/profile">Profile</a></li>
<li><a id="signOut" href="/">SignOut</a></li>
</ul> */}

    //   $("#signIn").on("click", function(e){
    //     e.preventDefault();
    //     $.ajax(
    //         {
    //             type: 'post',
    //             url: '/api/auth',
    //             dataType: 'json',
    //             data: { password: $("#pwdForSignIn").val(), email: $("#emailForSignIn").val() },
    //             success: function(data){
    //                 console.log(data.token);
    //                 localStorage.setItem('token', data.token);
    //                 location.href = '/alltrips';
    //             },
    //             error: function(e){
    //                 console.log(e.responseText);
    //                 alert(e.responseText);
    //             }
    //         }
    //   )}

    //   $("#signedUp").on("click", function(e){
    //     e.preventDefault();
    //     $.ajax(
    //         {
    //             type: 'post',
    //             url: '/api/users',
    //             dataType: 'json',
    //             data: { username: $("#username").val(), password: $("#pwd").val(), email: $("#email").val(), age: $("#age").val(), gender: $("#gender").val() },
    //             success: function(data){

    //                 console.log('Created user at Username: ${data.username} Email: ${data.email}');
    //                 $("#welcomeMoment").fadeIn(500);
    //                 $("#signUpMoment").fadeOut();
    //             },
    //             error: function(e){
    //                 console.log(e.responseText);
    //                 alert(e.responseText);
    //             }
    //         }
    //   )});

