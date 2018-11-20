var listOfImgs = ["https://dummyimage.com/200x200/FFF3DA/fff&text=Img+1",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+2",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+3",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+4",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+5",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+6",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+7",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+8",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+9",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+10",
                      "https://dummyimage.com/200x200/FFF3DA/fff&text=Img+11"];

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

var listOfDates = ["Date1",
                  "Date2",
                  "Date3",
                  "Date4",
                  "Date5",
                  "Date6",
                  "Date7",
                  "Date8",
                  "Date9",
                  "Date10",
                  "Date11"];

var nameOfUser = "Group 33"

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
      var tripDescription = $('<p class="white-text trip_description"></p>');

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

      tripBackgroundCon.append(icon, tripTitle, tripDescription);
      tripCon.append(tripBackgroundCon, overlayMenu);
      tripTitle.html(listOfDestinations[i]);
      tripDescription.html(listOfDates[i]);
      var backgroundStyle = {'background-image': 'url(' + '\"' + listOfImgs[i] + '\"'+ ')'}
      tripCon.css(backgroundStyle);

      tripContainer.append(tripCon);

  }
}

  populatePage();



  //OPENING THE SUBMENU FOR A PIECE OF CLOTH
  $('.icon_delete').on('click', function() {
    if ($(this).parent().parent().children('.overlay_menu').css('display') == "none") {
      $('.overlay_menu').slideUp(200);
    }
    $(this).parent().parent().children('.overlay_menu').slideToggle(200);
    submenuOpen = 1;
  });

  //REMOVING A PIECE OF CLOTH
  $('.overlay_bottom').on('click', function() {
    // TODO: Provide a warning if you try to remove.
    $(this).parent().parent().parent().fadeOut('200', function() {
      $(this).parent().parent().parent().remove(function() {
        // TODO : REMOVE FROM DATABASE
      });

    });;
  });

  //SWAPPING A PIECE OF CLOTH
  $('.overlay_top').on('click', function() {
    // TODO: POP up an overlay of all the clothes in the same vein
    // if a swap does happen, then remove the previous and add the new one.
    // all you have to do is change the src for now with jquery
    // (the database will handle the rest when you reload the page)
    // post remove and post new cloth
    $(this).parents('.cloth_figure').fadeOut('200', function() {
      $(this).parents('.cloth_figure').remove(function() {
        // TODO : REMOVE FROM DATABASE
      });

    });;
  });
})
