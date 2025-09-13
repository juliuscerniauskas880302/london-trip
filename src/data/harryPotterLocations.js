import leadenhall_market from "../assets/images/harry_potter/leadenhall_market.png";
import king_cross_station_9_3_4 from "../assets/images/harry_potter/king_cross_station_9_3_4.png";
import st_pancras_station from "../assets/images/harry_potter/st_pancras_station.png";
import london_zoo_reptile_house from "../assets/images/harry_potter/london_zoo_reptile_house.png";
import scotland_place_order_of_the_phoenix from "../assets/images/harry_potter/scotland_place_order_of_the_phoenix.png";
import borough_market from "../assets/images/harry_potter/borough_market.png";
import lambeth_bridge from "../assets/images/harry_potter/lambeth_bridge.png";
import claremont_square from "../assets/images/harry_potter/claremont_square.png";
import australia_house from "../assets/images/harry_potter/australia_house.png";
import millennium_bridge from "../assets/images/harry_potter/millennium_bridge.png";

const harryPotterLocations = [
  {
    id: "leadenhall",
    title: "Leadenhall Market",
    description:
      "Used as the entrance to Diagon Alley in 'Harry Potter and the Philosopher's Stone'.",
    address: "Gracechurch St, London EC3V 1LT, United Kingdom",
    imageUrl: leadenhall_market,
    mapCoords: "51.5123,-0.0830",
    website: null,
  },
  {
    id: "kingscross",
    title: "King's Cross Station",
    description:
      "Home of Platform 9¾, where students board the Hogwarts Express.",
    address: "Euston Rd., London N1C 4AP, United Kingdom",
    imageUrl: king_cross_station_9_3_4,
    mapCoords: "51.5308,-0.1238",
    website: null,
  },
  {
    id: "stpancras",
    title: "St Pancras Station",
    description: "Used as the exterior for King's Cross Station in the films.",
    address: "Euston Rd, London NW1 2QP",
    imageUrl: st_pancras_station,
    mapCoords: "51.5316,-0.1264",
    website: null,
  },
  {
    id: "londonzoo",
    title: "London Zoo (Reptile House)",
    description:
      "Where Harry speaks Parseltongue to a snake in the first film.",
    address: "Outer Cir, London NW1 4RY, United Kingdom",
    imageUrl: london_zoo_reptile_house,
    mapCoords: "51.5353,-0.1534",
    website: null,
  },
  {
    id: "scotlandplace",
    title: "Scotland Place",
    description: "Entrance to the Ministry of Magic in *Order of the Phoenix*.",
    address: "London SW1A 2BD, UK",
    imageUrl: scotland_place_order_of_the_phoenix,
    mapCoords: "51.50615046670935, -0.12561263833263064",
    website: null,
  },
  {
    id: "boroughmarket",
    title: "Borough Market",
    description: "Exterior of the Leaky Cauldron in *Prisoner of Azkaban*.",
    address: "London SE1 9AL, United Kingdom",
    imageUrl: borough_market,
    mapCoords: "51.5056033680135, -0.09048215741804065",
    website: "https://boroughmarket.org.uk/",
  },
  {
    id: "lambethbridge",
    title: "Lambeth Bridge",
    description: "Where the Knight Bus squeezes between two double-deckers.",
    address: "Lambeth Rd, London SE1 7SG, United Kingdom",
    imageUrl: lambeth_bridge,
    mapCoords: "51.49471690359782, -0.12325391809012586",
    website: null,
  },
  {
    id: "claremontsquare",
    title: "Claremont Square",
    description:
      "Used as the exterior of Grimmauld Place, HQ of the Order of the Phoenix.",
    address: "Claremont Square, London N1 9LY",
    imageUrl: claremont_square,
    mapCoords: "51.5304,-0.1123",
    website: null,
  },
  {
    id: "australiahouse",
    title: "Australia House",
    description: "Interior used for Gringotts Wizarding Bank.",
    address: "Strand, London WC2B 4LA",
    imageUrl: australia_house,
    mapCoords: "51.5132,-0.1195",
    website: null,
  },
  {
    id: "millenniumbridge",
    title: "Millennium Bridge",
    description: "Destroyed by Death Eaters in *Half-Blood Prince*.",
    address: "Thames Embankment, London EC4V 3QH, United Kingdom",
    imageUrl: millennium_bridge,
    mapCoords: "51.50967134484602, -0.0985434071097104",
    website: null,
  },
];

export default harryPotterLocations;
