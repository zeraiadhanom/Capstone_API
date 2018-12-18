

'use strict';

const apiKey = '20b7f5cb0ac546e6bd0d8944a2b34cd1'
const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y?order=by-date&offset=40&apikey=" + apiKey;

function getNews() {


  fetch(url)
    .then(response => response.json())
    .then(responseJson => {
     console.log(responseJson.results[0].display_title)
      displayResults(responseJson.results);
        })
      .catch(error => 
        console.log('Something went wrong. Try again later.')
      );
}

$(getNews);

function listMovies() {

  $('.js-search-form').on('submit', function(event) {
  event.preventDefault();
    $('.js-search-results').html('');
    let searchData = $('#searchTextField').val();
        console.log(searchData);
    let expression = new RegExp(searchData, 'i');

    $.getJSON(url, function(data){
        $.each(data.results, function(index, value){
          if(value.display_title.search(expression) != -1 || value.headline.search(expression) != -1) {
            console.log(value.display_title + value.headline);
          }
        })
    })          
  })
}

$(listMovies);






