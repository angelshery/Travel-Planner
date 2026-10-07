API_KEY = "rc_live_cfd4d1305e4a47ddbde93be69bc81312"

const input = document.getElementById("countryInput");
const button = document.getElementById("searchButton");
const message = document.getElementById("message");
const card = document.getElementById("card");
const flag = document.getElementById("flag");
const countryName = document.getElementById("countryName");
const capital = document.getElementById("capital");
const population = document.getElementById("population");
const region = document.getElementById("region");
const currency = document.getElementById("currency");
const language = document.getElementById("language");

async function searchCountry(){
    const country = input.value.trim();
    if (country ===""){
        message.textContent = "Please enter a country name.";
        return;
    }
    try{
        const response = await fetch('https://api.restcountries.com/countries/v5/codes.alpha_2/CA?pretty=1',
    { headers: { 'Authorization': 'Bearer ${API_KEY}' } });
    const data = await response.json();
    }
    catch{
        
    }

}

button.addEventListener("click", searchCountry);