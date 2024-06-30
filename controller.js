const { getCountry, getTemprature } = require("./utils");

exports.greeting = async (req, res) => {
  const visitorName = req.query.visitor_name;
  const country = await getCountry(req.ip);
  const temprature = await getTemprature(country);

  try {
    if (!visitorName) {
      return res.status(422).json({
        status: false,
        message: "Could You Please provide your name??",
      });
    }

    res.status(200).json({
      client_ip: req.ip,
      location: country,
      greeting: `Hello ${visitorName}!, the temperature is ${temprature} degrees Celcius in ${country}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
