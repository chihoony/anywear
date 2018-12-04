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

    //When user clicks 'userName'
    $('#userNameDisplay').on('click', function() {
        $("#userName_form").show();
        $("#userNameDisplay").hide();
    });
    $('#userNameEditButton').on('click', function() {
        $("#userName_form").hide();
        $("#userNameDisplay").show();
    })

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



    //This gets user information
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
        // TODO: change this to actual users profile Image setting. For now it's using the most
        // recent profile pic uploaded to server name default.jpeg (hack)
        let profileImage = $('#profilePhoto');
        profileImage.attr('src', user.profilePic);

        let userNameDisplay = $('#userNameDisplay');
        userNameDisplay.text(user.username);
        userName.value = user.username;

        let emailDisplay = $('#emailDisplay');
        emailDisplay.text(user.email);

        let ageDisplay = $('#ageDisplay');
        ageDisplay.text(user.age);
        age.value = user.age;

        let genderDisplay = $('#genderDisplay');

        if (user.gender == 'f') {
            genderDisplay.text('Female');
            $(".dropdown-content").children()[1].className += " selected";
        } else if (user.gender == 'm') {
            genderDisplay.text('Male');
            $(".dropdown-content").children()[2].className += " selected";
        }
        $(document).ready(function() {
            $('select').formSelect();
        });
        $("#genderSelect").val(user.gender);

    }
    getUserInfo(setProfileInfo);


});
