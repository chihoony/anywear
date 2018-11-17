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
      tripBackgroundCon.append(tripTitle, tripDescription);
      tripCon.append(tripBackgroundCon);
      tripTitle.html(listOfDestinations[i]);
      tripDescription.html(listOfDates[i]);
      var backgroundStyle = {'background-image': 'url(' + '\"' + listOfImgs[i] + '\"'+ ')'}
      tripCon.css(backgroundStyle);

      tripContainer.append(tripCon);

  }
}

  populatePage();

})
