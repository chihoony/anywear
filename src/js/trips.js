var listOfImgs = ["https://dummyimage.com/200x200/44AA10/fff&text=Img+1",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+2",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+3",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+4",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+5",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+6",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+7",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+8",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+9",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+10",
                      "https://dummyimage.com/200x200/44AA10/fff&text=Img+11"];
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

var nameOfUser = "Group 33"

$(document).ready(function(){
  $('#trips_nav').addClass('active');
  var cardDeck = $('#cardDeck');

  var page_title = $('#page_title');
  page_title.text(nameOfUser + " Trips");

  function populatePage(){
    for (var i = 0; i < listOfImgs.length; i++) {
      var cardCon = $('<div class="col-sm-6"></div>');
      var cardDiv = $('<div id="cardCon" class="card"></div>');
      var cardBody = $('<div class="card-body"></div>');
      var cardTitle = $('<h5 class="card-title"></h5>');
      var cardText = $('<p class="card-text"></p>');

      cardTitle.text(listOfDestinations[i]);
      cardDiv.css('background-image', 'url(' + listOfImgs[i] + ')');

      cardBody.append(cardTitle, cardText);
      cardDiv.append(cardBody);
      cardCon.append(cardDiv);

      cardDeck.append(cardCon);
    }

  }

  populatePage();

})
