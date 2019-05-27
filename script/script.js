const storyData = [
  {
    location: "Ahmedabad",
    title: "Born and brought up in Ahmedabad",
    story:
      "Ahmedabad, in western India, is the largest city in the state of Gujarat. The Sabarmati River runs through its center. On the western bank is the Gandhi Ashram at Sabarmati, which displays the spiritual leader’s living quarters and artifacts. Across the river, the Calico Museum of Textiles, once a cloth merchant's mansion, has a significant collection of antique and modern fabrics."
  },
  {
    location: "Mumbai",
    title: "Last stop before leaving the country",
    story:
      "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry."
  },
  {
    location: "Frankfurt",
    title: "Frist city to visit out of India",
    story:
      "Frankfurt, a central German city on the river Main, is a major financial hub that's home to the European Central Bank. It's the birthplace of famed writer Johann Wolfgang von Goethe, whose former home is now the Goethe House Museum. Like much of the city, it was damaged during World War II and later rebuilt. The reconstructed Altstadt (Old Town) is the site of Römerberg, a square that hosts an annual Christmas market."
  },
  {
    location: "Etobicoke",
    title: "Canada's first place of residence",
    story:
      "Etobicoke is an administrative district and former city that makes up the western part of Toronto, Ontario, Canada. Etobicoke was first settled by Europeans in the 1790s; the municipality grew into city status in the 20th century."
  },
  {
    location: "Brampton",
    title: "Title of story in Brampton",
    story: `Brampton is a city in the Canadian province of Ontario. Situated in Southern Ontario, it is a suburban city in the Greater Toronto Area (GTA) and the seat of Peel Region. The city has a population of 593,638 as of the Canada 2016 Census. Brampton is Canada's ninth-most populous municipality, the seventy-seventh largest city in North America and the third most populous city in the Greater Golden Horseshoe Region, behind Toronto and Mississauga.[2]

    Brampton was incorporated as a village in 1853 with 50 residents, taking its name from the market town of Brampton, in Cumbria, England. In 1873, with 2,000 residents, Brampton was incorporated as a town. The city was once known as "The Flower Town of Canada", a title based on its large greenhouse industry. Today, Brampton's major economic sectors include advanced manufacturing, retail administration, logistics, information, and communication technologies, food and beverage, life sciences, and business services. Mass immigration has greatly increased Brampton's population from 10,000 in the 1950s to over 600,000 today. `
  },
  {
    location: "Winnipeg",
    title: "Title of story in Winnipeg",
    story: `Winnipeg is the capital and largest city of the province of Manitoba in Canada. Centred on the confluence of the Red and Assiniboine rivers, it is near the longitudinal centre of North America, approximately 110 kilometres (70 mi) north of the Canada–United States border.

    The city is named after the nearby Lake Winnipeg; the name comes from the Western Cree words for muddy water. The region was a trading centre for aboriginal peoples long before the arrival of Europeans. French traders built the first fort on the site in 1738. A settlement was later founded by the Selkirk settlers of the Red River Colony in 1812, the nucleus of which was incorporated as the City of Winnipeg in 1873. As of 2011, Winnipeg is the seventh most populated municipality in Canada.[13] Being far inland, the local climate is extremely seasonal even by Canadian standards with average January lows of around −21 °C (−6 °F) and average July highs of 26 °C (79 °F).[7]
    
    Known as the "Gateway to the West", Winnipeg is a railway and transportation hub with a diversified economy. This multicultural city hosts numerous annual festivals, including the Festival du Voyageur, the Winnipeg Folk Festival, the Jazz Winnipeg Festival, the Winnipeg Fringe Theatre Festival, and Folklorama. Winnipeg was the first Canadian host of the Pan American Games. It is home to several professional sports franchises, including the Winnipeg Blue Bombers (Canadian football), the Winnipeg Jets (ice hockey), Manitoba Moose (ice hockey), Valour FC (soccer), and the Winnipeg Goldeyes (baseball). `
  },
  {
    location: "Calgary",
    title: "Dream City",
    story:
      "Calgary, a cosmopolitan Alberta city with numerous skyscrapers, owes its rapid growth to its status as the centre of Canada’s oil industry. However, it’s still steeped in the western culture that earned it the nickname “Cowtown,” evident in the Calgary Stampede, its massive July rodeo and festival that grew out of the farming exhibitions once presented here."
  },
  {
    location: "Chicago",
    title: "Windy City",
    story:
      "Chicago, on Lake Michigan in Illinois, is among the largest cities in the U.S. Famed for its bold architecture, it has a skyline punctuated by skyscrapers such as the iconic John Hancock Center, 1,451-ft. Willis Tower (formerly the Sears Tower) and the neo-Gothic Tribune Tower. The city is also renowned for its museums, including the Art Institute of Chicago with its noted Impressionist and Post-Impressionist works."
  },
  {
    location: "Parsippany",
    title: "Haridham New Jersey",
    story: `Yogi Divine Society is a trusted hindu spiritual and humanitarian charity organization. With its vast network of centers and volunteers world-wide, the organization has enabled hundreds of thousands of children, youth and families to lead a happy, peaceful and harmonious life.
      
      Motivated by our faith in Lord Swaminarayan, Yogi Divine Society serves the global community alongside all people, regardless of religion, race, ethnicity, or gender.
      
      Founded in 1974 by its spiritual head His Divine Holiness Guru Hariprasad Swamiji and actively operating in over 500 centers world-wide in countries like India, USA, Canada, Australia, New-Zealand, United Kingdom, Germany, France, South Africa, Kenya.
      `
  },
  {
    location: "Mehsana",
    title: "New Family home",
    story:
      "Mehsana was established by Mehsaji Chavda, Rajput heir of the Chavda dynasty. He constructed the Torana (arc gate) of the city and a temple dedicated to Goddess Toran in Vikram Samvat 1414, Bhadrapad Sud 10 (1358 AD). It is described by Jaisinh Brahmbhatt in poems from 1932 AD, and corroborated by Manilal Nyalchand, an author of Pragat Prabhavi Parshvanath of Samvat 1879 (1822 AD). He also states that Mehsaji built the temple dedicated to Chamunda. It inconclusively establishes that the town was founded during Rajput period. Another legend says that Mehsaji established it in Vikram Samvat 1375 (1319 AD)."
  }
];
const defaultData = {
  location: "Location Not Found",
  title: "Dummy Title",
  story: `Brampton is a city in the Canadian province of Ontario. Situated in Southern Ontario, it is a suburban city in the Greater Toronto Area (GTA) and the seat of Peel Region. The city has a population of 593,638 as of the Canada 2016 Census. Brampton is Canada's ninth-most populous municipality, the seventy-seventh largest city in North America and the third most populous city in the Greater Golden Horseshoe Region, behind Toronto and Mississauga.[2]

  Brampton was incorporated as a village in 1853 with 50 residents, taking its name from the market town of Brampton, in Cumbria, England. In 1873, with 2,000 residents, Brampton was incorporated as a town. The city was once known as "The Flower Town of Canada", a title based on its large greenhouse industry. Today, Brampton's major economic sectors include advanced manufacturing, retail administration, logistics, information, and communication technologies, food and beverage, life sciences, and business services. Mass immigration has greatly increased Brampton's population from 10,000 in the 1950s to over 600,000 today. `
};
const app = {};
const apiKeys = {
  googleMap: "AIzaSyBIuM19ShTtFRbCA5p3gLZgMAJ0DXkcpFQ",
  timeZoneKey: "YF1Y6GS9GOJH",
  weatherKey: "bf082c78bc86302b37089fdff0b1c97d"
};

// Initialize app

app.init = () => {
  $("form").on("submit", function(event) {
    event.preventDefault();
    $(".section-stories").removeClass("hide");
    const inputVal = $("input").val();
    app.getData(inputVal);
  });
};

// getting the api data

app.getData = addressInput => {
  $.ajax({
    url: "https://maps.googleapis.com/maps/api/geocode/json",
    method: "GET",
    dataType: "json",
    data: {
      address: addressInput,
      key: apiKeys.googleMap
    }
  }).then(result => {
    // empty all fields before loading the content
    app.empty();
    //Display Content of Story

    //console log google api result
    console.log(result);
    //console log google api result ends

    app.displayStoryContent(result);
    // Display local time of the place
    app.localTime(result);
    // Display Weather of the place
    app.localWeather(result);
  });
};

// empty all fields before loading the content

app.empty = () => {
  $(".addressTitle").empty();
  $(".story-title").empty();
  $(".story-content").empty();
  $(".story-title-popup").empty();
  $(".weather-details").empty();
  $(".dateTime-details").empty();
};

// displaying the data to DOM

app.displayStoryContent = data => {
  // console.log(data);
  const cityName = data.results[0].address_components[3].long_name;
  const cityName2 = data.results[0].address_components[2].long_name;
  const cityName3 = data.results[0].address_components[1].long_name;

  $(".addressTitle").append(data.results[0].formatted_address);
  // Display Story
  storyData.forEach(stry => {
    if (
      cityName.toLowerCase() === stry.location.toLowerCase() ||
      cityName2.toLowerCase() === stry.location.toLowerCase() ||
      cityName3.toLowerCase() === stry.location.toLowerCase()
    ) {
      $(".story-title").append(stry.title);
      $(".story-content").append(stry.story);
    }
  });
};

// Getting Local Time for the searched location and displaying to DOM

app.localTime = latLong => {
  $.ajax({
    url: "https://api.timezonedb.com/v2.1/get-time-zone",
    method: "GET",
    dataType: "json",
    data: {
      format: "json",
      key: apiKeys.timeZoneKey,
      by: "position",
      lat: latLong.results[0].geometry.location.lat,
      lng: latLong.results[0].geometry.location.lng
    }
  }).then(result => {
    // console.log(result);
    // console.log(`Formatted: ${result.formatted}`);
    // console.log(`Timestamp: ${result.timestamp}`);

    const date = new Date(result.formatted);
    // Display Date and Time
    $(".dateTime-details").append(`
    <li><strong>Current's Date:</strong><br/>${date.getDate()} / ${date.getMonth() +
      1} / ${date.getFullYear()}</li>
    <li><strong>Current Time:</strong><br/>${formatTime(date)}</li>
    <li><strong>Time Zone Abberviation:</strong><br/>${result.abbreviation}</li>
    <li><strong>Time Zone Name:</strong><br/>${result.zoneName}</li>
    `);
  });
};

// 24 hrs to 12 hrs time changing

function formatTime(nowDate) {
  let hr;
  currentDate = `${nowDate.getDate()} / ${nowDate.getMonth() +
    1} / ${nowDate.getFullYear()}`;
  currentTime = `${nowDate.getHours()} / ${nowDate.getMinutes()} / ${nowDate.getSeconds()}`;
  if (nowDate.getHours() === 00) {
    hr = `12 : ${nowDate.getMinutes()} : ${nowDate.getSeconds()} AM`;
  } else if (nowDate.getHours() > 12) {
    hr = `${nowDate.getHours() -
      12} : ${nowDate.getMinutes()} : ${nowDate.getSeconds()} PM`;
  } else if (nowDate.getHours() < 12) {
    hr = `${nowDate.getHours()} : ${nowDate.getMinutes()} : ${nowDate.getSeconds()} AM`;
  } else if (nowDate.getHours() === 12) {
    hr = `12 : ${nowDate.getMinutes()} : ${nowDate.getSeconds()} PM`;
  }
  return hr;
}

// Getting Local weather and displaying to DOM

app.localWeather = latLong => {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    dataType: "json",
    data: {
      lat: latLong.results[0].geometry.location.lat,
      lon: latLong.results[0].geometry.location.lng,
      units: "metric",
      appid: apiKeys.weatherKey
    }
  }).then(result => {
    const weatherDetails = {};
    weatherDetails.cityName = result.name;
    weatherDetails.currentTemp = result.main.temp;
    weatherDetails.humidity = result.main.humidity;
    weatherDetails.tempMax = result.main.temp_max;
    weatherDetails.tempMin = result.main.temp_min;
    //console.log(result);
    //Weather Details

    $(".story-title-popup").append(weatherDetails.cityName);
    $(".weather-details").append(`
    <li><strong>Temperature:</strong><br/>${
      weatherDetails.currentTemp
    }&#xb0; C</li>
    <li><strong>Max Temperature:</strong><br/>${
      weatherDetails.tempMax
    }&#xb0; C</li>
    <li><strong>Min Temperature:</strong><br/>${
      weatherDetails.tempMin
    }&#xb0; C</li>
    <li><strong>Humidity:</strong><br/>${weatherDetails.humidity}%</li>
    `);
  });
};

// Document Ready

$(function() {
  app.init();
});
