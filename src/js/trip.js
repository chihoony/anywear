var listOfClothes = ["https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear1",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear2",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear3",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear4",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear5",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear6",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear7",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear8",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear9",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear10",
                      "https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear11"];

$(document).ready(function() {
  $('#destinationimg_con').css('background-image', 'url(' + 'https://dummyimage.com/200x200/f5c57d/ffffff&text=anyWear' + ')');

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
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>')
      cloth.attr('src', listOfClothes[i]);
      figure.append(cloth);
      bottomcon.append(figure);
    }
  }

  function populateJacketWear() {
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure col xl3 m4 s6"></figure>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>')
      cloth.attr('src', listOfClothes[i]);
      figure.append(cloth);
      jacketcon.append(figure);
    }
  }

  populateTopWear();
  populateBottomWear()
  populateJacketWear();

  $("body").on('click', function() {
    if ($('.overlay_menu').css('display') == 'block') {
      $()
    }
  })
  $('.icon_delete').on('click', function() {
    console.log("hit it");
    $(this).siblings('.overlay_menu').slideToggle(200);
  });
});
