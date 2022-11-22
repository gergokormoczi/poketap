document.getElementById("stunfisk").style.display = "none";
document.getElementById("dedenne").style.display = "none";
document.getElementById("swab").style.display = "none";
document.getElementById("mag").style.display = "none";
document.getElementById("vulpix").style.display = "none";

document.getElementById("meltan").style.display = "none";
document.getElementById("haun").style.display = "none";
document.getElementById("kada").style.display = "none";
document.getElementById("char").style.display = "none";
document.getElementById("mel_f").style.display = "none";

document.getElementById("nidok").style.display = "none";
document.getElementById("mach").style.display = "none";

document.getElementById("tyranitar").style.display = "none";
document.getElementById("hydre").style.display = "none";


document.getElementById("battlechoose").style.display = "none";

document.getElementById("stats").style.display = "none";
document.getElementById("tasks").style.display = "none";

let limit = 100;
let coins = 0;
let coinplus = 1;
let coin_upgrade = 0;

let playtime_m = 0;

if(coinplus > 0){
function playtime(){
  playtime_m ++;
}
setInterval(playtime, 60000);
};

document.getElementById("pokecoin").innerHTML = coins;

more_coins = "you need more coin to buy this";

document.getElementById("pl").innerHTML =
  "new pokemon: " + limit + " coin";

function pluscoin() {
  coins += coinplus;
  document.getElementById("pokecoin").innerHTML = coins;
}

function bfpoke() {
  if (coins < limit) {
    alert(more_coins);
  }

  if (coins >= limit) {
    coins -= limit;

    function autocoin() {
      coins += coin_upgrade;
      document.getElementById("pokecoin").innerHTML = coins;
    }
    setInterval(autocoin, 500);

    limit = limit * 2;
    if (limit > 50000) {
      limit = 51200;
    }
    document.getElementById("pl").innerHTML =
      "tap here to spin a new pokemon Cost: " + limit;
    spin();
  }
}

let atk = 1;
let hp = 100;
let en_hp = 100;

let pokemons = [
  "tyranitar",
  "hydregion",

  "meltan",
  "haunter",
  "kadabra",
  "charmaleon",

  "stunfisk",
  "dedenne",
  "swablu",
  "magikarp",
  "vulpix",

  "stunfisk",
  "dedenne",
  "swablu",
  "magikarp",
  "vulpix",
];

let num_of_pokes = 0;

let stun_level = 0;
let dede_level = 0;
let swab_level = 0;
let mag_level = 0;
let vulpix_level = 0;

let meltan_level = 0;
let haun_level = 0;
let kada_level = 0;
let char_level = 0;

let nidok_level = 0;
let mach_level = 0;

let tyra_level = 0;
let hydre_level = 0;

let stun_cost = 35;
let dede_cost = 35;
let swab_cost = 35;
let mag_cost = 35;
let vulpix_cost = 35;

let meltan_cost = 55;
let haun_cost = 55;
let kada_cost = 55;
let char_cost = 55;

let nidok_cost = 75;
let mach_cost = 75;

let tyra_cost = 100;
let hydre_cost = 100;