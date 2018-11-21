var listOfImgs = ["https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+1",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+2",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+3",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+4",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+5",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+6",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+7",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+8",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+9",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+10",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+11"];

var listOfDestinations = ["Japan",
                          "Canada",
                          "Tokyo, Japan",
                          "Seoul, Korea",
                          "Toronto, Canada",
                          "Florida, USA",
                          "Shanghai, China",
                          "Foz do Iguacu, Brazil",
                          "Sao Paolo, Brazil",
                          "I'm going crazy, MyHead",
                          "Vancouver, Canada"];

var listOfDates = ["October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018",
                  "October 21, 2018, November 30, 2018"];

var listOfBag = ["Bag1",
                  "Bag2",
                  "Bag3",
                  "Bag4",
                  "Bag5",
                  "Bag6",
                  "Bag7",
                  "Bag8",
                  "Bag9",
                  "Bag10",
                  "Bag11"];



var nameOfUser = "Group 33"



$("#check_in_input").datepicker({
  defaultDate: new Date(),
  minDate: new Date(),
  onSelect: function(dateStr){
    $("#check_out_input").datepicker({defaultDate: new Date(dateStr), minDate: new Date(dateStr)})
  }
});

$(document).ready(function(){
  $('#trips_nav').addClass('active');
  var tripContainer = $('#trip_container');

  // NAMING THE TRIPS WITH THE USERS NAME
  var page_title = $('#page_title');
  page_title.text(nameOfUser + " Trips");

// <div class="trip_con">
//   <div class="trip_background_con">
//     <h2 class="trip_title"></h2>
//     <p class="white-text trip_description"></p>
//   </div>
// </div>
  function populatePage(){
    for (var i = 0; i < listOfImgs.length; i++) {
      var tripCon = $('<div class="trip_con"></div>');
      var tripBackgroundCon = $('<div class="trip_background_con"></div>');
      var tripTitle = $('<h5 class="trip_title"></h5>');
      var tripDate = $('<p class="white-text trip_description"></p>');
      var tripBag = $('<p class="white-text trip_description"></p>');

      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Edit</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      tripBackgroundCon.append(icon, tripTitle, tripDate, tripBag);
      tripCon.append(tripBackgroundCon, overlayMenu);
      tripCon.attr("data-key", i);
      tripTitle.html(listOfDestinations[i]);
      tripDate.html(listOfDates[i]);
      tripBag.html(listOfBag[i]);
      var backgroundStyle = {'background-image': 'url(' + '\"' + listOfImgs[i] + '\"'+ ')'}
      tripCon.css(backgroundStyle);
      tripCon.attr('data-key', i);

      tripContainer.append(tripCon);

    }
  }

  populatePage();


  // OPENING A TRIP SO I NEED TO GO TO A DIFFERENT PAGE
  $('.trip_con').on('click', function(e) {
    if($(e.target).hasClass('icon_delete')) {

    } else {
      //GO TO THE SPECIFIED PAGE USING KEY VALUE
      // // TODO post the url with key of trip.
      // var tripKey = $(this).data('key');
      // $.ajax({
      //   type: 'POST',
      //   url: '/....../${tripKey}',
      //   data: ,
      //   success: function(content) {
      //     $()
      //   }
      // });
      // return false;

      window.location='/trip';


    }
  });






  $("#check_in_input").datepicker({
    defaultDate: new Date(),
    minDate: new Date(),
    onSelect: function(dateStr){
      $("#check_out_input").datepicker({defaultDate: new Date(dateStr), setDefaultDate: true, minDate: new Date(dateStr)})
    }
  });

  $("#check_out_input").datepicker({
    defaultDate: new Date(),
    minDate: new Date(),
    onSelect: function(dateStr){
      $("#check_in_input").datepicker({minDate: new Date(), maxDate: new Date(dateStr)})
    }
  });



  //CLOSING ANY OPEN SUBMENU IF YOU CLICK OUTSIDE OF IT
  var submenuOpen = 0;
  $(document).mouseup(function (e) {
     if (!$('.cloth_figure').is(e.target) // if the target of the click isn't the container...
     && $('.cloth_figure').has(e.target).length === 0
      && submenuOpen == 1) // ... nor a descendant of the container
     {
       $('.overlay_menu').slideUp(200);
       submenuOpen = 0;
    }
   });

   var selectedTripKey = 0;
  //OPENING THE SUBMENU FOR A TRIP
  $('.icon_delete').on('click', function() {
    if ($(this).parent().parent().children('.overlay_menu').css('display') == "none") {
      $('.overlay_menu').slideUp(200);
    }
    $(this).parent().parent().children('.overlay_menu').slideToggle(200);
    submenuOpen = 1;
  });



  //REMOVING A TRIP
  $('.overlay_bottom').on('click', function() {
    // TODO: Provide a warning if you try to remove.
    $(this).parent().parent().parent().fadeOut('200', function() {
      $(this).parent().parent().parent().remove(function() {
        // TODO : REMOVE FROM DATABASE
      });
    });;
  });


  //OPENING OVERLAYMENU TO EDIT TRIP
  //this is the old key for swapping.
  $('.overlay_top').on('click', function() {
    // TODO: POP up an overlay of all the clothes in the same vein
    // if a swap does happen, then remove the previous and add the new one.
    // all you have to do is change the src for now with jquery
    // (the database will handle the rest when you reload the page)
    // post remove and post new cloth

    // // TODO post the url with key of trip.
    // var tripKey = $(this).data('key');
    // $.ajax({
    //   type: 'POST',
    //   url: '/....../${tripKey}',
    //   data: ,
    //   success: function(content) {
    //     $()
    //   }
    // });
    // return false;

    //SWAPPED IMAGE
    //OPENING SWAP MENU
    $('#edit-overlay').fadeIn('400', function() {
    });
  });


  //CLOSE OVERLAYSWAP MENU
  $(document).mouseup(function(e) {
      var container = $("#edit-con");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#edit-overlay').fadeOut('400', function() {
        });
      }
  });


  //HERE YOU DO THE ACTUAL SWAP FOR WHEN THE USER CLICKS AN ITEM TO SWAP AND SAVES
  var newSelectedArticle = 0;
  var newArticleSwap = 0;
  $(document).on('click', 'img.warddrobe_img', function(e) {
    console.log($(this));


  });


  // HANDLING THE PUT EDIT TRIP
  $('#buttonNext').on('click', function() {
    console.log('button pressed');
    console.log($('#bag_size_input').val());

    $("#edit-overlay").fadeOut('400', function() {

    });

    //now send the old key and new key to the backend
    // also send the trip id here too.
    // oldArticleKey.send
    // newArticleSwap.send
    // TODO AJAX CALL


  });
});
