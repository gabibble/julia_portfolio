let projectCards = document.querySelector("#project-cards")

let projects = [
  {
    name: "BeFunky Pricing Page & Upgrade Modal",
    link: "https://www.befunky.com/pricing/",
    alt: "BeFunky upgrade modal comparing Plus and Pro plans",
    img: "befunky-pricing.webp",
  },
  {
    name: "Steve Barry, Writer & Editor Portfolio",
    link: "https://stevebarrywrites.com/",
    alt: "Steve Barry writer and editor portfolio website",
    img: "steve-barry.webp",
  },
  {
    name: "Artist Website",
    link: "https://www.polkaprints.com/",
    alt: "polka prints website",
    img: "polka.webp",
  },
  {
    name: "Musician Website",
    link: "https://esobee.netlify.app/",
    alt: "esobee website",
    img: "esobee.webp",
  },
  {
    name: "Trip Planner App",
    link: "https://trip-up-cc461.web.app/",
    alt: "trip planner website",
    img: "tripapp.webp",
  },
  {
    name: "Mock Theater Website",
    link: "https://francis-theater-mockup.netlify.app/",
    alt: "francis theater mock website",
    img: "francis.webp",
  },
];


projects.map(
  (proj) =>
    (projectCards.innerHTML += `<div class="col-md-4 col-sm-6">
          <a href="${proj.link}" target="_blank" rel="noopener">
            <img
              class="img-fluid shadow-sm"
              width="800"
              height="545"
              loading="lazy"
              src="/images/${proj.img}"
              alt="${proj.alt}"
            />
            <h5 class="project-title mt-2 mb-5">${proj.name}</h5>
          </a>
        </div>`)
);