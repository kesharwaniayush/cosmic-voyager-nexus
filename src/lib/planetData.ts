export interface MoonInfo {
  name: string;
  diameter: number;
  discovery?: string;
}

export interface PlanetInfo {
  id: string;
  name: string;
  nickname?: string;
  type: 'planet' | 'dwarf planet' | 'star';
  position: number;
  description: string;
  diameter: number;
  mass: string;
  volume: string;
  gravity: number;
  distanceFromSun: number;
  orbitalPeriod: number;
  rotationPeriod: number;
  temperature: number;
  rings?: boolean;
  moons?: MoonInfo[];
  atmosphere?: string;
  composition: string;
  color: string;
  orbitSpeed: number;
  tilt: number;
  funFact?: string;
  discovery?: string;
  image?: string;
}

export const planetData: PlanetInfo[] = [
  {
    id: "sun",
    name: "Sun",
    type: "star",
    position: 0,
    description: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.",
    diameter: 1392700,
    mass: "1.989 × 10^30",
    volume: "1.41 × 10^18",
    gravity: 274,
    distanceFromSun: 0,
    orbitalPeriod: 0,
    rotationPeriod: 609.12,
    temperature: 5505,
    color: "#FDB813",
    orbitSpeed: 0,
    tilt: 7.25,
    composition: "The Sun is composed primarily of hydrogen (73%) and helium (25%) with trace amounts of oxygen, carbon, neon and iron.",
    funFact: "The Sun contains 99.86% of the mass in the Solar System. About one million Earths would be needed to match the size of the Sun.",
    image: '/planets/sun.png'
  },
  {
    id: "mercury",
    name: "Mercury",
    type: "planet",
    position: 1,
    description: "Mercury is the smallest and innermost planet in the Solar System. It has no natural satellites and has a rocky body like Earth. Mercury's surface appears heavily cratered and similar in appearance to the Moon.",
    diameter: 4879,
    mass: "3.3011 × 10^23",
    volume: "6.083 × 10^10",
    gravity: 3.7,
    distanceFromSun: 57909175,
    orbitalPeriod: 88,
    rotationPeriod: 1407.6,
    temperature: 167,
    color: "#A9A9A9",
    orbitSpeed: 47.87,
    tilt: 0.034,
    atmosphere: "Minimal - Sodium, Potassium, Oxygen",
    composition: "Mercury is primarily composed of rock and metals, with a large iron core that makes up about 60% of its mass.",
    funFact: "Mercury's day is longer than its year! It takes 88 Earth days to orbit the Sun but 176 Earth days to rotate once on its axis.",
    image: '/planets/mercury.png'
  },
  {
    id: "venus",
    name: "Venus",
    nickname: "Earth's Twin",
    type: "planet",
    position: 2,
    description: "Venus is the second planet from the Sun and is Earth's closest planetary neighbor. Similar in structure and size to Earth, Venus's thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
    diameter: 12104,
    mass: "4.8675 × 10^24",
    volume: "9.2843 × 10^11",
    gravity: 8.87,
    distanceFromSun: 108208930,
    orbitalPeriod: 224.7,
    rotationPeriod: 5832.5,
    temperature: 464,
    color: "#E6CDA5",
    orbitSpeed: 35.02,
    tilt: 177.4,
    atmosphere: "Carbon Dioxide, Nitrogen, Sulfuric Acid",
    composition: "Venus has a central iron core and a rocky mantle, similar to the composition of Earth.",
    funFact: "Venus rotates backwards compared to most planets, so the Sun rises in the west and sets in the east!",
    image: '/planets/venus.png'
  },
  {
    id: "earth",
    name: "Earth",
    nickname: "Blue Planet",
    type: "planet",
    position: 3,
    description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 71% of Earth's surface is water-covered, and the oceans hold about 96.5% of all Earth's water.",
    diameter: 12756,
    mass: "5.9724 × 10^24",
    volume: "1.08321 × 10^12",
    gravity: 9.8,
    distanceFromSun: 149597890,
    orbitalPeriod: 365.26,
    rotationPeriod: 24,
    temperature: 15,
    color: "#0077FF",
    orbitSpeed: 29.78,
    tilt: 23.44,
    atmosphere: "Nitrogen, Oxygen, Argon, Carbon Dioxide",
    composition: "Earth consists of a solid iron inner core, a liquid iron outer core, a mantle of semi-solid rock, and a crust of solid rock.",
    moons: [
      {
        name: "Moon",
        diameter: 3474,
        discovery: "Prehistoric"
      }
    ],
    funFact: "Earth is the only planet not named after a god. The name comes from the Old English and Germanic words for 'ground'.",
    image: '/planets/earth.png'
  },
  {
    id: "mars",
    name: "Mars",
    nickname: "Red Planet",
    type: "planet",
    position: 4,
    description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System. Mars is often referred to as the 'Red Planet' due to the effect of iron oxide on its surface, which gives it a reddish appearance distinctive among astronomical bodies visible to the naked eye.",
    diameter: 6792,
    mass: "6.4171 × 10^23",
    volume: "1.6318 × 10^11",
    gravity: 3.71,
    distanceFromSun: 227936640,
    orbitalPeriod: 687,
    rotationPeriod: 24.7,
    temperature: -65,
    color: "#E27B58",
    orbitSpeed: 24.13,
    tilt: 25.19,
    atmosphere: "Carbon Dioxide, Nitrogen, Argon",
    composition: "Mars has a dense metallic core composed primarily of iron and nickel covered by a silicate mantle and a solid crust.",
    moons: [
      {
        name: "Phobos",
        diameter: 22.2,
        discovery: "1877, by Asaph Hall"
      },
      {
        name: "Deimos",
        diameter: 12.6,
        discovery: "1877, by Asaph Hall"
      }
    ],
    funFact: "Mars is home to Olympus Mons, the largest volcano and highest known mountain in the Solar System.",
    image: '/planets/mars.png'
  },
  {
    id: "jupiter",
    name: "Jupiter",
    nickname: "Gas Giant",
    type: "planet",
    position: 5,
    description: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
    diameter: 142984,
    mass: "1.8982 × 10^27",
    volume: "1.4313 × 10^15",
    gravity: 23.1,
    distanceFromSun: 778412020,
    orbitalPeriod: 4333,
    rotationPeriod: 9.93,
    temperature: -110,
    color: "#C9834B",
    orbitSpeed: 13.07,
    tilt: 3.13,
    rings: true,
    atmosphere: "Hydrogen, Helium, Methane, Ammonia",
    composition: "Jupiter is composed mainly of hydrogen and helium, which transition from gas to liquid as pressure increases with depth.",
    moons: [
      {
        name: "Io",
        diameter: 3643,
        discovery: "1610, by Galileo Galilei"
      },
      {
        name: "Europa",
        diameter: 3122,
        discovery: "1610, by Galileo Galilei"
      },
      {
        name: "Ganymede",
        diameter: 5268,
        discovery: "1610, by Galileo Galilei"
      },
      {
        name: "Callisto",
        diameter: 4821,
        discovery: "1610, by Galileo Galilei"
      },
      {
        name: "Amalthea",
        diameter: 167,
        discovery: "1892, by E. Barnard"
      }
    ],
    funFact: "Jupiter's Great Red Spot is a giant storm that has been raging for at least 400 years. It's so big that three Earths could fit inside it!",
    image: '/planets/jupiter.png'
  },
  {
    id: "saturn",
    name: "Saturn",
    nickname: "Ringed Planet",
    type: "planet",
    position: 6,
    description: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth. It has only one-eighth the average density of Earth.",
    diameter: 120536,
    mass: "5.6834 × 10^26",
    volume: "8.2713 × 10^14",
    gravity: 9.0,
    distanceFromSun: 1426725400,
    orbitalPeriod: 10759,
    rotationPeriod: 10.7,
    temperature: -140,
    color: "#E9D9A2",
    orbitSpeed: 9.69,
    tilt: 26.73,
    rings: true,
    atmosphere: "Hydrogen, Helium, Methane",
    composition: "Like Jupiter, Saturn is mainly composed of hydrogen and helium, with traces of ammonia, methane, and water ice.",
    moons: [
      {
        name: "Titan",
        diameter: 5149,
        discovery: "1655, by Christiaan Huygens"
      },
      {
        name: "Enceladus",
        diameter: 504,
        discovery: "1789, by William Herschel"
      },
      {
        name: "Mimas",
        diameter: 396,
        discovery: "1789, by William Herschel"
      },
      {
        name: "Tethys",
        diameter: 1062,
        discovery: "1684, by Giovanni Cassini"
      },
      {
        name: "Dione",
        diameter: 1123,
        discovery: "1684, by Giovanni Cassini"
      },
      {
        name: "Rhea",
        diameter: 1527,
        discovery: "1672, by Giovanni Cassini"
      },
      {
        name: "Iapetus",
        diameter: 1470,
        discovery: "1671, by Giovanni Cassini"
      }
    ],
    funFact: "Saturn's rings are made mostly of ice particles with a smaller amount of rocky debris and dust. Some of these particles are as small as a grain of sand, while others are as large as mountains.",
    image: '/planets/saturn.png'
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "planet",
    position: 7,
    description: "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from those of the larger gas giants Jupiter and Saturn.",
    diameter: 51118,
    mass: "8.6810 × 10^25",
    volume: "6.833 × 10^13",
    gravity: 8.69,
    distanceFromSun: 2870972200,
    orbitalPeriod: 30687,
    rotationPeriod: -17.2,
    temperature: -195,
    color: "#9DB4C0",
    orbitSpeed: 6.81,
    tilt: 97.77,
    rings: true,
    atmosphere: "Hydrogen, Helium, Methane",
    composition: "Uranus is composed primarily of rock and various ices, with only about 15% hydrogen and a small amount of helium.",
    moons: [
      {
        name: "Miranda",
        diameter: 472,
        discovery: "1948, by Gerard Kuiper"
      },
      {
        name: "Ariel",
        diameter: 1158,
        discovery: "1851, by William Lassell"
      },
      {
        name: "Umbriel",
        diameter: 1169,
        discovery: "1851, by William Lassell"
      },
      {
        name: "Titania",
        diameter: 1578,
        discovery: "1787, by William Herschel"
      },
      {
        name: "Oberon",
        diameter: 1523,
        discovery: "1787, by William Herschel"
      }
    ],
    funFact: "Uranus rotates on its side, with its axis nearly pointing at the Sun during parts of its orbit. This gives it extreme seasons that last for decades!",
    image: '/planets/uranus.png'
  },
  {
    id: "neptune",
    name: "Neptune",
    nickname: "Blue Giant",
    type: "planet",
    position: 8,
    description: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
    diameter: 49528,
    mass: "1.0243 × 10^26",
    volume: "6.254 × 10^13",
    gravity: 11.0,
    distanceFromSun: 4498252900,
    orbitalPeriod: 60190,
    rotationPeriod: 16.1,
    temperature: -200,
    color: "#3E66F9",
    orbitSpeed: 5.43,
    tilt: 28.32,
    rings: true,
    atmosphere: "Hydrogen, Helium, Methane",
    composition: "Neptune's composition is similar to Uranus – various ices and rock with about 15% hydrogen and a small amount of helium.",
    moons: [
      {
        name: "Triton",
        diameter: 2707,
        discovery: "1846, by William Lassell"
      },
      {
        name: "Nereid",
        diameter: 340,
        discovery: "1949, by Gerard Kuiper"
      },
      {
        name: "Naiad",
        diameter: 58,
        discovery: "1989, by Voyager 2"
      },
      {
        name: "Thalassa",
        diameter: 80,
        discovery: "1989, by Voyager 2"
      },
      {
        name: "Proteus",
        diameter: 420,
        discovery: "1989, by Voyager 2"
      }
    ],
    funFact: "Neptune has the strongest winds in the Solar System, reaching speeds of 2,100 km/h (1,300 mph).",
    discovery: "Discovered in 1846 based on mathematical predictions rather than observation.",
    image: '/planets/neptune.png'
  },
  {
    id: "pluto",
    name: "Pluto",
    nickname: "Dwarf Planet",
    type: "dwarf planet",
    position: 9,
    description: "Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first Kuiper belt object to be discovered and is the largest known dwarf planet. Pluto was originally classified as the ninth planet from the Sun, but was reclassified as a dwarf planet in 2006.",
    diameter: 2376,
    mass: "1.303 × 10^22",
    volume: "7.057 × 10^9",
    gravity: 0.62,
    distanceFromSun: 5906380000,
    orbitalPeriod: 90560,
    rotationPeriod: -153.3,
    temperature: -225,
    color: "#DD9B89",
    orbitSpeed: 4.74,
    tilt: 119.51,
    atmosphere: "Nitrogen, Methane, Carbon Monoxide",
    composition: "Pluto is composed of rock and ice, with a rocky core surrounded by a water ice mantle.",
    moons: [
      {
        name: "Charon",
        diameter: 1212,
        discovery: "1978, by James Christy"
      },
      {
        name: "Nix",
        diameter: 50,
        discovery: "2005, by Hubble Space Telescope"
      },
      {
        name: "Hydra",
        diameter: 55,
        discovery: "2005, by Hubble Space Telescope"
      },
      {
        name: "Kerberos",
        diameter: 12,
        discovery: "2011, by Hubble Space Telescope"
      },
      {
        name: "Styx",
        diameter: 10,
        discovery: "2012, by Hubble Space Telescope"
      }
    ],
    funFact: "Pluto's orbit is so elliptical that at times it's actually closer to the Sun than Neptune!",
    discovery: "Discovered in 1930 by Clyde Tombaugh.",
    image: '/planets/pluto.png'
  }
];
