exports.getCountry = async (ip) => {
  try {
    const response = await fetch(
      `https://api.iplocation.net/?cmd=proxy-check&key=WiZpflF7Hnu7GpuH4bOcI44sOpjg/2ToPux8Btr6Yqw=&ip=${ip}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();
    const country = data?.country_name;

    return country;
  } catch (error) {
    console.log(error);
  }
};

exports.getTemprature = async (country) => {
  const apiKey = "a8f3cd8ca6ab43dbbebeb6b334d6ac95";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  try {
    const response = await fetch(apiUrl + country + `&appid=${apiKey}`);
    const data = await response.json();

    const temprature = Math.round(data?.main?.temp);

    return temprature;
  } catch (error) {
    console.log(error);
  }
};
