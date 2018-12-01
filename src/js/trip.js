var listOfClothes = ["https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear1",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear2",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear3",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear4",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear5",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear6",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear7",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear8",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear9",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear10",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear11"];


var listOfDummies = ["https://dummyimage.com/200x200/123413/ffffff&text=Dummy1",
                      "https://dummyimage.com/200x200/00F3DA/ffffff&text=Dummy2",
                      "https://dummyimage.com/200x200/FF00DA/ffffff&text=Dummy3",
                      "https://dummyimage.com/200x200/FFF300/ffffff&text=Dummy4",
                      "https://dummyimage.com/200x200/55F3DA/ffffff&text=Dummy5",
                      "https://dummyimage.com/200x200/FF55DA/ffffff&text=Dummy6",
                      "https://dummyimage.com/200x200/FFF355/ffffff&text=Dummy7",
                      "https://dummyimage.com/200x200/AAF3DA/ffffff&text=Dummy8",
                      "https://dummyimage.com/200x200/FFAADA/ffffff&text=Dummy9",
                      "https://dummyimage.com/200x200/FFF3AA/ffffff&text=aDummy10",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=aDummy11"];
$(document).ready(function() {
  //Setting the background top image. Should be some country image.
  $('#destinationimg_con').css('background-image', 'url(' + 'https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear' + ')');

  var topcon = $("#top_con");
  var bottomcon = $("#bottom_con");
  var jacketcon = $("#jacket_con");
  M.updateTextFields();

//////////////////////////////////////// ajax functions ////////////////////////////////////////
  $.ajaxSetup({
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });

  console.log(localStorage.getItem('tripID'));

  function getTrip(callback){
    $.ajax({
        type: 'get',
        url: `/api/trips/${localStorage.getItem('tripID')}`,
        success: function(data){
          console.log(data);
          callback(data.trip);
        },
        error: function(e){
            console.log(e.responseText);
            // TODO: Display error to user
        },
        statusCode: {
          404: function() {
            console.log(`No trips found at ${url}`);
          }
        }
    });
  }

  function getArticles(articleCategory, callback) {
    var url;
    if (articleCategory)
      url = `/api/trips/wardrobe/${localStorage.getItem('tripID')}?category=${articleCategory}`
    else
      url = `/api/trips/wardrobe/${localStorage.getItem('tripID')}`

    $.ajax({
      type: 'get',
      url: url,
      success: function(data) {
        console.log(data);
        callback(data);
      },
      error: function(e) {
        console.log(e.responseText);
      },
      statusCode: {
        404: function() {
          console.log(`No articles found at ${url}`);
        }
      }
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////

  function populateTripInfo(trip) {
    // TODO: set trip data, Destination, Bag Size, Check in, Check out
    let thisTrip = trip[0];
    $('#destination_con p').text(`${thisTrip.city}, ${thisTrip.countryName}`);
    $('#bagsize_con p').text(thisTrip.bagSize);
    $('#checkin_con p').text(thisTrip.checkIn);
    $('#checkout_con p').text(thisTrip.checkOut);

    var backgroundStyle = {
      'background-image': `url(/img/city/${thisTrip.city}.jpeg)`
    };
    $('.parallax img').attr('src', `../../img/city/${thisTrip.city}.jpeg`);


  }
  getTrip(populateTripInfo);

  //POPULATE THE TOPS
  function populateTopWear(articles) {
    console.log(articles);
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure col xl3 m4 s6"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', listOfClothes[i]);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', "top" + i);

      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      topcon.append(figure);
    }
  }


  //POPULATE THE BOTTOMS
  function populateBottomWear(articles) {
    console.log(articles);
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure col xl3 m4 s6"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', listOfClothes[i]);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', "bottom" + i);
      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      bottomcon.append(figure);
    }
  }
  //POPULATE THE JACKET AREA WHEN NEEDED
  function populateJacketWear(articles) {
    console.log(articles);
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure col xl3 m4 s6"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', listOfClothes[i]);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', "jacket" + i);

      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      jacketcon.append(figure);
    }
  }

  getArticles('shirt', populateTopWear);
  getArticles('pant', populateBottomWear);
  // getArticles('jacket', populateJacketWear);

//CLOSING ANY OPEN SUBMENU IF YOU CLICK OUTSIDE OF IT
var submenuOpen = 0;
$(document).mousedown(function(e) {
  if (!$('.cloth_figure').is(e.target) // if the target of the click isn't the container...
    &&
    $('.cloth_figure').has(e.target).length === 0 &&
    submenuOpen == 1) // ... nor a descendant of the container
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
      $(this).remove();
      // TODO REMOVE FROM THE DATABASE

    });;
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
    // TODO SEND OLD KEY TO GET A LIST OF CLOTHES.
    // TODO SEND TRIP KEY.

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

});
