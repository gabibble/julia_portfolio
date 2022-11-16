let projectCards = document.querySelector("#project-cards")

let projects = [
  {
    name: "Trip Planner App",
    link: "https://trip-up-cc461.web.app/",
    alt: "trip planner website",
    img: "tripapp.jpg",
  },
  {
    name: "Dictionary",
    link: "https://julia-dictionary-app.netlify.app/",
    alt: "dictionary app",
    img: "dictionary.png",
  },
  {
    name: "Mock Theater Website",
    link: "https://francis-theater-mockup.netlify.app/",
    alt: "francis theater mock website",
    img: "francis.jpg",
  },
  {
    name: "Weather App",
    link: "https://juliaweatherapp.netlify.app/",
    alt: "weather app",
    img: "weather.png",
  },
  {
    name: "Musician Website",
    link: "https://www.esobeemusic.com/",
    alt: "esobee website",
    img: "esobee.png",
  },
  {
    name: "Artist Website",
    link: "https://www.polkaprints.com/",
    alt: "polka prints website",
    img: "polka.png",
  },
];


projects.map(
  (proj) =>
    (projectCards.innerHTML += `<div class="col-md-4 col-sm-6">
          <a href=${proj.link} target="_blank">
            <img
              class="img-fluid shadow-sm"
              src="/images/${proj.img}"
              alt=${proj.alt}
            />
            <h5 class="project-title mt-2 mb-5">${proj.name}</h5>
          </a>
        </div>`)
);