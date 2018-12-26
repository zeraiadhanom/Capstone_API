<<<<<<< HEAD


'use strict';

const apiKey = '20b7f5cb0ac546e6bd0d8944a2b34cd1'

const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&apikey=" + apiKey;

function movieReviews(searchData) {
  
  let fullURL = `${url}&query=${searchData}`;

  fetch(fullURL)
    .then(response => response.json())
      .then(responseJson => {
        displayResults(responseJson)
        })
      .catch(error => console.log('Something went wrong. Try again later.'));
}

  // looping throuh API array
 function displayResults(responseJson) {
   //clean any displayed item;
   $('.list').html('');

       // Show a retry message if user enters invalid input or if item is not availble; 
       
   if(responseJson.results.length === 0) {
     $('#notFound').removeClass('hidden')
     $('#notFound').html('No movie availble with your search. Please try again.')
     
   }
   
     // looping through list of movies
    for (let i = 0; i < responseJson.results.length; i++){

      //format image link
      let newLink = responseJson.results[i].multimedia.src.split('-'); 
    
 // display result on hml
         
         $('.list').append(`<li class="list-group">
         <img src="${responseJson.results[i].multimedia.src}" class="img-thumbnail" </li>
         <section>
         <h1>${responseJson.results[i].display_title}</h1>
         <p>${responseJson.results[i].headline}</p></br>
         <p>${"Short Summary:" + " " + responseJson.results[i].summary_short}</p></br>
         <p>${"Publication date:" + " " + responseJson.results[i].publication_date}</p>
         <p>${"Updated date: " + " " + responseJson.results[i].date_updated}</p>
         <a href=${responseJson.results[i].link.url}>${responseJson.results[i].display_title}</a>
        </section>`);
    }
} 

// event listner; input search item and assign to searchData varibale.
function watchForm() {
  $('.js-search-form').submit(function(event){
    event.preventDefault();
   const searchData = $('.js-query-title').val();
    $('.js-query-title').val('');

   movieReviews(searchData);
  });
} 

$(watchForm); 

=======


'use strict';

const apiKey = '20b7f5cb0ac546e6bd0d8944a2b34cd1'

const url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&apikey=" + apiKey;

function movieReviews(title) {
  
  let fullURL = `${url}&query:${title}`
  fetch(fullURL)
  //console.log(fullURL)
    .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson)
        displayResults(responseJson)
        })
      .catch(error => alert('Something went wrong. Try again later.'));
}

//why this is not working?
 function displayResults(responseJson) {
    for (let i = 0; i < responseJson.results.length; i++){
   // console.log(responseJson.results[i].display_title);
  
  // Below line makes image is to link to anther image with high resolution
   /* let newLink = responseJson.results[i].multimedia.src.split('-'); 
    responseJson.results[i].multimedia.src = newLink[0] + "-superJumbo.jpg?quality=90&auto=webp"; */

         $('#results').html('')
         $('#results').append(`<li class="list-group">
         <img src="${responseJson.results[i].multimedia.src}" class="img-thumbnail" </li>
         <section>
         <h1>${responseJson.results[i].display_title}</h1>
         <p>${responseJson.results[i].headline}</p></br>
         <p>${"Short Summary:" + " " + responseJson.results[i].summary_short}</p></br>
         <p>${"Publication date:" + " " + responseJson.results[i].publication_date}</p>
         <p>${"Updated date: " + " " + responseJson.results[i].date_updated}</p>
         <a href=${responseJson.results[i].link.url}>${responseJson.results[i].display_title}</a>
        </section>`);
   
    }
} 

  
function watchForm() {
  $('.js-search-form').submit(function(event){
    event.preventDefault();
   const searchData = $('.js-query-title').val();
     console.log(searchData);
    $('.js-query-title').val('');

   movieReviews(searchData);
  });
} 

//$(movieReviews);
//$(displayResults);
$(watchForm); 

>>>>>>> b31fb1eccd773e9b3a6c1531d678e3e75de5af09
