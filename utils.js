var geoip = require("geoip-lite");

exports.getCity = async (ip) => {
  try {
    var geo = geoip.lookup(ip);

    return geo.city;
  } catch (error) {
    console.log(error);
  }
};

exports.getTemprature = async (city) => {
  const apiKey = "a8f3cd8ca6ab43dbbebeb6b334d6ac95";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    const temprature = Math.round(data?.main?.temp);

    return temprature;
  } catch (error) {
    console.log(error);
  }
};
