const covid = () => {
    fetch("https://data.covid19india.org/v4/min/data.min.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // console.log(data.AN.delta.tested)
            // console.log(data.AN.delta21_14.confirmed)

            document.getElementById("confirmed").innerHTML =
                data.AN.delta21_14.confirmed;
            document.getElementById("tested").innerHTML = data.AN.delta.tested;
            document.getElementById("vaccinated1").innerHTML =
                data.AN.delta.vaccinated1;
            document.getElementById("vaccinated2").innerHTML =
                data.AN.delta.vaccinated2;
            document.getElementById("recovered").innerHTML = data.AN.delta7.recovered;
        })
        .catch((err) => console.log(err));
};