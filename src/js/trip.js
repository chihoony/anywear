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

$(document).ready(function() {
  $('#destinationimg_con').css('background-image', 'url(' + 'https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear' + ')');

  var topcon = $("#top_con");
  var bottomcon = $("#bottom_con");
  var jacketcon = $("#jacket_con");

  function populateTopWear() {
    // <figure class="cloth_figure col xl3 m4 s6">
    //   <div class="cloth_img_con">
    //     <img class="cloth_img" src="https://dummyimage.com/200x200/aaaaaa/ffffff&text=test" alt"no image"/>
    //     <i class="icon_delete material-icons">more_vert</i>
    //   </div>
    // </figure>
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
      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      topcon.append(figure);
    }
  }



  function populateBottomWear() {
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
      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      bottomcon.append(figure);
    }
  }

  function populateJacketWear() {
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
      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      jacketcon.append(figure);
    }
  }

  populateTopWear();
  populateBottomWear()
  populateJacketWear();

  var submenuOpen = 0;
  //CLOSING THE ANY OPEN SUBMENU IF YOU CLICK OUTSIDE OF IT
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
    console.log("Clicked delete icon");
    $(this).siblings('.overlay_menu').slideToggle(200);
    submenuOpen = 1;
  });

  //REMOVING A PIECE OF CLOTH
  $('.overlay_bottom').on('click', function() {
    $(this).parents('.cloth_figure').remove();
  })
});
