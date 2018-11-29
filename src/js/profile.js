$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'x-auth-token': localStorage.getItem('token')
        }
    });

    //When user wants to change photo
    $('#profilePhoto').hover(function() {
        $("#profilePhotoEdit").show();
        $("#profilePhotoEdit").css("display", "flex");
    });

    $('#profilePhotoEdit').mouseout(function() {
        $("#profilePhotoEdit").hide();
    });

    // $('#profilePhotoEdit').click( function() {
    //     $('#photoUploader').click();
    // });

    //When user clicks 'age'
    $('#ageDisplay').on('click', function() {
        $("#age_form").show();
        $("#ageDisplay").hide();
    });
    $('#ageEditButton').on('click', function() {
        $("#age_form").hide();
        $("#ageDisplay").show();
    })


    //When user clicks 'age'
    $('#genderDisplay').on('click', function() {
        $("#gender_form").show();
        $("#genderDisplay").hide();
    });
    $('#genderEditButton').on('click', function() {
        $("#gender_form").hide();
        $("#genderDisplay").show();
    });




    function getUserInfo(callback) {
        $.ajax({
            type: 'get',
            url: '/api/users/me',
            success: function(data) {
                console.log(data.user);
                callback(data.user)
            },
            error: function(e) {
                console.log(e.responseText);
                callback("Unknown");
            }
        })
    }

    // PROFILE WITH THE USERS NAME
    function setProfileInfo(user) {
        let userNameDisplay = $('#userNameDisplay');
        userNameDisplay.text(user.username);

        let emailDisplay = $('#emailDisplay');
        emailDisplay.text(user.email);

        let ageDisplay = $('#ageDisplay');
        ageDisplay.text(user.age);

                let age= $('#age');
                ageDisplay.text(user.age);
        let genderDisplay = $('#genderDisplay');

        if (user.gender == 'f') {
            genderDisplay.text('Female');
        } else if (user.gender == 'm') {
            genderDisplay.text('Male')
        }


    }
    getUserInfo(setProfileInfo);


});
