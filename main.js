document.addEventListener('DOMContentLoaded', () => {
let restName = '';
// argument would be name of restaurant
function fetchData (restName) {
const apiKey = 'ic79KDMtLm1Tk9-7iz7c6V2o4Z6kvLkieWsW7b4tjoLKF1D72w9pDfIVjYwsLPd3ULhYuw8I8JcluHJROsl4eh3vzm9XE7gNeHL4SJ5yBPtornbFgNL6KVAkgPwqZnYx' //Add your key here
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: `Bearer ${apiKey}`}};

fetch('https://api.yelp.com/v3/businesses/search?location=Denver&term=pho&radius=39000&sort_by=best_match&limit=50', options)
.then((response) => {
    return response.json()})
.then(data => { 
    //console.log(data)
    //grab "text-search" from html 

    const displayBox = document.getElementById('restaurant-info')
    displayBox.innerHTML = '';
    // iterate through our data and looking for the restaurant name
    for(let i = 0; i < data.businesses.length; i++) {
        console.log('console', data.businesses[i].name)
        // if(data.businesses[i].address){
            if(data.businesses[i].name == restName) {
               // console.log(data.businesses[i])
    
               const restInfo = document.createElement('p');
                restInfo.textContent = `${data.businesses[i]}`
                displayBox.appendChild(restInfo)
            }}
           // console.log(response.businesses[i].location, 'response', response.businesses)
        })
    // }
    // })
  .catch(err => console.error('fail to fetch', err));

//   client.search({
//     term: 'restaurant',
//     location: 'San Francisco, CA',
//     limit: 10
//   }).then(response => {
//     console.log(response.jsonBody.businesses);
//   }).catch(e => {
//     console.log(e);
//   });
    }
    fetchData(restName);

})
    
console.log(fetchData('pho haus'))

// copy the text on the web browser to actually search that restaurant in the yelp


// set up event listener that happens with right click and select mukbang extension that link
// to yelp website

// need to think about how it shows in our html 
/*
add script with yelp.com
sync with yelp with api and populate on our html with our own design???

*/


/*

once you grab the restName on the browser, 
eventListener trigger by right click 

fetchData should paas in one argument with restaurnat name 
it should 

*/