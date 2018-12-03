var listOfClothes = ["https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear1",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear2",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear3",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear4",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear5",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear6",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear7",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear8",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear9",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear10",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear11"];


var listOfDummies = ["https://dummyimage.com/200x200/123413/ffffff&text=Dummy1",
                      "https://dummyimage.com/200x200/00F3DA/ffffff&text=Dummy2",
                      "https://dummyimage.com/200x200/FF00DA/ffffff&text=Dummy3",
                      "https://dummyimage.com/200x200/FFF300/ffffff&text=Dummy4",
                      "https://dummyimage.com/200x200/55F3DA/ffffff&text=Dummy5",
                      "https://dummyimage.com/200x200/FF55DA/ffffff&text=Dummy6",
                      "https://dummyimage.com/200x200/FFF355/ffffff&text=Dummy7",
                      "https://dummyimage.com/200x200/AAF3DA/ffffff&text=Dummy8",
                      "https://dummyimage.com/200x200/FFAADA/ffffff&text=Dummy9",
                      "https://dummyimage.com/200x200/FFF3AA/ffffff&text=aDummy10",
                      "https://dummyimage.com/200x200/FFF3DA/ffffff&text=aDummy11"];


var countryCodes = [
  {name: 'Afghanistan', code: 'AF'},
  {name: 'Åland Islands', code: 'AX'},
  {name: 'Albania', code: 'AL'},
  {name: 'Algeria', code: 'DZ'},
  {name: 'American Samoa', code: 'AS'},
  {name: 'AndorrA', code: 'AD'},
  {name: 'Angola', code: 'AO'},
  {name: 'Anguilla', code: 'AI'},
  {name: 'Antarctica', code: 'AQ'},
  {name: 'Antigua and Barbuda', code: 'AG'},
  {name: 'Argentina', code: 'AR'},
  {name: 'Armenia', code: 'AM'},
  {name: 'Aruba', code: 'AW'},
  {name: 'Australia', code: 'AU'},
  {name: 'Austria', code: 'AT'},
  {name: 'Azerbaijan', code: 'AZ'},
  {name: 'Bahamas', code: 'BS'},
  {name: 'Bahrain', code: 'BH'},
  {name: 'Bangladesh', code: 'BD'},
  {name: 'Barbados', code: 'BB'},
  {name: 'Belarus', code: 'BY'},
  {name: 'Belgium', code: 'BE'},
  {name: 'Belize', code: 'BZ'},
  {name: 'Benin', code: 'BJ'},
  {name: 'Bermuda', code: 'BM'},
  {name: 'Bhutan', code: 'BT'},
  {name: 'Bolivia', code: 'BO'},
  {name: 'Bosnia and Herzegovina', code: 'BA'},
  {name: 'Botswana', code: 'BW'},
  {name: 'Bouvet Island', code: 'BV'},
  {name: 'Brazil', code: 'BR'},
  {name: 'British Indian Ocean Territory', code: 'IO'},
  {name: 'Brunei Darussalam', code: 'BN'},
  {name: 'Bulgaria', code: 'BG'},
  {name: 'Burkina Faso', code: 'BF'},
  {name: 'Burundi', code: 'BI'},
  {name: 'Cambodia', code: 'KH'},
  {name: 'Cameroon', code: 'CM'},
  {name: 'Canada', code: 'CA'},
  {name: 'Cape Verde', code: 'CV'},
  {name: 'Cayman Islands', code: 'KY'},
  {name: 'Central African Republic', code: 'CF'},
  {name: 'Chad', code: 'TD'},
  {name: 'Chile', code: 'CL'},
  {name: 'China', code: 'CN'},
  {name: 'Christmas Island', code: 'CX'},
  {name: 'Cocos (Keeling) Islands', code: 'CC'},
  {name: 'Colombia', code: 'CO'},
  {name: 'Comoros', code: 'KM'},
  {name: 'Congo', code: 'CG'},
  {name: 'Congo, The Democratic Republic of the', code: 'CD'},
  {name: 'Cook Islands', code: 'CK'},
  {name: 'Costa Rica', code: 'CR'},
  {name: 'Cote D\'Ivoire', code: 'CI'},
  {name: 'Croatia', code: 'HR'},
  {name: 'Cuba', code: 'CU'},
  {name: 'Cyprus', code: 'CY'},
  {name: 'Czech Republic', code: 'CZ'},
  {name: 'Denmark', code: 'DK'},
  {name: 'Djibouti', code: 'DJ'},
  {name: 'Dominica', code: 'DM'},
  {name: 'Dominican Republic', code: 'DO'},
  {name: 'Ecuador', code: 'EC'},
  {name: 'Egypt', code: 'EG'},
  {name: 'El Salvador', code: 'SV'},
  {name: 'Equatorial Guinea', code: 'GQ'},
  {name: 'Eritrea', code: 'ER'},
  {name: 'Estonia', code: 'EE'},
  {name: 'Ethiopia', code: 'ET'},
  {name: 'Falkland Islands (Malvinas)', code: 'FK'},
  {name: 'Faroe Islands', code: 'FO'},
  {name: 'Fiji', code: 'FJ'},
  {name: 'Finland', code: 'FI'},
  {name: 'France', code: 'FR'},
  {name: 'French Guiana', code: 'GF'},
  {name: 'French Polynesia', code: 'PF'},
  {name: 'French Southern Territories', code: 'TF'},
  {name: 'Gabon', code: 'GA'},
  {name: 'Gambia', code: 'GM'},
  {name: 'Georgia', code: 'GE'},
  {name: 'Germany', code: 'DE'},
  {name: 'Ghana', code: 'GH'},
  {name: 'Gibraltar', code: 'GI'},
  {name: 'Greece', code: 'GR'},
  {name: 'Greenland', code: 'GL'},
  {name: 'Grenada', code: 'GD'},
  {name: 'Guadeloupe', code: 'GP'},
  {name: 'Guam', code: 'GU'},
  {name: 'Guatemala', code: 'GT'},
  {name: 'Guernsey', code: 'GG'},
  {name: 'Guinea', code: 'GN'},
  {name: 'Guinea-Bissau', code: 'GW'},
  {name: 'Guyana', code: 'GY'},
  {name: 'Haiti', code: 'HT'},
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
  {name: 'Holy See (Vatican City State)', code: 'VA'},
  {name: 'Honduras', code: 'HN'},
  {name: 'Hong Kong', code: 'HK'},
  {name: 'Hungary', code: 'HU'},
  {name: 'Iceland', code: 'IS'},
  {name: 'India', code: 'IN'},
  {name: 'Indonesia', code: 'ID'},
  {name: 'Iran, Islamic Republic Of', code: 'IR'},
  {name: 'Iraq', code: 'IQ'},
  {name: 'Ireland', code: 'IE'},
  {name: 'Isle of Man', code: 'IM'},
  {name: 'Israel', code: 'IL'},
  {name: 'Italy', code: 'IT'},
  {name: 'Jamaica', code: 'JM'},
  {name: 'Japan', code: 'JP'},
  {name: 'Jersey', code: 'JE'},
  {name: 'Jordan', code: 'JO'},
  {name: 'Kazakhstan', code: 'KZ'},
  {name: 'Kenya', code: 'KE'},
  {name: 'Kiribati', code: 'KI'},
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
  {name: 'Korea, Republic of', code: 'KR'},
  {name: 'South Korea', code: 'KR'},
  {name: 'Kuwait', code: 'KW'},
  {name: 'Kyrgyzstan', code: 'KG'},
  {name: 'Lao People\'S Democratic Republic', code: 'LA'},
  {name: 'Latvia', code: 'LV'},
  {name: 'Lebanon', code: 'LB'},
  {name: 'Lesotho', code: 'LS'},
  {name: 'Liberia', code: 'LR'},
  {name: 'Libyan Arab Jamahiriya', code: 'LY'},
  {name: 'Liechtenstein', code: 'LI'},
  {name: 'Lithuania', code: 'LT'},
  {name: 'Luxembourg', code: 'LU'},
  {name: 'Macao', code: 'MO'},
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
  {name: 'Madagascar', code: 'MG'},
  {name: 'Malawi', code: 'MW'},
  {name: 'Malaysia', code: 'MY'},
  {name: 'Maldives', code: 'MV'},
  {name: 'Mali', code: 'ML'},
  {name: 'Malta', code: 'MT'},
  {name: 'Marshall Islands', code: 'MH'},
  {name: 'Martinique', code: 'MQ'},
  {name: 'Mauritania', code: 'MR'},
  {name: 'Mauritius', code: 'MU'},
  {name: 'Mayotte', code: 'YT'},
  {name: 'Mexico', code: 'MX'},
  {name: 'Micronesia, Federated States of', code: 'FM'},
  {name: 'Moldova, Republic of', code: 'MD'},
  {name: 'Monaco', code: 'MC'},
  {name: 'Mongolia', code: 'MN'},
  {name: 'Montserrat', code: 'MS'},
  {name: 'Morocco', code: 'MA'},
  {name: 'Mozambique', code: 'MZ'},
  {name: 'Myanmar', code: 'MM'},
  {name: 'Namibia', code: 'NA'},
  {name: 'Nauru', code: 'NR'},
  {name: 'Nepal', code: 'NP'},
  {name: 'Netherlands', code: 'NL'},
  {name: 'Netherlands Antilles', code: 'AN'},
  {name: 'New Caledonia', code: 'NC'},
  {name: 'New Zealand', code: 'NZ'},
  {name: 'Nicaragua', code: 'NI'},
  {name: 'Niger', code: 'NE'},
  {name: 'Nigeria', code: 'NG'},
  {name: 'Niue', code: 'NU'},
  {name: 'Norfolk Island', code: 'NF'},
  {name: 'Northern Mariana Islands', code: 'MP'},
  {name: 'Norway', code: 'NO'},
  {name: 'Oman', code: 'OM'},
  {name: 'Pakistan', code: 'PK'},
  {name: 'Palau', code: 'PW'},
  {name: 'Palestinian Territory, Occupied', code: 'PS'},
  {name: 'Panama', code: 'PA'},
  {name: 'Papua New Guinea', code: 'PG'},
  {name: 'Paraguay', code: 'PY'},
  {name: 'Peru', code: 'PE'},
  {name: 'Philippines', code: 'PH'},
  {name: 'Pitcairn', code: 'PN'},
  {name: 'Poland', code: 'PL'},
  {name: 'Portugal', code: 'PT'},
  {name: 'Puerto Rico', code: 'PR'},
  {name: 'Qatar', code: 'QA'},
  {name: 'Reunion', code: 'RE'},
  {name: 'Romania', code: 'RO'},
  {name: 'Russian Federation', code: 'RU'},
  {name: 'RWANDA', code: 'RW'},
  {name: 'Saint Helena', code: 'SH'},
  {name: 'Saint Kitts and Nevis', code: 'KN'},
  {name: 'Saint Lucia', code: 'LC'},
  {name: 'Saint Pierre and Miquelon', code: 'PM'},
  {name: 'Saint Vincent and the Grenadines', code: 'VC'},
  {name: 'Samoa', code: 'WS'},
  {name: 'San Marino', code: 'SM'},
  {name: 'Sao Tome and Principe', code: 'ST'},
  {name: 'Saudi Arabia', code: 'SA'},
  {name: 'Senegal', code: 'SN'},
  {name: 'Serbia and Montenegro', code: 'CS'},
  {name: 'Seychelles', code: 'SC'},
  {name: 'Sierra Leone', code: 'SL'},
  {name: 'Singapore', code: 'SG'},
  {name: 'Slovakia', code: 'SK'},
  {name: 'Slovenia', code: 'SI'},
  {name: 'Solomon Islands', code: 'SB'},
  {name: 'Somalia', code: 'SO'},
  {name: 'South Africa', code: 'ZA'},
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
  {name: 'Spain', code: 'ES'},
  {name: 'Sri Lanka', code: 'LK'},
  {name: 'Sudan', code: 'SD'},
  {name: 'Suriname', code: 'SR'},
  {name: 'Svalbard and Jan Mayen', code: 'SJ'},
  {name: 'Swaziland', code: 'SZ'},
  {name: 'Sweden', code: 'SE'},
  {name: 'Switzerland', code: 'CH'},
  {name: 'Syrian Arab Republic', code: 'SY'},
  {name: 'Taiwan, Province of China', code: 'TW'},
  {name: 'Tajikistan', code: 'TJ'},
  {name: 'Tanzania, United Republic of', code: 'TZ'},
  {name: 'Thailand', code: 'TH'},
  {name: 'Timor-Leste', code: 'TL'},
  {name: 'Togo', code: 'TG'},
  {name: 'Tokelau', code: 'TK'},
  {name: 'Tonga', code: 'TO'},
  {name: 'Trinidad and Tobago', code: 'TT'},
  {name: 'Tunisia', code: 'TN'},
  {name: 'Turkey', code: 'TR'},
  {name: 'Turkmenistan', code: 'TM'},
  {name: 'Turks and Caicos Islands', code: 'TC'},
  {name: 'Tuvalu', code: 'TV'},
  {name: 'Uganda', code: 'UG'},
  {name: 'Ukraine', code: 'UA'},
  {name: 'United Arab Emirates', code: 'AE'},
  {name: 'United Kingdom', code: 'GB'},
  {name: 'United States', code: 'US'},
  {name: 'USA', code: 'US'},
  {name: 'United States Minor Outlying Islands', code: 'UM'},
  {name: 'Uruguay', code: 'UY'},
  {name: 'Uzbekistan', code: 'UZ'},
  {name: 'Vanuatu', code: 'VU'},
  {name: 'Venezuela', code: 'VE'},
  {name: 'Viet Nam', code: 'VN'},
  {name: 'Virgin Islands, British', code: 'VG'},
  {name: 'Virgin Islands, U.S.', code: 'VI'},
  {name: 'Wallis and Futuna', code: 'WF'},
  {name: 'Western Sahara', code: 'EH'},
  {name: 'Yemen', code: 'YE'},
  {name: 'Zambia', code: 'ZM'},
  {name: 'Zimbabwe', code: 'ZW'}
];



$(document).ready(function() {
  //Setting the background top image. Should be some country image.
  $('#destinationimg_con').css('background-image', 'url(' + 'https://dummyimage.com/200x200/FFF3DA/ffffff&text=anyWear' + ')');

  var topcon = $("#top_con");
  var bottomcon = $("#bottom_con");
  var jacketcon = $("#jacket_con");
  M.updateTextFields();

//////////////////////////////////////// ajax functions ////////////////////////////////////////
  $.ajaxSetup({
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });

  console.log(localStorage.getItem('tripID'));

  function getTrip(callback){
    $.ajax({
        type: 'get',
        url: `/api/trips/${localStorage.getItem('tripID')}`,
        success: function(data){
          console.log(data);
          callback(data.trip);
        },
        error: function(e){
            console.log(e.responseText);
            // TODO: Display error to user
        },
        statusCode: {
          404: function() {
            console.log(`No trips found at ${url}`);
          }
        }
    });
  }

  function getArticles(articleCategory, callback) {
    var url;
    if (articleCategory)
      url = `/api/trips/wardrobe/${localStorage.getItem('tripID')}?category=${articleCategory}`
    else
      url = `/api/trips/wardrobe/${localStorage.getItem('tripID')}`

    $.ajax({
      type: 'get',
      url: url,
      success: function(data) {
        console.log("Getting Articles Ajax call: " + data);

        callback(data.articles);
      },
      error: function(e) {
        console.error(e.responseText);
      },
      statusCode: {
        404: function() {
          console.error(`No articles found at ${url}`);
        }
      }
    })
  }

  function getRelatedArticles(articleID, tripID, callback) {
    $.ajax({
      type: 'get',
      url: `/api/articles/related/${articleID}&${tripID}`,
      success: function(data) {
        // console.log('related articles ' + data);
        callback(data);
      },
      error: function(e) {
        console.error(e.responseText);
      }
    })
  }

  function swapArticles(oldArticleID, newArticleID) {
    $.ajax({
      type: 'put',
      url: `/api/trips/wardrobe/swap/${localStorage.getItem('tripID')}/${oldArticleID}&${newArticleID}`,
      data: localStorage.getItem(''),
      success: function(data) {
        console.log("swap success");
      },
      error: function(e) {
        console.error(e.responseText);
      }
    })
  }

//////////////////////////////////////////////////////////////////////////////////////////////

  function populateTripInfo(trip) {
    // TODO: set trip data, Destination, Bag Size, Check in, Check out
    let thisTrip = trip;

    // Not proud of this
    localStorage.setItem('tripIDHolder', trip._id);

    $('#destination_con p').text(`${thisTrip.city}, ${thisTrip.countryName}`);
    $('#bagsize_con p').text(thisTrip.bagSize);
    $('#checkin_con p').text(thisTrip.checkIn);
    $('#checkout_con p').text(thisTrip.checkOut);

    var backgroundStyle = {
      'background-image': `url(/img/city/${thisTrip.city}.jpeg)`
    };
    var tripCityName = "";
    switch (trip.city) {
      case "New York":
        backgroundStyle = {
          'background-image': `url(/img/city/New_York.jpeg)`
        };
        tripCityName = "New_York";
        break;
      case "San Francisco":
        backgroundStyle = {
          'background-image': `url(/img/city/San_Francisco.jpeg)`
        };
        tripCityName = "San_Francisco";
        break;
      case "Brussels":
      case "Fujiyama":
      case "Honolulu":
      case "Seoul":
      case "Sydney":
      case "Tokyo":
      case "Vancouver":
      tripCityName = thisTrip.city;
      break;
      default:
      backgroundStyle = {
        'background-image': `url(/img/city/default.jpeg)`
      };
      tripCityName = "default";
      break;
    }
    $('.parallax img').attr('src', `../../img/city/${tripCityName}.jpeg`);


  }
  getTrip(populateTripInfo);

  //POPULATE THE TOPS
  function populateTopWear(articles) {
    console.log(articles[0]);
    for (var i = 0; i < articles.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', articles[i].imgLink);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', articles[i]._id);

      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      topcon.append(figure);
    }
  }


  //POPULATE THE BOTTOMS
  function populateBottomWear(articles) {
    console.log(articles);
    for (var i = 0; i < articles.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', articles[i].imgLink);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', articles[i]._id);
      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      bottomcon.append(figure);
    }
  }
  //POPULATE THE JACKET AREA WHEN NEEDED
  function populateJacketWear(articles) {
    console.log(articles);
    for (var i = 0; i < articles.length; i++) {
      var figure = $('<figure class="cloth_figure"></figure>');
      var clothIconCon = $('<div class="cloth_img_con"></div>');
      var cloth = $('<img class="cloth_img" src="" alt"no image"/>');
      var icon = $('<i class="icon_delete grey-text material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Swap</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      cloth.attr('src', articles[i].imgLink);
      //TODO ADD KEY VALUE HERE
      cloth.attr('data-key', articles[i]._id);

      figure.append(clothIconCon);
      clothIconCon.append(cloth, icon, overlayMenu);
      jacketcon.append(figure);
    }
  }

  getArticles('shirt', populateTopWear);
  getArticles('pant', populateBottomWear);
  getArticles('jacket', populateJacketWear);

//CLOSING ANY OPEN SUBMENU IF YOU CLICK OUTSIDE OF IT
var submenuOpen = 0;
$(document).mousedown(function(e) {
  if (!$('.cloth_figure').is(e.target) // if the target of the click isn't the container...
    &&
    $('.cloth_figure').has(e.target).length === 0 &&
    submenuOpen == 1) // ... nor a descendant of the container
  {
    $('.overlay_menu').slideUp(200);
    submenuOpen = 0;
  }
});


//OPENING THE SUBMENU FOR A PIECE OF CLOTH
$(document).on('click', '.icon_delete', function() {
  if ($(this).siblings('.overlay_menu').css('display') == "none") {
    $('.icon_delete').siblings('.overlay_menu').slideUp(200);
  }
  $(this).siblings('.overlay_menu').slideToggle(200);
  submenuOpen = 1;
});

  //REMOVING A PIECE OF CLOTH
  $('.overlay_bottom').on('click', function() {
    // TODO: Provide a warning if you try to remove.
    $(this).parents('.cloth_figure').fadeOut('200', function() {
      $(this).remove();
      // TODO REMOVE FROM THE DATABASE

    });;
  });


  //SWAPPING A PIECE OF CLOTH
  //this is the old key for swapping.
  var selectedArticle = 0;
  var oldArticleKey = 0;
  $(document).on('click', '.overlay_top', function() {
    // TODO: POP up an overlay of all the clothes in the same vein
    // if a swap does happen, then remove the previous and add the new one.
    // all you have to do is change the src for now with jquery
    // (the database will handle the rest when you reload the page)
    // post remove and post new cloth
    selectedArticle = $(this).parent().parent().siblings('img');
    oldArticleKey = $(this).parent().parent().siblings('img').data('key');
    var imageSrc = $(this).parent().parent().siblings('.cloth_img').attr('src');


    console.log("old article key" + oldArticleKey);

    var rightGrid = $('#right-grid');
    // TODO REQUEST THE SERVER TO GIVE YOU A LIST OF AVAILABLE CLOTHES AND ADD TO THE RIGHTGRID
    // TODO SEND OLD KEY TO GET A LIST OF CLOTHES.
    // TODO SEND TRIP KEY.
    function buildSwapOptions(articles) {
      rightGrid.children().remove();

      for (const article of articles) {
        console.log(article);
        var wardrobeCloth = $('<img class="warddrobe_img cloth_img" src="" alt="no image"/>');
        wardrobeCloth.attr('data-key', article._id);
        wardrobeCloth.attr('src', article.imgLink);
        rightGrid.append(wardrobeCloth);
      }
    }

    // Calling server api for all articles
    getRelatedArticles(oldArticleKey, "Not Used", buildSwapOptions);

    //SWAPPED IMAGE
    $('#left-img').attr('src', imageSrc);
    //OPENING SWAP MENU
    $('#edit-overlay').fadeIn('400', function() {
    });
  });


  //CLOSE OVERLAYSWAP MENU
  $(document).mouseup(function(e) {
      var container = $("#edit-con");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#edit-overlay').fadeOut('400', function() {
        });
      }
  });


  //HERE YOU DO THE ACTUAL SWAP FOR WHEN THE USER CLICKS AN ITEM TO SWAP AND SAVES
  var newSelectedArticle = 0;
  var newArticleSwap = 0;
  $(document).on('click', 'img.warddrobe_img', function(e) {
    console.log($(this));
    newSelectedArticle = $(this);
    newArticleSwap = $(this).data('key');

    $('img.warddrobe_img').removeClass('border-blue');
    $(this).addClass('border-blue');

  });

  $(document).on('dblclick', 'img.warddrobe_img', function(e) {
    console.log($(this));
    newSelectedArticle = $(this);
    newArticleSwap = $(this).data('key');

    $('img.warddrobe_img').removeClass('border-blue');
    $(this).addClass('border-blue');

  });

  // HANDLING THE SUBMIT SWAP CLOTHES REQUEST
  $('#buttonNext').on('click', function() {
    console.log('button pressed');
    selectedArticle.attr('src', newSelectedArticle.attr('src'));
    selectedArticle.data('key', newSelectedArticle.data('key'));

    $("#edit-overlay").fadeOut('400', function() {

    swapArticles(oldArticleKey, newArticleSwap);
    })


    //now send the old key and new key to the backend
    // also send the trip id here too.
    // oldArticleKey.send
    // newArticleSwap.send
    // TODO AJAX CALL


  });



  //TODO THIS NEEDS TO PUT/UPDATE THE NEW DATA FROM THE EDIT SCREEN.
  // Posting a new trip to the database.
   $(document).on('click', '#bttonNext', function(e){
     $(document).ready(function() {
      M.updateTextFields();
    });
     var form0 = document.getElementById('search_term_input');
     var form1 = document.getElementById('check_in_input');
     var form2 = document.getElementById('check_out_input');
     var form3 = document.getElementById('bag_size_input');

     console.log("1" + form0);

     if (form0.checkValidity() && form1.checkValidity()
          && form2.checkValidity() && form3.checkValidity()) {
       var cName = siftForCountry($('#search_term_input').val());
       var cCity = siftForCity($('#search_term_input').val());
       var cCode = findCountryCode(cName);
       var cIn = $('#check_in_input').val();
       var cOut = $('#check_out_input').val();
       e.preventDefault();
       $.ajax(
         {
           type: 'post',
           url: '/api/trips',
           dataType: 'json',
           data: { city: cCity,
                   countryCode: cCode,
                   countryName: cName,
                   checkIn: $('#check_in_input').val(),
                   checkOut: $('#check_out_input').val(),
                   bagSize: $('#bag_size_input').val()
                 },
           success: function(data) {
             location.href = '/alltrips';
           },
           error: function(e) {
             alert("Message from the server " + e.responseText);

         }
       });
     };
   });

});


// HELPER function
// Sifts through a string to parse for a country name.
// @return a Country
function siftForCountry(unparsedCountry) {
  var countryParsed = unparsedCountry.split(',');
  if (countryParsed.length == 3) {
    return countryParsed[2].trim();
  } else {
    return countryParsed[1].trim();
  }
};


// HELPER functions
// Takes a city and returns it's corresponding country code.
// @return country code of the country
function findCountryCode(parsedCountry) {
  // The countryCodeHolder is used because for some reason
  // the for each won't return anything but the value is being printed.
  for (var i = 0; i < countryCodes.length; i++) {

    if (parsedCountry == countryCodes[i].name) {
      console.log("found it");
      console.log("index value :" + i);
      return countryCodes[i].code;
    }
  }
};



// HELPER function
// Sifts through a string to parse for a city name.
// @return a city
function siftForCity(unparsedCity) {
  var cityParsed = unparsedCity.split(',');
  return cityParsed[0].trim();
}
