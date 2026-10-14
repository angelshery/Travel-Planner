//const apiKey = "rc_live_cfd4d1305e4a47ddbde93be69bc81312";

const searchBox = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", searchCountry);

async function searchCountry() {
    const country = searchBox.value.trim();

    if (country === "") {
        document.getElementById("message").textContent =
            "Please enter a country name.";
        return;
    }

    try {
        const response = await fetch(
            `https://countries.dev/name/${encodeURIComponent(country)}`,
            
        );

        if (!response.ok) {
            throw new Error("API error: " + response.status);
        }

        const data = await response.json();
        const result = data[0].name;

        document.getElementById("countryCard").classList.remove("hidden");
        document.getElementById("message").textContent = "";

        document.getElementById("countryName").textContent =
            result.names.common;

        document.getElementById("flag").src = result.flag.svg;

        document.getElementById("capital").textContent =
            result.capitals?.join(", ") || "N/A";

        document.getElementById("population").textContent =
            result.population?.toLocaleString() || "N/A";

        document.getElementById("region").textContent =
            result.region || "N/A";

        document.getElementById("currency").textContent =
            Object.values(result.currencies || {})
                .map(item => item.name)
                .join(", ") || "N/A";

        document.getElementById("language").textContent =
            Object.values(result.languages || {})
                .join(", ") || "N/A";

    } catch (error) {
        console.log(error);
        document.getElementById("message").textContent =
            "Could not load country information. Check your API key or country name.";
    }
}