$(document).ready(function() {

    $("#signInMoment").hide();
    $("#signUpMoment").hide();
    $("#buttonIn").click(function(event) {
        event.preventDefault();
        $("#welcomeMoment").hide();
        $("#signInMoment").show();
    });

    $("#buttonUp").click(function() {
        $("#welcomeMoment").hide();
        $("#signUpMoment").show();
    });
    $("#buttonUp1").click(function() {
        $("#signInMoment").hide();
        $("#signUpMoment").show();
    });

    $("#backToWelcom1").click(function() {
        $("#welcomeMoment").show();
        $("#signInMoment").hide();
    });

    $("#backToWelcom2").click(function() {
        $("#welcomeMoment").show();
        $("#signUpMoment").hide();
    });

    var tooltips = $("[title]").tooltip({
        position: {
            my: "left top",
            at: "right+5 top-5",
            collision: "none"
        }
    });
    M.AutoInit();

    // $('select').formSelect();

    // $("#uploadPhoto1").click(function() {
    //     $("#uploadPhoto").click();
    // });
    //
    //
    //
    // var inputs = document.querySelectorAll('#uploadPhoto');
    // Array.prototype.forEach.call(inputs, function(input) {
    //     var label = input.nextElementSibling,
    //         labelVal = label.innerHTML;
    //
    //     input.addEventListener('change', function(e) {
    //         var fileName = e.target.value.split('\\').pop();
    //
    //         if (fileName)
    //             label.innerHTML = fileName;
    //         else
    //             label.innerHTML = labelVal;
    //     });
    //
    //
    // });

});
