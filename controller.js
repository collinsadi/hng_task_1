const { getCity, getTemprature } = require("./utils");

exports.greeting = async (req, res) => {
  const visitorName = req.query.visitor_name;
  const city = await getCity(req.ip);
  const temprature = await getTemprature(city);

  try {
    if (!visitorName) {
      return res.status(422).json({
        status: false,
        message: "Could You Please provide your name??",
      });
    }

    res.status(200).json({
      client_ip: req.ip,
      location: city,
      greeting: `Hello ${visitorName}!, the temperature is ${temprature} degrees Celcius in ${city}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
