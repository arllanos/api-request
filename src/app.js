const axios = require('axios');

const id = 1;
const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const response = axios.get(url).then((response) => {
  console.log(response.data.name);
}
).catch((error) => {  
  console.log(error);
});


// const response = fetch(url)

// response.then((response) => {
//   return response.json();
// }
// ).then((data) => { 
//   console.log(data.name);
// }
// ).catch((error) => {    
//   console.log(error);
// });

