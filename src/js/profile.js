//OPENING THE SUBMENU FOR A PIECE OF CLOTH
$('.icon_delete').on('click', function() {

});

//REMOVING A PIECE OF CLOTH
$('.overlay_bottom').on('click', function() {
  // TODO: Provide a warning if you try to remove.
  $(this).parents('.cloth_figure').fadeOut('200', function() {
    $(this).parents('.cloth_figure').remove(function() {
      // TODO : REMOVE FROM DATABASE
    });
  });;
});
