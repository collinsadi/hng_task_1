
exports.getCity = async (ip) => {
  try {
    const response = await fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=88ae41e6f69c4faeae1aee1fe413b53c&ip=${ip}`,
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
