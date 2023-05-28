// Déclaration des chanteurs avec leurs informations
const singers = [
  {
    name: "John Lennon",
    country: "Angleterre",
    tessitura: "Ténor",
    ambitus: "C3 - C6",
    birthDate: "9 octobre 1940",
    deathDate: "8 décembre 1980",
    wikipediaLink: "https://fr.wikipedia.org/wiki/John_Lennon",
  },
  {
    name: "Freddie Mercury",
    country: "Angleterre",
    tessitura: "Baryton",
    ambitus: "F2 - F5",
    birthDate: "5 septembre 1946",
    deathDate: "24 novembre 1991",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Freddie_Mercury",
  },
  {
    name: "Maria Callas",
    country: "Grèce",
    tessitura: "Soprano",
    ambitus: "B♭3 - E6",
    birthDate: "2 décembre 1923",
    deathDate: "16 septembre 1977",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Maria_Callas",
  },
  {
    name: "Luciano Pavarotti",
    country: "Italie",
    tessitura: "Ténor",
    ambitus: "C3 - B5",
    birthDate: "12 octobre 1935",
    deathDate: "6 septembre 2007",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Luciano_Pavarotti",
  },
  {
    name: "Whitney Houston",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "B♭3 - E6",
    birthDate: "9 août 1963",
    deathDate: "11 février 2012",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Whitney_Houston",
  },
  {
    name: "Andrea Bocelli",
    country: "Italie",
    tessitura: "Ténor",
    ambitus: "C3 - G5",
    birthDate: "22 septembre 1958",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Andrea_Bocelli",
  },
  {
    name: "Edith Piaf",
    country: "France",
    tessitura: "Soprano",
    ambitus: "C4 - C6",
    birthDate: "19 décembre 1915",
    deathDate: "10 octobre 1963",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Édith_Piaf",
  },
  {
    name: "Beyoncé",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "G3 - F#6",
    birthDate: "4 septembre 1981",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Beyoncé",
  },
  {
    name: "Elvis Presley",
    country: "États-Unis",
    tessitura: "Baryton",
    ambitus: "G2 - B♭5",
    birthDate: "8 janvier 1935",
    deathDate: "16 août 1977",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Elvis_Presley",
  },
  {
    name: "Céline Dion",
    country: "Canada",
    tessitura: "Contralto",
    ambitus: "G3 - C6",
    birthDate: "30 mars 1968",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Céline_Dion",
  },
  {
    name: "Frank Sinatra",
    country: "États-Unis",
    tessitura: "Baryton",
    ambitus: "E♭2 - B♭4",
    birthDate: "12 décembre 1915",
    deathDate: "14 mai 1998",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Frank_Sinatra",
  },
  {
    name: "Aretha Franklin",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "B♭2 - B♭5",
    birthDate: "25 mars 1942",
    deathDate: "16 août 2018",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Aretha_Franklin",
  },
  {
    name: "Lucia Popp",
    country: "Slovaquie",
    tessitura: "Soprano",
    ambitus: "F#3 - F6",
    birthDate: "12 novembre 1939",
    deathDate: "16 novembre 1993",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Lucia_Popp",
  },
  {
    name: "Diana Ankudinova",
    country: "Russie",
    tessitura: "Contralto",
    ambitus: "C3 - B♭5",
    birthDate: "12 novembre 2003",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Diana_Ankudinova",
  },
  {
    name: "Michael Jackson",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "B2 - B♭6",
    birthDate: "29 août 1958",
    deathDate: "25 juin 2009",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Michael_Jackson",
  },
  {
    name: "Adele",
    country: "Royaume-Uni",
    tessitura: "Mezzo-soprano",
    ambitus: "B2 - D6",
    birthDate: "5 mai 1988",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Adele_(chanteuse)",
  },
  {
    name: "Lucie Arnaz",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "A3 - F6",
    birthDate: "17 juillet 1951",
    deathDate: "",
    wikipediaLink: "https://en.wikipedia.org/wiki/Lucie_Arnaz",
  },
  {
    name: "Stevie Wonder",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "G2 - C6",
    birthDate: "13 mai 1950",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Stevie_Wonder",
  },
  {
    name: "Mariah Carey",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "F2 - G7",
    birthDate: "27 mars 1969",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Mariah_Carey",
  },
  {
    name: "Sam Smith",
    country: "Royaume-Uni",
    tessitura: "Contreténor",
    ambitus: "D3 - G5",
    birthDate: "19 mai 1992",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Sam_Smith",
  },
  {
    name: "Barbra Streisand",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "A2 - F♯6",
    birthDate: "24 avril 1942",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Barbra_Streisand",
  },
  {
    name: "Amy Winehouse",
    country: "Royaume-Uni",
    tessitura: "Mezzo-soprano",
    ambitus: "C3 - C6",
    birthDate: "14 septembre 1983",
    deathDate: "23 juillet 2011",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Amy_Winehouse",
  },
  {
    name: "Janis Joplin",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "A2 - C6",
    birthDate: "19 janvier 1943",
    deathDate: "4 octobre 1970",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Janis_Joplin",
  },
  {
    name: "Chris Cornell",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "E2 - F5",
    birthDate: "20 juillet 1964",
    deathDate: "18 mai 2017",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Chris_Cornell",
  },
  {
    name: "Alicia Keys",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "G♯2 - C6",
    birthDate: "25 janvier 1981",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Alicia_Keys",
  },
  {
    name: "David Bowie",
    country: "Royaume-Uni",
    tessitura: "Ténor",
    ambitus: "C2 - B5",
    birthDate: "8 janvier 1947",
    deathDate: "10 janvier 2016",
    wikipediaLink: "https://fr.wikipedia.org/wiki/David_Bowie",
  },
  {
    name: "Ariana Grande",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "E3 - C7",
    birthDate: "26 juin 1993",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Ariana_Grande",
  },
  {
    name: "Bob Marley",
    country: "Jamaïque",
    tessitura: "Ténor",
    ambitus: "D3 - B5",
    birthDate: "6 février 1945",
    deathDate: "11 mai 1981",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Bob_Marley",
  },
  {
    name: "Christina Aguilera",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "C3 - E♭6",
    birthDate: "18 décembre 1980",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Christina_Aguilera",
  },
  {
    name: "Prince",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "G2 - G6",
    birthDate: "7 juin 1958",
    deathDate: "21 avril 2016",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Prince_(musicien)",
  },
  {
    name: "Ella Fitzgerald",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "B♭3 - E♭6",
    birthDate: "25 avril 1917",
    deathDate: "15 juin 1996",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Ella_Fitzgerald",
  },
  {
    name: "Justin Timberlake",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "G2 - G5",
    birthDate: "31 janvier 1981",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Justin_Timberlake",
  },
  {
    name: "Nina Simone",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "G♯2 - E6",
    birthDate: "21 février 1933",
    deathDate: "21 avril 2003",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Nina_Simone",
  },
  {
    name: "Axl Rose",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "A1 - B♭5",
    birthDate: "6 février 1962",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Axl_Rose",
  },
  {
    name: "Jennifer Hudson",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "G♯2 - E♭6",
    birthDate: "12 septembre 1981",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Jennifer_Hudson",
  },
  {
    name: "Lana Del Rey",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "C3 - F♯5",
    birthDate: "21 juin 1985",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Lana_Del_Rey",
  },
  {
    name: "Tony Bennett",
    country: "États-Unis",
    tessitura: "Baryton",
    ambitus: "C2 - F5",
    birthDate: "3 août 1926",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Tony_Bennett",
  },
  {
    name: "Billie Eilish",
    country: "États-Unis",
    tessitura: "Soprano",
    ambitus: "B2 - E6",
    birthDate: "18 décembre 2001",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Billie_Eilish",
  },
  {
    name: "Lionel Richie",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "D2 - B5",
    birthDate: "20 juin 1949",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Lionel_Richie",
  },
  {
    name: "Demi Lovato",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "G♯2 - E♭6",
    birthDate: "20 août 1992",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Demi_Lovato",
  },
  {
    name: "Florent Pagny",
    country: "France",
    tessitura: "Ténor",
    ambitus: "A2 - G5",
    birthDate: "6 novembre 1961",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Florent_Pagny",
  },
  {
    name: "Garou",
    country: "Canada",
    tessitura: "Baryton",
    ambitus: "G2 - G5",
    birthDate: "26 juin 1972",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Garou_(chanteur)",
  },
  {
    name: "Mika",
    country: "Liban",
    tessitura: "Ténor",
    ambitus: "B2 - D6",
    birthDate: "18 août 1983",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Mika_(chanteur)",
  },
  {
    name: "Shakira",
    country: "Colombie",
    tessitura: "Mezzo-soprano",
    ambitus: "G2 - E6",
    birthDate: "2 février 1977",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Shakira",
  },
  {
    name: "Rita Ora",
    country: "Royaume-Uni",
    tessitura: "Soprano",
    ambitus: "B3 - E6",
    birthDate: "26 novembre 1990",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Rita_Ora",
  },
  {
    name: "Nico Santos",
    country: "Allemagne",
    tessitura: "Baryton",
    ambitus: "B2 - B♭5",
    birthDate: "7 janvier 1993",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Nico_Santos",
  },
  {
    name: "Moniqué",
    country: "Pologne",
    tessitura: "Soprano",
    ambitus: "E3 - E6",
    birthDate: "7 juillet 1995",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Monika_Kuszyńska",
  },
  {
    name: "Marina Kaye",
    country: "France",
    tessitura: "Soprano",
    ambitus: "E♭3 - E♭6",
    birthDate: "9 février 1998",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Marina_Kaye",
  },
  {
    name: "Lilian Renaud",
    country: "France",
    tessitura: "Ténor",
    ambitus: "C♯2 - G♯5",
    birthDate: "17 août 1991",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Lilian_Renaud",
  },
  {
    name: "Kendji Girac",
    country: "France",
    tessitura: "Ténor",
    ambitus: "A2 - G♯5",
    birthDate: "3 juillet 1996",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Kendji_Girac",
  },
  {
    name: "Slimane",
    country: "France",
    tessitura: "Ténor",
    ambitus: "G2 - G♯5",
    birthDate: "13 octobre 1989",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Slimane_(chanteur)",
  },
  {
    name: "Adam Levine",
    country: "États-Unis",
    tessitura: "Ténor",
    ambitus: "A2 - G5",
    birthDate: "18 mars 1979",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Adam_Levine",
  },
  {
    name: "Kelly Clarkson",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "A2 - G♯5",
    birthDate: "24 avril 1982",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Kelly_Clarkson",
  },
  {
    name: "Kelly Rowland",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "F♯3 - C♯6",
    birthDate: "11 février 1981",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Kelly_Rowland",
  },
  {
    name: "Dimash Kudaibergenov",
    country: "Kazakhstan",
    tessitura: "Ténor",
    ambitus: "D2 - G5",
    birthDate: "24 mai 1994",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Dimash_Kudaibergen",
  },
  {
    name: "Tina Karol",
    country: "Ukraine",
    tessitura: "Mezzo-soprano",
    ambitus: "F3 - G♯6",
    birthDate: "25 janvier 1985",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Tina_Karol",
  },
  {
    name: "Rea Garvey",
    country: "Irlande",
    tessitura: "Baryton",
    ambitus: "C♯2 - G♯5",
    birthDate: "3 mai 1973",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Rea_Garvey",
  },
  {
    name: "Eros Ramazzotti",
    country: "Italie",
    tessitura: "Ténor",
    ambitus: "D2 - G5",
    birthDate: "28 octobre 1963",
    deathDate: "",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Eros_Ramazzotti",
  },
  {
    name: "Tina Turner",
    country: "États-Unis",
    tessitura: "Mezzo-soprano",
    ambitus: "E3 - C6",
    birthDate: "26 novembre 1939",
    deathDate: "24 mai 2023",
    wikipediaLink: "https://fr.wikipedia.org/wiki/Tina_Turner",
  },
];

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
      singerName.textContent = singer.name;
      singerCard.appendChild(singerName);

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
