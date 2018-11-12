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

$(document).ready(function() {
  var topcon = $("#top_con");
  var bottomcon = $("#bottom_con");
  var jacketcon = $("#jacket_con");

  function populateTopWear() {
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>')
      cloth.attr('src', listOfClothes[i]);
      figure.append(cloth);
      topcon.append(figure);
    }
  }

  function populateBottomWear() {
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>')
      cloth.attr('src', listOfClothes[i]);
      figure.append(cloth);
      bottomcon.append(figure);
    }
  }

  function populateJacketWear() {
    for (var i = 0; i < listOfClothes.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>')
      cloth.attr('src', listOfClothes[i]);
      figure.append(cloth);
      jacketcon.append(figure);
    }
  }

  populateTopWear();
  populateBottomWear()
  populateJacketWear();
})
