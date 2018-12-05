<h1>
anywear</br>
</h1>

<h2>
Group 33
</h2>

<h3>
Hannah | Bret | Edward
</h3>

anyWear: A school project</br>
BCIT - comp1930

anyWear handles the boring and most stressful part of traveling... What to pack!</br>
It works to save time by creating outfits for users when their on their trips. 

What it does:
<ul>
  <li>Grab from the google database of locations</li>
  <li>Generate a trip for that location</li>
  <li>Uses capsule warddrobes to accommodate specific bag sizes</li>
  <li>Creates what clothing should be brought on the trip based on:
    <ul>
      <li>weather from openweatherapi</li>
      <li>season</li>
      <li>bag size</li>
    </ul>
  </li>
  <li>Generates multiple outfits to choose from</li>
  <li>Responsive design! Mobile, tablet, and computer friendly design</li>
</ul>

anyWear uses:
<ul>
  <li>Capsule Warddrobes</li>
  <li>Google Calendar API</li>
  <li>Google Places API</li>
  <li>Open Weather API</li>
</ul>

<h2>
Screens
</h2>
<h3>
Welcome Page
</h3>
Description:
<ul>
  <li>Our pretty landing page</li>
  <li>Sign in and Sign up</li>
  <li>Validation rules:
    <ul>
      <li>Email</li>
      <li>Password</li>
      <li>Username</li>
      <li>Gender</li>
      <li>Profile Picture</li>
      <li>Age (optional)</li>
    </ul>
  </li>
  <li>Creates a user and sets a token for authorization</li>
</ul>
<h3>
Create Trip Page
</h3>
Description:
<ul>
  <li>Creating a trip for a location</li>
  <li>Displays a list of bags you can take during a trip</li>
  <li>Uses google api to autocomplete and provide suggestions for cities</li>
  <li>Creates a trip based on:
    <ul>
      <li>Destination from googleplacesapi</li>
      <li>Check-in date</li>
      <li>Check-out date</li>
      <li>Bag Size</li>
    </ul>
  </li>
 
</ul>
<h3>
All Trips Page
</h3>
Description:
<ul>
  <li>Grabs a list of trips from mongodb a user currently has</li>
  <li>Removal of trips is possible using the menu button on a singular trip</li>
  <li>Editing a trips detail using the menu button</li>
</ul>
<h3>
Single Trip Page
</h3>
Description:
<ul>
  <li>Grabs a specific trip from mongodb (specified by the user click)/li>
  <li>Displays every article of clothing the user must take on the trip</li>
  <li>Swapping specific warddrobe items with another article</li>
  <li>Creates what clothing should be brought on the trip based on:
    <ul>
      <li>weather</li>
      <li>season</li>
      <li>bag size</li>
    </ul>
  </li>
</ul>
<h3>
Current Trip Page
</h3>
Description:
<ul>
  <li>Displays the trip you're currently on</li>
  <li>Weather is shown real-time for the destination location</li>
  <li>Generates a list of outfits for 5 days</li>
  <li>Creates outifits for you to wear on specific dates depending on:
    <ul>
      <li>weather from openweatherapi</li>
      <li>Temperature from openweatherapi</li>
    </ul>
</ul>
<h3>
Profile Page
</h3>
Description:
<ul>
  <li>Grabs user information from mongodb</li>
  <li>Displays profile picture and user information</li>
  <li>Editable user information</li>
