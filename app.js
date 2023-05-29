// Fonction pour trier les chanteurs par ordre alphabétique
function sortSingersByName(singers) {
  return singers.sort((a, b) => a.name.localeCompare(b.name));
}

// Fonction pour trier les pays par ordre alphabétique
function sortCountries(countries) {
  return countries.sort((a, b) => a.localeCompare(b));
}

// Fonction pour créer les options du select pour les noms
function createNameOptions() {
  const nameSelect = document.getElementById("name-select");
  nameSelect.innerHTML =
    "<option disabled selected value>--Choisir un artiste--</option>";

  const sortedSingers = sortSingersByName(singers);
  sortedSingers.forEach((singer) => {
    const option = document.createElement("option");
    option.value = singer.name;
    option.textContent = singer.name;
    nameSelect.appendChild(option);
  });
}

// Fonction pour créer les options du select pour les pays
function createCountryOptions() {
  const countrySelect = document.getElementById("country-select");
  countrySelect.innerHTML =
    "<option disabled selected value>--Choisir un pays--</option>";

  const countries = singers.map((singer) => singer.country);
  const sortedCountries = sortCountries([...new Set(countries)]);
  sortedCountries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

// Fonction pour filtrer les chanteurs en fonction des sélections
// Fonction pour filtrer les chanteurs en fonction des sélections
function filterSingers() {
  const nameSelect = document.getElementById("name-select");
  const countrySelect = document.getElementById("country-select");

  const singersContainer = document.getElementById("singers-container");
  const noSingerMessage = document.getElementById("no-singer-message");

  const selectedName = nameSelect.value;
  const selectedCountry = countrySelect.value;

  const filteredSingers = singers.filter((singer) => {
    const nameMatch = selectedName === "" || singer.name === selectedName;
    const countryMatch =
      selectedCountry === "" || singer.country === selectedCountry;

    return nameMatch && countryMatch;
  });

  singersContainer.innerHTML = "";

  if (selectedName !== "") {
    countrySelect.value = ""; // Réinitialise le select "Pays" si un nom est sélectionné
  }

  if (selectedCountry !== "") {
    nameSelect.value = ""; // Réinitialise le select "Nom" si un pays est sélectionné
  }

  if (filteredSingers.length === 0) {
    noSingerMessage.style.display = "block";
  } else {
    noSingerMessage.style.display = "none";

    filteredSingers.forEach((singer) => {
      const singerCard = document.createElement("div");
      singerCard.classList.add("singer-card");

      const singerName = document.createElement("h2");
      singerName.innerHTML = singer.name;
      singerCard.appendChild(singerName);

      const singerCountry = document.createElement("p");
      singerCountry.innerHTML = singer.country;
      singerCard.appendChild(singerCountry);

      const singerInfo = document.createElement("p");
      singerInfo.innerHTML = `<span class="tessitura">${singer.tessitura}</span><br>
      <span class="tessitura">${singer.ambitus}</span><br>
                                    ${singer.birthDate} - <br>
                                    ${singer.deathDate}`;
      singerCard.appendChild(singerInfo);

      const wikipediaLink = document.createElement("a");
      wikipediaLink.href = singer.wikipediaLink;
      wikipediaLink.textContent = "Plus d'infos sur l'artiste";
      singerCard.appendChild(wikipediaLink);

      singersContainer.appendChild(singerCard);
    });
  }
}

// Fonction pour afficher tous les artistes
function showAllSingers() {
  const nameSelect = document.getElementById("name-select");
  const countrySelect = document.getElementById("country-select");

  nameSelect.value = "";
  countrySelect.value = "";

  filterSingers();
}

// Fonction pour afficher/masquer la définition
function toggleAside() {
  const aside = document.querySelector("aside");
  aside.classList.toggle("visible");
}
const closeAsideButton = document.querySelector(".close-aside");
const aside = document.querySelector("aside");

closeAsideButton.addEventListener("click", () => {
  aside.classList.remove("visible");
});

// Initialisation de la page
createNameOptions();
createCountryOptions();
filterSingers();
