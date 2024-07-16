const weather = () => {
  fetch(
    "http://api.weatherapi.com/v1/current.json?key=e03cc834b34f423885253307241107&q=india&aqi=no"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      // console.log(data.location.country);
      // console.log(data.location.name);

      document.getElementById("country").innerHTML = data.location.country;

      document.getElementById("city").innerHTML = data.location.name;

      document.getElementById("region").innerHTML = data.location.region;

      document.getElementById("localtime").innerHTML = data.location.localtime;

      document.getElementById("temp_c").innerHTML = data.current.temp_c;

      document.getElementById("temp_f").innerHTML = data.current.temp_f;

      document.getElementById("text").innerHTML = data.current.condition.text;

      document.getElementById("wind_mph").innerHTML = data.current.wind_mph;

      document.getElementById("wind_kph").innerHTML = data.current.wind_kph;

      document.getElementById("wind_degree").innerHTML =
        data.current.wind_degree;

      document.getElementById("wind_dir").innerHTML = data.current.wind_dir;

      document.getElementById("uv").innerHTML = data.current.uv;
    })
    .catch((err) => console.log(err));
};
