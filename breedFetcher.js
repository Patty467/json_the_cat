const request = require("request");
const breedName = process.argv[2];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  (error, response, body) => {
    if (error) {
      console.error(error);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error(`Request failed with status code ${response.statusCode}`);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Breed name not found");
    } else {
      console.log(data[0].description);
    }
  }
);

