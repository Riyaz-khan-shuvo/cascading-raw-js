const country = document.getElementById("Country");

country.addEventListener("change", () => {
    fetch(`/Cascading/State?id=${country.value}`)
        .then(res => res.json())
        .then(data => {
            data.map((country, index) => {
                GetSingleState(country)
            })
        })
})

const state = document.getElementById("State");

state.addEventListener("change", () => {
    fetch(`/Cascading/city?id=${state.value}`)
        .then(res => res.json())
        .then(data => {
            data.map((country, index) => {
                GetSingleCity(country)
            })
        })
})

function GetCountry() {
    fetch("/cascading/country")
        .then(res => res.json())
        .then(data => {
            data.map((country, index) => {
                GetSingleCountry(country)
            })
        })
}
GetCountry();
function GetSingleCountry(data) {
    console.log(data)
    const a = document.createElement("option")
    a.innerText = data.countryName;
    a.value = data.id;
    document.getElementById("Country").appendChild(a);
}

function GetSingleState(data) {
    console.log(data)
    const a = document.createElement("option")
    a.innerText = data.stateName;
    a.value = data.id;
    document.getElementById("State").appendChild(a);
}

function GetSingleCity(data) {
    console.log(data)
    const a = document.createElement("option")
    a.innerText = data.cityName;
    a.value = data.id;
    document.getElementById("City").appendChild(a);
}