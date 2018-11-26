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

var listOfDates = ["Date 1",
                    "Date 2",
                    "Date 3",
                    "Date 4",
                    "Date 5",
                    "Date 6",
                    "Date 7",
                    "Date 8",
                    "Date 9",
                    "Date 10",
                    "Date 11"];

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
// var options = {indicators: true};
var instances = M.Carousel.init(elems);
});

$(document).ready(function() { 
   $.ajaxSetup({
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });

  M.AutoInit();
  // start carrousel
   $('.carousel.carousel-slider').carousel({
      indicators: false
   });


   // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });

  $('#current_trip_nav').addClass('active');

  var outfit_Section = $('#outfitSection');
  var outfit_calendar_con = $("<div id='outfit_calendar_con'></div>");
  outfit_Section.append(outfit_calendar_con);

  function createOutfits(dates, listOfLinks) {
    for (var i = 0; i < dates.length; i++) {
      var card = $("<div class='card'></div>");


      var cardBody = $('<div class="card-content"></div>');
      var cardTitle = $('<span class="card-title activator grey-text text-darken-4"></span>');
      var cardDate = $('<p></p>');
      cardDate.html(listOfDates[i]);

      cardBody.append(cardTitle, cardDate);
      var jacket_img = $("<img class='activator' id='jacket_img' src='' alt-img='' />");
      jacket_img.attr('src', listOfLinks[i]);

      //JACKET TEST WITHOUT
      var jacket_img = $("<img class='activator' id='jacket_img' src='' alt-img='' />");
      // jacket_img.attr('src', listOfLinks[i]);


      var top_img = $("<img class='activator' id='top_img' src='' alt-img='' />");
      top_img.attr('src', listOfLinks[i]);
      var bottom_img = $("<img class='activator' id='bottom_img' src='' alt-img='' />");
      bottom_img.attr('src', listOfLinks[i]);

      card.append(jacket_img, top_img, bottom_img, cardBody);
      outfit_calendar_con.append(card);
    }
  }

  createOutfits(listOfDates, listOfClothes);

  $('.jacket_img').on('click', )

  if ($('.carousel-item').first().children('img').length < 3) {
    $('.carousel').css('margin-bottom', '-150px');
  }

});
