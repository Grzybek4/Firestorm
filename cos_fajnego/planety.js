function renderPlanets(planetsArray, containerElement) {
  planetsArray.forEach(planet => {
    const sec = document.createElement('section');
    sec.className = 'infotable5';
    sec.innerHTML = `
      <h1>${planet.name}</h1>
      <h3>Atmosfera: ${planet.atmosphere}</h3>
      <h3>Klimat: ${planet.climate}</h3>
      <h3>Temperatura: ${planet.temperature}</h3>
      <h3>Grawitacja: ${planet.gravity}</h3>
      <h3>Dodatkowe ważne informacje: ${planet.info}</h3>
      <img src="${planet.name}.png" alt='zdjęcie planety'>
    `;
    containerElement.appendChild(sec);
  });
}

const planets_solar_system = [
{ name: "MERKURY", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "kratery kosmiczne", colonized: "tak", gravity: "3.2 m/s2", info: "Ludzkość wykopała tak dużo materiału, że grawitacja planety zmieniła się o 0.5 m/s2" },
{ name: "VENUS", atmosphere: "Lekko toksyczna", temperature: "10*C - 50*C", climate: "bagna siarkowe", colonized: "tak", gravity: "8.9 m/s2", info: "Ludzkość terraformowała Wenus, jednakże nadal występują deszcze kwasowe, kiedy to ludzie muszą uciekać do bunkrów lub miast w chmurach" },
{ name: "ZIEMIA", atmosphere: "Da się żyć", temperature: "-5*C - 24*C", climate: "mieszany", colonized: "tak", gravity: "9.9 m/s2", info: "Niedawno re-kolonizowana. 3 WŚ doprowadziła planetę do runiy, i dopiero po 500 lat można było rekolonizować" },
{ name: "KSIĘŻYC", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "kratery kosmiczne", colonized: "tak", gravity: "1.6 m/s2", info: "używany głownie jako centrum rekreacyjne. Wiele zawodów sportowych ma miejsce na księżycu" },
{ name: "MARS", atmosphere: "Da się żyć", temperature: "-10*C - 20*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "DEIMOS", atmosphere: "Brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
{ name: "SATURN", atmosphere: "toksyczna", temperature: "-140*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TYTAN", atmosphere: "toksyczna", temperature: "-180*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "ENCELADUS", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
{ name: "URAN", atmosphere: "toksyczna", temperature: "", climate: "-190*C", colonized: "", gravity: "", info: "" },
{ name: "OBERON", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
{ name: "NEPTUN", atmosphere: "toksyczna", temperature: "-220*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRYTON", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_jupiter = [
{ name: "IO", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
{ name: "EUROPA", atmosphere: "Da się żyć", temperature: "-15*C - 5*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "CALISTO", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_alfa_centauri = [
{ name: "Alfa Centauri A-1", atmosphere: "da się żyć", temperature: "15*C - 40*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Alfa Centauri A-2", atmosphere: "toksyczna", temperature: "-5*C - 24*C", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Alfa Centauri B-1", atmosphere: "brak atmosfery", temperature: "próżnia", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Alfa Centauri B-2", atmosphere: "da się żyć", temperature: "-20*C - 0*C", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_poxima_centauri = [
{ name: "Proxima Centauri A", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Proxima Centauri B", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Proxima Centauri C", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_tau_ceti = [
{ name: "Tau Ceti A", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Tau Ceti B", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Tau Ceti C", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Tau Ceti D", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Tau Ceti E", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_trappist = [
{ name: "TRAPPIST-1 A", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRAPPIST-1 B", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRAPPIST-1 C", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRAPPIST-1 D", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRAPPIST-1 E", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "TRAPPIST-1 F", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
];
const planets_Ross_128 = [
{ name: "Ross 128-A", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Ross 128-B", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Ross 128-C", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Ross 128-D", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
]
const planets_Barnard_star = [
{ name: "Barnard-A", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Barnard-B", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Barnard-C", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
]
const planets_ez = [
{ name: "EZ-A", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "EZ-B", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "EZ-C", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "EZ-D", atmosphere: "brak atmosfery", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
]
const planets_teegarden = [
{ name: "Teegarden A", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Teegarden B", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Teegarden C", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
]
const planets_lutyen = [
{ name: "Luyten A", atmosphere: "lekko toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Luyten B", atmosphere: "toksyczna", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
{ name: "Luyten C", atmosphere: "da się żyć", temperature: "", climate: "", colonized: "", gravity: "", info: "" },
]

window.addEventListener('DOMContentLoaded', () => {
const solar_system = document.querySelector('#solar_system');
const jovian_system = document.querySelector('#jovian_system');
const alfa_system = document.querySelector('#alfa_system');
const proxima_system = document.querySelector('#proxima_system');
const tau_system = document.querySelector('#tau_system');
const trappist_system = document.querySelector('#trappist_system');
const ross_system = document.querySelector('#ross_system');
const barnard_system = document.querySelector('#barnard_system');
const ez_system = document.querySelector('#ez_system');
const teegarden_system = document.querySelector('#teegarden_system');
const lutyen_system = document.querySelector('#lutyen_system');
renderPlanets(planets_solar_system, solar_system);
renderPlanets(planets_jupiter, jovian_system);
renderPlanets(planets_alfa_centauri, alfa_system);
renderPlanets(planets_poxima_centauri, proxima_system);
renderPlanets(planets_tau_ceti, tau_system);
renderPlanets(planets_trappist, trappist_system);
renderPlanets(planets_Ross_128, ross_system);
renderPlanets(planets_Barnard_star, barnard_system);
renderPlanets(planets_ez, ez_system);
renderPlanets(planets_teegarden, teegarden_system);
renderPlanets(planets_lutyen, lutyen_system);
});
