require("dotenv").config();
exports.getCity = async (ip) => {
  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_GEO_KEY}&ip=${ip}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    return data.city;
  } catch (error) {
    console.log(error);
  }
};

exports.getTemprature = async (city) => {
  const apiKey = process.env.OPEN_WEATHER_KEY;
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
