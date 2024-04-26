// const yelp = require('yelp-fusion');
const apiKey = 'ic79KDMtLm1Tk9-7iz7c6V2o4Z6kvLkieWsW7b4tjoLKF1D72w9pDfIVjYwsLPd3ULhYuw8I8JcluHJROsl4eh3vzm9XE7gNeHL4SJ5yBPtornbFgNL6KVAkgPwqZnYx' //Add your key here
// const client = yelp.client(apiKey);
const options = {method: 'GET', headers: {accept: 'application/json', Authorization: `Bearer ${apiKey}`}};

fetch('https://api.yelp.com/v3/businesses/search?location=Denver&term=pho&radius=39000&sort_by=best_match&limit=50', options)
.then((response) => response.json())
  .then(response => { 
    //console.log(data)
  
    for(let i = 0; i< response.businesses.length; i++) {
        if(response.businesses[i].location) {
            if(response.businesses[i].name == 'Pho Haus') {
                console.log(response.businesses[i])
            }}
           // console.log(response.businesses[i].location, 'response', response.businesses)
        }})
    // }
    // })
  .catch(err => console.error(err));

//   client.search({
//     term: 'restaurant',
//     location: 'San Francisco, CA',
//     limit: 10
//   }).then(response => {
//     console.log(response.jsonBody.businesses);
//   }).catch(e => {
//     console.log(e);
//   });