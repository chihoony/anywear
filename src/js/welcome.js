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


});