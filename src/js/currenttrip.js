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

var listOfNumbers = ["#one!",
                    "#two!",
                    "#three!",
                    "#four!",
                    "#five!",
                    "#six!",
                    "#seven!",
                    "#eight!",
                    "#nine!",
                    "#ten!"];




document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.carousel');
// var options = {indicators: true};
var instances = M.Carousel.init(elems);
});

// variables for weather calling: change to corresponding data.
var city;
var countryCode;

var temp_max, temp_min, current_temp, weather_id;




$(document).ready(function() {
  // Settings CORS proxy.
  $.ajaxPrefilter(function(options) {
    if (options.crossDomain && $.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
     }
  });
  $.ajaxSetup({
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  });

  function getTrip(callback) {
      $.ajax({
        type: 'get',
        url: `/api/trips/${localStorage.getItem('currentTripID')}`,
        success: function(data) {
          console.log('--------------- ')
          console.log(data);

          console.log(callback(data.trip.city, data.trip.countryCode));
          $.getJSON(callback(data.trip.city, data.trip.countryCode), weatherCallBack);
        },
        error: function(e) {
          console.log(e.responseText);
        }
      });
    }

  function getOutfits(callback) {
    $.ajax({
      type: 'get',
      url: `/api/trips/wardrobe/outfits/${localStorage.getItem('currentTripID')}`,
      success: function(data) {
        callback(data);
      },
      error: function(e) {
        console.log(e.responseText);
      }
    });
  }

  // snowStorm needs to be toggled twice to set params to start then stopped.
  // reactives when it actually is snowing using the weather api.
  snowStorm.toggleSnow();
  snowStorm.toggleSnow();
  // Making the url to call the weather api
  function makeTestCall(c, cc) {

    return 'http://api.openweathermap.org/data/2.5/weather?q=' + c + ',' + cc + apiKey + '&units=metric';
  };

  // this function gets the json and you can call the individual values from a key
  function weatherCallBack(weatherData) {
    console.log(weatherData.name);
    console.log(weatherData.sys.country);

    temp_max = weatherData.main.temp_max;
    temp_min = weatherData.main.temp_min;
    current_temp = weatherData.main.temp;
    weather_id = weatherData.weather[0].id;


    // this prints out the current weather (rain, sunny, etc)
    console.log("weather_id: " + weather_id);
    console.log("temp_max: " + temp_max);
    console.log("temp_min: " + temp_min);
    console.log("Current_temp: " + current_temp);

    // sets the background of the carousel to the corresponding weather
    setBackgroundCarousel();

    // sets the temperature for the day.
    $('#temperature').text(`${temp_min}°C - ${temp_max}°C`);
  };

  // Setting the Weather call to the city and country code




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

  function populateCarousel(outfit) {
    console.log("Outfit length: " + outfit.length);
    var carouselCon = $('#carouselID');
    //check current date
    var firstDate = outfit[0].date;
    for (var i = 0; i < outfit.length; i++) {

      console.log("Outfit " + i + ": ");
      console.log(outfit[i])
      var current = outfit[i];
      // check if it's the current date. If it is then enter the statement
      if (current.date == firstDate) {
        var carouselItem = $(`<a class="carousel-item" href="${listOfNumbers[i]}">`);
        if (outfit[i].pieces.length > 2) {
          var imgTop = $('<img/>');
          var imgBottom = $('<img/>');
          var imgJacket = $('<img/>');
          imgTop.attr('src', current.pieces[0].imgLink);
          imgBottom.attr('src', current.pieces[1].imgLink);
          imgJacket.attr('src', current.pieces[2].imgLink);
          carouselItem.append(imgJacket, imgTop, imgBottom);
        } else {
          var imgTop = $('<img/>');
          var imgBottom = $('<img/>');
          imgTop.attr('src', current.pieces[0].imgLink);
          imgBottom.attr('src', current.pieces[1].imgLink);
          carouselItem.append(imgTop, imgBottom);
        }
        carouselCon.append(carouselItem);
      } else if (current.pieces[0].imgLink) {
        createOutfits(current);
      }

    }


    //initializing the carousel after populating it.
    $('.carousel.carousel-slider').carousel({
       indicators: false
    });
    // resizing the carousel to the current height.
    if ($('.carousel-item').first().children('img').length < 3) {
      $('.carousel').css('margin-bottom', '-150px');
    }


  };

  //Creating/displaying a list of outfits
  function createOutfits(outfit) {

    // for (var i = 0; i < dates.length; i++) {
    var card = $("<div class='card'></div>");

    var cardBody = $('<div class="card-content"></div>');
    var cardTitle = $('<span class="card-title activator grey-text text-darken-4"></span>');
    var cardDate = $('<p></p>');

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    cardDate.html((new Date(outfit.date)).toLocaleDateString("en-US", options));

    cardBody.append(cardTitle, cardDate);

    if (outfit.pieces.length > 2) {
      var imgTop = $("<img class='activator' id='top_img' src='' alt-img='' />");
      var imgBottom = $("<img class='activator' id='bottom_img' src='' alt-img='' />");
      var imgJacket = $("<img class='activator' id='jacket_img' src='' alt-img='' />");
      imgTop.attr('src', outfit.pieces[0].imgLink);
      imgBottom.attr('src', outfit.pieces[1].imgLink);
      imgJacket.attr('src', outfit.pieces[2].imgLink);
      card.append(imgJacket, imgTop, imgBottom, cardBody);
    } else {
      var imgTop = $("<img class='activator' id='top_img' src='' alt-img='' />");
      var imgBottom = $("<img class='activator' id='bottom_img' src='' alt-img='' />");
      imgTop.attr('src', outfit.pieces[0].imgLink);
      imgBottom.attr('src', outfit.pieces[1].imgLink);
      card.append(imgTop, imgBottom, cardBody);
    }

    outfit_calendar_con.append(card);
    // }
  }

  // WEATHER Background
  // For Reference:
  // Weather Condition Codes
  // Group 2xx: Thunderstorm | Group 3xx: Drizzle | Group 5xx: Rain | Group 6xx: Snow |
  // Group 7xx: Atmosphere | Group 800: Clear | Group 80x: Clouds
  // TODO: Check with the weather given to give the corresponding image/gif
  function setBackgroundCarousel() {
    let weatherImage;
    if (weather_id < 299) { weatherImage = 'thunder.jpg';}
    else if (weather_id < 399) { weatherImage = 'drizzle.gif';}
    else if (weather_id < 599) { weatherImage = 'rain.gif';}
    else if (weather_id < 699) { weatherImage = 'snow.jpg'; snowStorm.toggleSnow();}
    else if (weather_id < 799) { weatherImage = 'atmosphere.jpg';}
    else if (weather_id == 800){ weatherImage = 'clear.jpg';}
    else if (weather_id == 804){ weatherImage = 'scattered.jpg';}
    else if (weather_id == 804){ weatherImage = 'overcast.jpg';}
    else if (weather_id < 810) { weatherImage = 'cloud.jpg';}
    else { weatherImage = 'other.jpg';}

    $('#carouselBackground').css('background-image', `url(../img/weather/${weatherImage})`);
  };

  getTrip(makeTestCall)

  getOutfits(populateCarousel);

});
