var bagSizes = ["20-30 L",
                "35-40 L",
                "40-45 L",
                "45-50 L",
                "50-65 L",
                "65-75 L",
                "75-120 L"]

var bagImages = ["https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff",
                "https://dummyimage.com/200x200/444400/fff"]

var bagDescription = ["Small<br/>Daypacks",
                "Medium<br/>Rucksack",
                "Cabin<br/>Suitcase",
                "Large Cabin<br/>Suitcase",
                "Large<br/>Rucksacks",
                "Medium<br/>Suitcase",
                "Large<br/>Suitcase"]

//used to create a loading bar
// will probably add functionality that checks if the last element was created
// but for now it only uses time. (which is fine for this scope)
$(function() {
  $("#overlay").fadeOut('2000', function() {
    // $(".content").fadeIn(1000);
  });
})

// PAGE IS FULLY LOADED
$(document).ready(function() {
  $('#new_trip_nav').addClass('active');
  var bag_container = $('#bag_container');

  function setBaglist() {
    for (var i = 0; i < bagSizes.length; i++) {
      var cardcon = $("<div class='card' style='width:10rem;'></div>");
      var cardbody = $("<div class='card-body'></div>");
      var cardimg = $('<img class="card-img-top" src="https://dummyimage.com/200x200/444400/fff" alt="Bag image">');
      var cardtitle = $('<h5 class="card-title"></h5>');
      var cardtext = $('<p class="card-text"></p>');

      cardcon.attr('data-value', bagSizes[i]);
      cardimg.attr('src', bagImages[i]);
      cardtitle.html(bagSizes[i]);
      cardtext.html(bagDescription[i]);
      cardbody.append(cardimg, cardtitle, cardtext);
      cardcon.append(cardbody);
      bag_container.append(cardcon);
    }

  }
  setBaglist();

  $('.card').on('click', function() {
    var size = $(this).data('value');
    $('#bag_size_input').val(size);
    $('.card').css('border', '');
    $('.card').css('box-shadow', '');
    $(this).css("border", "1px solid rgb(33, 148, 213)");
    $(this).css("box-shadow", "0 0 3px rgb(33, 148, 213)");
  })



})

function showBagSelection(x) {
  $('#bag_container').css('visibility', 'visible');
  $('#bag_container').animate({opacity: 1}, 300);

};

function hideBagSelection(x) {
  $('#bag_container').animate({opacity: 0, visibility: 'hidden'}, 300);
}
