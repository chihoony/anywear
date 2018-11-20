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


    //OPENING THE SUBMENU FOR A PIECE OF CLOTH
    $('.icon_delete').on('click', function() {
      if ($(this).siblings('.overlay_menu').css('display') == "none") {
        $('.icon_delete').siblings('.overlay_menu').slideUp(200);
      }
      $(this).siblings('.overlay_menu').slideToggle(200);
      submenuOpen = 1;
    });

    //REMOVING A PIECE OF CLOTH
    $('.overlay_bottom').on('click', function() {
      // TODO: Provide a warning if you try to remove.
      $(this).parents('.cloth_figure').fadeOut('200', function() {
        $(this).parents('.cloth_figure').remove(function() {
          // TODO : REMOVE FROM DATABASE
        });

      });;
    });

  //OPENING THE SUBMENU FOR A PIECE OF CLOTH
  $('.icon_delete').on('click', function() {
    if ($(this).parent().parent().children('.overlay_menu').css('display') == "none") {
      $('.overlay_menu').slideUp(200);
    }
    $(this).parent().parent().children('.overlay_menu').slideToggle(200);
    submenuOpen = 1;
  });

  //SWAPPING A PIECE OF CLOTH
  //this is the old key for swapping.
  var selectedArticle = 0;
  var oldArticleKey = 0;
  $('.overlay_top').on('click', function() {
    // TODO: POP up an overlay of all the clothes in the same vein
    // if a swap does happen, then remove the previous and add the new one.
    // all you have to do is change the src for now with jquery
    // (the database will handle the rest when you reload the page)
    // post remove and post new cloth
    selectedArticle = $(this).parent().parent().siblings('img');
    oldArticleKey = $(this).parent().parent().siblings('img').data('key');
    console.log(oldArticleKey);
    var imageSrc = $(this).parent().parent().siblings('.cloth_img').attr('src');


    var rightGrid = $('#right-grid');
    // TODO REQUEST THE SERVER TO GIVE YOU A LIST OF AVAILABLE CLOTHES AND ADD TO THE RIGHTGRID
    for (var i = 0; i < listOfDummies.length; i++) {
      var warddrobeCloth = $('<img class="warddrobe_img cloth_img" src="" alt="no image"/>');

      warddrobeCloth.attr('data-key', i);
      warddrobeCloth.attr('src', listOfDummies[i]);
      rightGrid.append(warddrobeCloth);
    }

    //SWAPPED IMAGE
    $('#left-img').attr('src', imageSrc);
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
    newSelectedArticle = $(this);
    newArticleSwap = $(this).data('key');

    $('img.warddrobe_img').removeClass('border-blue');
    $(this).addClass('border-blue');

  });


  // HANDLING THE SUBMIT SWAP CLOTHES REQUEST
  $('#buttonNext').on('click', function() {
    console.log('button pressed');
    selectedArticle.attr('src', newSelectedArticle.attr('src'));
    selectedArticle.data('key', newSelectedArticle.data('key'));

    $("#edit-overlay").fadeOut('400', function() {

    })

    //now send the old key and new key to the backend
    // also send the trip id here too.
    // oldArticleKey.send
    // newArticleSwap.send
    // TODO AJAX CALL


  });
})
