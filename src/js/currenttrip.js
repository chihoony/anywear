document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
// var options = {indicators: true};
var instances = M.Carousel.init(elems);
});

$(document).ready(function() {
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

    var outfit_calendar_con = $("<div id='outfit_calendar_pill'></div>");

  outfit_Section.append(outfit_calendar_con);
  var cardDeck = $("<div class='card-deck'></div>");
  outfit_calendar_con.append(cardDeck);
  outfit_Section.append(outfit_calendar_con);

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

  function createOutfits(dates, listOfLinks) {
    for (var i = 0; i < dates.length; i++) {
      var card = $("<div class='card'></div>");

      var cardBody = $('<div class="card-content"></div>');
      var cardTitle = $('<span class="card-title activator grey-text text-darken-4"></span>');
      var cardText = $('<i class="material-icons right">more_vert</i>');
      cardTitle.append(cardText);
      var cardDate = $('<p></p>');
      cardDate.html(listOfDates[i]);

      // Start adding grid tags
      //
      //
      cardBody.append(cardTitle, cardDate);

      var cardFooter = $('<div class="card-reveal"</div>');
      cardFooter.append(cardExit);
      // Need to add the remove feature here for each clothing article and swapping


      var jacket_img = $("<img class='activator' id='jacket_img' src='' alt-img='' />");
      jacket_img.attr('src', listOfLinks[i]);
      var top_img = $("<img class='activator' id='top_img' src='' alt-img='' />");
      top_img.attr('src', listOfLinks[i]);
      var bottom_img = $("<img class='activator' id='bottom_img' src='' alt-img='' />");
      bottom_img.attr('src', listOfLinks[i]);

      card.append(jacket_img, top_img, bottom_img, cardBody, cardFooter);
      cardDeck.append(card);
    }
  }

  function createOutfitPill(dates, listOfLinks) {
    for (var i = 0; i < dates.length; i++) {
      var card = $("<div class='card col xl3 l4 m6 s12'></div>");
      var cardWaves = $('<div class="card-image waves-effect waves-block waves-light">');


      var cardBody = $('<div class="card-content"></div>');
      var cardTitle = $('<span class="card-title activator grey-text text-darken-4"></span>');
      var cardText = $('<i class="material-icons right">more_vert</i>');
      cardTitle.append(cardText);
      var cardDate = $('<p></p>');
      cardDate.html(listOfDates[i]);

      cardBody.append(cardTitle, cardDate);



      var cardFooter = $('<div class="card-reveal"</div>');

      var cardExit = $('<i class="card-title material-icons right">close</i>');
      cardFooter.append(cardExit);
      // Need to add the remove feature here for each clothing article and swapping


      var jacket_img = $("<img class='activator' id='jacket_img' src='' alt-img='' />");
      jacket_img.attr('src', listOfLinks[i]);
      var top_img = $("<img class='activator' id='top_img' src='' alt-img='' />");
      top_img.attr('src', listOfLinks[i]);
      var bottom_img = $("<img class='activator' id='bottom_img' src='' alt-img='' />");
      bottom_img.attr('src', listOfLinks[i]);

      card.append(jacket_img, top_img, bottom_img, cardBody, cardFooter);
      cardDeck.append(card);
    }
  }



  createOutfitPill(listOfDates, listOfClothes);


});
