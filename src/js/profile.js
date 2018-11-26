$(document).ready(function() {
    $.ajaxSetup({
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });

    //When user wants to change photo
    $('#profilePhoto').mouseover(function() {
        $("#profilePhotoEdit").show();
        $("#profilePhotoEdit").css("display","flex");
    });
    $('#profilePhotoEdit').mouseout(function() {
        $("#profilePhotoEdit").hide();
    });

    $('#profilePhotoEdit').click( function() {
        $('#photoUploader').click();
    });

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



});
