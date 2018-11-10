$(document).ready(function() {
  var outfit_Section = $('#outfitSection');

  var outfit_calendar_con = $("<div id='outfit_calendar_pill'></div>");

  var jacket_img = $("<img id='jacket_img' src='' alt-img='' />");
  jacket_img.attr('src', 'https://dummyimage.com/200x200/44AA10/fff');
  var top_img = $("<img id='top_img' src='' alt-img='' />");
  top_img.attr('src', 'https://dummyimage.com/200x200/10AA44/fff');
  var bottom_img = $("<img id='bottom_img' src='' alt-img='' />");
  bottom_img.attr('src', 'https://dummyimage.com/200x200/aa0000/fff');

  var date_h3 = $("<h3></h3>");
  date_h3.text("hello");
  outfit_calendar_con.append(date_h3, jacket_img, top_img, bottom_img);

  outfit_Section.append(outfit_calendar_con);

  var listOfClothes = ["https://dummyimage.com/200x200/44AA10/fff&text=Img+1",
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

  function createOutfitPill(dates, listOfLinks) {
    for (var i = 0; i < dates.length; i++) {
      var jacket_img = $("<img id='jacket_img' src='' alt-img='' />");
      jacket_img.attr('src', listOfLinks[i]);
      var top_img = $("<img id='top_img' src='' alt-img='' />");
      top_img.attr('src', listOfLinks[i]);
      var bottom_img = $("<img id='bottom_img' src='' alt-img='' />");
      bottom_img.attr('src', listOfLinks[i]);

      var date_h3 = $("<h3></h3>");
      date_h3.text("Date " + dates[i]);

      outfit_calendar_con.append(date_h3, jacket_img, top_img, bottom_img);

      outfit_Section.append(outfit_calendar_con);
    }
  }



  createOutfitPill(listOfDates, listOfClothes);



});
