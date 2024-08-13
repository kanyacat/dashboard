import axios from "axios";

/* перенести в env */
const API_KEY = "1b40354979024edd9dc84031243107";

export const weatherAPI = async (city: string) => {
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}`;

  return await axios
    .get(URL)
    .then(function (response) {
      return response.data;
    })
    .catch((error) => console.log(error));
};
