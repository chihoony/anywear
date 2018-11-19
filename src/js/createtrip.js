var bagSizes = ["20-30 L",
                "35-40 L",
                "40-45 L",
                "45-50 L",
                "50-65 L",
                "65-75 L",
                "75-120 L"]

var bagImages = ["./src/img/20-30l.jpg",
                "./src/img/35-40l.jpg",
                "./src/img/40-45l.jpg",
                "./src/img/45-50l.jpg",
                "./src/img/50-65l.jpg",
                "./src/img/65-75l.jpg",
                "./src/img/75-120l.jpg"]

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
  var checkInOptions = {}
  $("#overlay").fadeOut('2000', function() {
    // $(".content").fadeIn(1000);
  });
})

$("#check_in_input").datepicker({
  defaultDate: new Date(),
  minDate: new Date(),
  onSelect: function(dateStr){
    $("#check_out_input").datepicker({defaultDate: new Date(dateStr), minDate: new Date(dateStr)})
  }
});


// PAGE IS FULLY LOADED
$(document).ready(function() {
  // Setting the date picker.
  // $('.datepicker').focus(function() {
  //   $(this).datepicker();
  // });
  $("#check_in_input").datepicker({
    defaultDate: new Date(),
    minDate: new Date(),
    onSelect: function(dateStr){
      $("#check_out_input").datepicker({defaultDate: new Date(dateStr), setDefaultDate: true, minDate: new Date(dateStr)})
    }
  });

  $("#check_out_input").datepicker({
    defaultDate: new Date(),
    minDate: new Date(),
    onSelect: function(dateStr){
      $("#check_in_input").datepicker({minDate: new Date(), maxDate: new Date(dateStr)})
    }
  });


  $('#new_trip_nav').addClass('active');
  var bag_container = $('#bag_container');

  function setBaglist() {
    for (var i = 0; i < bagSizes.length; i++) {
      var cardcon = $("<div class='card hoverable' style='width:10rem;'></div>");

      var cardimgdiv = $('<div class="card-image"></div>');
      var cardimg = $('<img class="bag-img" src="https://dummyimage.com/200x200/444400/fff" alt="Bag image">');
      var cardspantitle = $('<span class="card-title size-text-shadow"></span>');
      cardimgdiv.append(cardimg, cardspantitle);

      var cardbody = $("<div class='card-content'></div>");
      var cardtext = $('<p class="card-text"></p>');
      cardbody.append(cardtext);

      cardcon.attr('data-value', bagSizes[i]);
      cardimg.attr('src', bagImages[i]);
      cardspantitle.html(bagSizes[i]);
      cardtext.html(bagDescription[i]);

      cardcon.append(cardimgdiv,cardbody);
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


// function showBagSelection(x) {
//   $('#bag_container').css('visibility', 'visible');
//   $('#bag_container').animate({opacity: 1}, 300);
//
// };

function showBagSelection(x) {
  $('#bag_container').fadeIn('400', function() {

  });

};

// function hideBagSelection(x) {
//   $('#bag_container').animate({opacity: 0}, 300);
//   function hiddenBag(){
//     $('#bag_container').css('visibility', 'hidden');
//   }
//   $('#bag_container').delay(300).queue(function() {
//     $('#bag_container').css('visibility', 'hidden');
//     $(this).dequeue();
//   })
// }

function hideBagSelection(x) {
  // $('#bag_container').animate({opacity: 0}, 300);
  // function hiddenBag(){
  //   $('#bag_container').css('visibility', 'hidden');
  // }
  $('#bag_container').fadeOut('400', function() {

  });
  // $('#bag_container').delay(300).queue(function() {
  //   $('#bag_container').css('visibility', 'hidden');
  //   $(this).dequeue();
  // })
}
