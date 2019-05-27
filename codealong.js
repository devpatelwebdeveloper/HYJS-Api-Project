const app = {};
app.key = "3tCrtDh5fuCr0mH9M2qTr1T8YFNh0spP";

//initializing the app
app.init = () => {
  $("form").on("submit", function(event) {
    event.preventDefault();
    const inputVal = $("input").val();
    //console.log(inputVal);
    app.getData(inputVal);
  });
};

// getting the api data
app.getData = query => {
  $.ajax({
    url: "https://api.giphy.com/v1/gifs/search",
    method: "GET",
    dataType: "json",
    data: {
      api_key: app.key,
      q: query
    }
  }).then(results => {
    console.log(results);
    //emptying the data before loading
    $(".results").empty();
    //appending the data
    app.displayGIFS(results.data);
  });
};

// display the gifs when we get the data from api

app.displayGIFS = data => {
  // console.log(data);
  data.forEach(item => {
    //console.log(item);
    const htmlElements = `
          <div class="gif-box">
            <div class="img-box">
                <img src="${item.images.original.url}" alt="">
            </div>
            <p class="gif-title">${item.title}</p>
        </div>
          `;
    $(".results").append(htmlElements);
  });
};

// document ready
$(function() {
  app.init();
});
