var listOfImgs = ["https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+1",
  "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+2",
  "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+3",
  "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+4",
  "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+5",
  "https://dummyimage.com/200x200/FFF3DA/ffffff&text=Img+6"
];

var listOfDestinations = ["Japan",
  "Canada",
  "Tokyo, Japan",
  "Seoul, Korea",
  "Toronto, Canada",
  "Florida, USA"
];

var listOfDates = ["October 21, 2018, November 30, 2018",
  "October 21, 2018, November 30, 2018",
  "October 21, 2018, November 30, 2018",
  "October 21, 2018, November 30, 2018",
  "October 21, 2018, November 30, 2018",
  "October 21, 2018, November 30, 2018"
];

var listOfBag = ["20-30l",
  "35-40l",
  "40-45l",
  "45-50l",
  "50-65l",
  "65-75l"
];


var nameOfUser = "Group 33"


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

  //////////////////////////////////////// ajax functions ////////////////////////////////////////
  $.ajaxSetup({
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }
  });

  function getTrips(callback) {
    $.ajax({
      type: 'get',
      url: '/api/trips',
      success: function(data) {
        console.log("getTrips function");
        console.log(data.trips);
        callback(data.trips);
      },
      error: function(e) {
        console.log(e.responseText);
        // TODO: Display error to user
      }
    });
  }

  function getUserInfo(callback) {
    $.ajax({
      type: 'get',
      url: '/api/users/me',
      success: function(data) {
        console.log(data.user);
        callback(data.user)
      },
      error: function(e) {
        console.log(e.responseText);
        callback("Unknown");
      }
    })
  }

  function removeTrip(id) {
    $.ajax({
      type: 'delete',
      url: `/api/trips/${id}`,
      success: function(data) {
        console.log(data);
      },
      error: function(e) {
        console.log(e.responseText);
      }
    })
  }

  function editTrip(id, c) {
    console.log("updating trip");
    $.ajax({
      type: 'put',
      url: `/api/trips/editTrip/${id}`,
      dataType: 'json',
      data: { city: c.city,
              countryCode: c.code,
              countryName: c.name,
              checkIn: $('#check_in_input').val(),
              checkOut: $('#check_out_input').val(),
              bagSize: $('#bag_size_input').val()
            },

      success: function(data) {
        console.log(data);
        location.href = '/alltrips';
      },
      error: function(e) {
        console.log(e.responseText);
      }
    })

  }
  ////////////////////////////////////////////////////////////////////////////////

  // NAMING THE TRIPS WITH THE USERS NAME
  function setPageTitle(user) {
    let page_title = $('#page_title');
    page_title.text(user.username + "\'s Trips");
  }
  getUserInfo(setPageTitle);


  $('#trips_nav').addClass('active');
  var tripContainer = $('#trip_container');


  // <div class="trip_con">
  //   <div class="trip_background_con">
  //     <h2 class="trip_title"></h2>
  //     <p class="white-text trip_description"></p>
  //   </div>
  // </div>
  function populatePage(trips) {
    if(!trips.length)
      location.href = '/createtrip';

    for (var i = 0; i < trips.length; i++) {
      var trip = trips[i];

      var tripCon = $('<div class="trip_con"></div>');
      var tripBackgroundCon = $('<div class="trip_background_con"></div>');
      var tripTitle = $('<h5 class="trip_title"></h5>');
      var tripDate = $('<p class="trip_description"></p><br/>');
      var tripBag = $('<p class="trip_description"></p>');

      var icon = $('<i class="icon_delete material-icons">more_vert</i>');

      var overlayMenu = $('<div class="overlay_menu"></div>');
      var overlayCon = $('<div class="overlay_con"></div>');
      overlayMenu.append(overlayCon);

      var overlayTop = $('<div class="overlay_top"></div>');
      var overlayPTop = $('<p class="overlay_p_top">Edit</p>');
      overlayTop.append(overlayPTop);

      var overlayBottom = $('<div class="overlay_bottom"></div>');
      var overlayPBottom = $('<p class="overlay_p_bottom">Remove</p>');
      overlayBottom.append(overlayPBottom);

      overlayCon.append(overlayTop, overlayBottom);

      tripBackgroundCon.append(icon, tripTitle, tripDate, tripBag);
      tripCon.append(tripBackgroundCon, overlayMenu);

      //setting each trip con with it's relevant details.
      tripCon.attr("data-key", trip._id);
      tripCon.attr("data-city", trip.city);
      tripCon.attr("data-countryName", trip.countryName);
      tripCon.attr("data-countryCode", trip.countryCode);
      tripCon.attr("data-checkIn", trip.checkIn);
      tripCon.attr("data-checkOut", trip.checkOut);

      //TODO: NEED To set to trip bag size. Template used for now
      tripCon.attr("data-bagSize", trip.bagSize);

      tripTitle.html(`${trip.city}, ${trip.countryName}`);
      tripTitle.css('background-color', ' rgba(255, 255, 255, 0.6)');
      tripTitle.css('padding', '5px');

      //TODO: Parse the date so it display full month
      // Nov 26, 2018 convert November, 26, 2018.
      // For now it'll just display it as mmm dd, yyyy
      tripDate.html(`${trip.checkIn} - ${trip.checkOut}`);
      tripDate.css('padding-left', '5px');
      //TODO: NEED To set to trip bag size. Template used for now
      tripBag.html(trip.bagSize);
      tripBag.css('padding-left', '5px');
      console.log("this is the trip: " + trip.city);
      var backgroundStyle = {
        'background-image': `url(/img/city/${trip.city}.jpeg)`
      };
      switch (trip.city) {
        case "New York":
          backgroundStyle = {
            'background-image': `url(/img/city/New_York.jpeg)`
          };
          break;
        case "San Francisco":
          backgroundStyle = {
            'background-image': `url(/img/city/San_Francisco.jpeg)`
          };
          break;
        case "Brussels":
        case "Fujiyama":
        case "Honolulu":
        case "Seoul":
        case "Sydney":
        case "Tokyo":
        case "Vancouver":
        break;
        default:
        backgroundStyle = {
          'background-image': `url(/img/city/default.jpeg)`
        };
        break;
      }


      tripCon.css(backgroundStyle);

      tripContainer.append(tripCon);

    }
  }

  // getTrips will grab all related trips to the user,
  // populatePage will be called as a callback once all the trips are found.
  getTrips(populatePage);

  // OPENING A TRIP SO I NEED TO GO TO A DIFFERENT PAGE
  $('#trip_container').on('click', '.trip_con', function(e) {
    if ($(e.target).hasClass('icon_delete') ||
      $(e.target).hasClass('overlay_top') ||
      $(e.target).hasClass('overlay_p_bottom') ||
      $(e.target).hasClass('overlay_bottom') ||
      $(e.target).hasClass('overlay_p_top')) {

    } else {

      let tripID = $(this).attr('data-key');
      window.location=`/trip/${tripID}`;
      console.log(`/trip/${tripID}`);
    }
  });







  //CLOSING ANY OPEN SUBMENU IF YOU CLICK OUTSIDE OF IT
  var submenuOpen = 0;
  $(document).mouseup(function(e) {
    if (!$('.cloth_figure').is(e.target) // if the target of the click isn't the container...
      &&
      $('.cloth_figure').has(e.target).length === 0 &&
      submenuOpen == 1) // ... nor a descendant of the container
    {
      $('.overlay_menu').slideUp(200);
      submenuOpen = 0;
    }
  });

  var selectedTrip = 0;
  var selectedTripKey = 0;
  //OPENING THE SUBMENU FOR A TRIP
  $('#trip_container').on('click', '.icon_delete', function() {
    selectedTrip = $(this).parent().parent();
    selectedTripKey = selectedTrip.attr('data-key');
    if (selectedTrip.children('.overlay_menu').css('display') == "none") {
      $('.overlay_menu').slideUp(200);
    }
    selectedTrip.children('.overlay_menu').slideToggle(200);
    submenuOpen = 1;
  });



  //REMOVING A TRIP
  $('#trip_container').on('click', '.overlay_bottom', function() {
    // TODO: Provide a warning if you try to remove.
    $(this).parent().parent().parent().fadeOut('200', function() {
      removeTrip($(this).attr('data-key'));
      console.log($(this).attr('data-key'));
      $(this).remove();
    });
  });


  //OPENING CALENDAR WITH RESTRICTIONS:
  //WHEN CHECKIN CALENDAR IS OPENED, THEN CHECKOUT CANNOT BE LESS THAT CHECKIN
  //CHECKIN MUST ALSO START ON TODAY
  //WHEN CHECKOUT IS SELECTED FIRST, THEN CHECK IN CANNOT EXCEED CHECKIN
  var date = new Date();
  var checkInDate = 0;
  var maxDate = 0;
  $("#check_in_input").datepicker({
    startDate: date,
    defaultDate: date,
    minDate: date,
    minYear: '2018',
    onClose: function() {
      date = new Date($('#check_in_input').val());
      console.log(date);
      $('#check_out_input').datepicker({
        startDate: date,
        minYear: '2018',
        minDate: date,
        defaultDate: date
      });
    }
  });

  $("#check_out_input").datepicker({
    startDate: date,
    defaultDate: date,
    minDate: date,
    minYear: '2018',
    onClose: function() {
      date = new Date($('#check_out_input').val());
      console.log(date);
      $('#check_in_input').datepicker({
        startDate: new Date(),
        minYear: '2018',
        minDate: new Date(),
        maxDate: date,
        defaultDate: new Date()
      });
    }
  });




  //OPENING OVERLAYMENU TO EDIT TRIP
  $('#trip_container').on('click', '.overlay_top', function() {

    //OPENING Edit MENU extracting key value to place into value of edit fields
    // Setting the edit menu to the trips params
    selectedTrip.data('key');
    $('#search_term_input').attr('value', selectedTrip.data('city') + ", " + selectedTrip.data('countryname'));
    $('#check_in_input').attr('value', selectedTrip.data('checkin'));
    $('#check_out_input').attr('value', selectedTrip.data('checkout'));
    $('#bag_size_input').attr('value', selectedTrip.data('bagsize'));
    $(`option[value="${selectedTrip.data('bagsize')}"]`).attr('selected', "");

    // reinitializing the dropdown
    $('select').formSelect();
    M.updateTextFields();


    $('#edit-overlay').fadeIn('400', function() {});
  });


  //CLOSE OVERLAYMENU
  $(document).mousedown(function(e) {
    var container = $("#edit-con");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0
      && !$(e.target).parent().hasClass('pac-item')
      && !$(e.target).parent().hasClass('pac-container')) {
      $('#edit-overlay').fadeOut('400', function() {});
    }
  });

  // HANDLING THE PUT EDIT TRIP
  $('#buttonNext').on('click', function() {
    console.log('button pressed');
    console.log($('#bag_size_input').val());

    $("#edit-overlay").fadeOut('400', function() {

    });

    //now send the trip key with all the new info to the backend
    // key into the URL
    // Everything else in the body data
    // also send the trip id here too.
    // TODO AJAX CALL
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

      countryData = {name: cName, city: cCity, code: cCode, checkIn: cIn,checkOut: cOut};
      editTrip(selectedTrip.data('key'), countryData)


    };


  });


  // HANDLING THE CANCEL BUTTON WHEN EDIT TRIP OVERLAY IS OPEN
  $('#cancelNext').on('click', function(e) {
    console.log('button pressed');
    console.log($('#bag_size_input').val());
    e.preventDefault();
    $("#edit-overlay").fadeOut('400', function() {

    });

    //now send the old key and new key to the backend
    // also send the trip id here too.
    // oldArticleKey.send
    // newArticleSwap.send
    // TODO AJAX CALL


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
