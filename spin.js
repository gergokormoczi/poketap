function spin() {
    let one_pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
    alert(one_pokemon);
  
    //legendaries
  
    if (one_pokemon == "tyranitar") {
      if (tyra_level > 0 && tyra_level < 49) {
        alert("duplicate");
        tyra_level += 3;
        tyra_cost = Math.round(tyra_cost * 1.2);
        tyra_cost = Math.round(tyra_cost * 1.2);
        tyra_cost = Math.round(tyra_cost * 1.2);
        coin_upgrade += 12;
        document.getElementById("tyranitar_cost").innerHTML = tyra_cost + " Coin";
        document.getElementById("tyranitar_level").innerHTML =
          tyra_level + " / 50 level";
      }
      if (tyra_level == 0) {
        tyra_level++;
        document.getElementById("tyranitar").style.display = "initial";
        coin_upgrade += 12;
        document.getElementById("tyranitar_level").innerHTML =
          tyra_level + " / 50 level";
        document.getElementById("tyranitar_cost").innerHTML = tyra_cost + " Coin";
        num_of_pokes++;
      }
      if (tyra_level > 49) {
        tyra_level = 50;
        document.getElementById("tyranitar_level").innerHTML =
          tyra_level + " / 50 level";
        document.getElementById("tyranitar_cost").innerHTML = "Max";
        
      }
    }
  
    if (one_pokemon == "hydregion") {
      if (hydre_level > 0 && hydre_level < 49) {
        alert("duplicate");
        hydre_level += 3;
        hydre_cost = Math.round(hydre_cost * 1.2);
        hydre_cost = Math.round(hydre_cost * 1.2);
        hydre_cost = Math.round(hydre_cost * 1.2);
        coin_upgrade += 12;
        document.getElementById("hydre_cost").innerHTML = hydre_cost + " Coin";
        document.getElementById("hydre_level").innerHTML =
          hydre_level + " / 50 level";
      }
      if (hydre_level == 0) {
        hydre_level++;
        document.getElementById("hydre").style.display = "initial";
        coin_upgrade += 12;
        document.getElementById("hydre_level").innerHTML =
          hydre_level + " / 50 level";
        document.getElementById("hydre_cost").innerHTML = hydre_cost + " Coin";
        num_of_pokes++;
      }
      if (hydre_level > 49) {
        hydre_level = 50;
        document.getElementById("hydre_level").innerHTML =
          hydre_level + " / 50 level";
        document.getElementById("hydre_cost").innerHTML = "Max";
      }
    }
  
    //rares
    if (one_pokemon == "meltan") {
      if (meltan_level > 0 && meltan_level < 49) {
        alert("duplicate");
        meltan_level += 3;
        meltan_cost = Math.round(meltan_cost * 1.2);
        meltan_cost = Math.round(meltan_cost * 1.2);
        meltan_cost = Math.round(meltan_cost * 1.2);
        coin_upgrade += 6;
        document.getElementById("meltan_cost").innerHTML = meltan_cost + " Coin";
        document.getElementById("meltan_level").innerHTML =
          meltan_level + " / 50 level";
      }
  
      if (meltan_level == 0 ) {
        meltan_level++;
        document.getElementById("meltan").style.display = "initial";
        coin_upgrade += 6;
        document.getElementById("meltan_level").innerHTML =
          meltan_level + " / 50 level";
        document.getElementById("meltan_cost").innerHTML = meltan_cost + " Coin";
        num_of_pokes++;
      }
      if (meltan_level > 49) {
        meltan_level = 50;
        document.getElementById("meltan_level").innerHTML =
          meltan_level + " / 50 level";
        document.getElementById("meltan_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "haunter") {
      if (haun_level > 0 && haun_level < 49) {
        alert("duplicate");
        haun_level += 3;
        haun_cost = Math.round(haun_cost * 1.2);
        haun_cost = Math.round(haun_cost * 1.2);
        haun_cost = Math.round(haun_cost * 1.2);
        coin_upgrade += 6;
        document.getElementById("haun_cost").innerHTML = haun_cost + " Coin";
        document.getElementById("haun_level").innerHTML =
          haun_level + " / 50 level";
      }
  
      if (haun_level == 0) {
        haun_level++;
        document.getElementById("haun").style.display = "initial";
        coin_upgrade += 6;
        document.getElementById("haun_level").innerHTML =
          haun_level + " / 50 level";
        document.getElementById("haun_cost").innerHTML = haun_cost + " Coin";
        num_of_pokes++;
      }
      if (haun_level > 49) {
        haun_level = 50;
        document.getElementById("haun_level").innerHTML =
          haun_level + " / 50 level";
        document.getElementById("haun_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "kadabra") {
      if (kada_level > 0 && kada_level < 49 ) {
        alert("duplicate");
        kada_level += 3;
        kada_cost = Math.round(kada_cost * 1.2);
        kada_cost = Math.round(kada_cost * 1.2);
        kada_cost = Math.round(kada_cost * 1.2);
        coin_upgrade += 6;
        document.getElementById("kada_cost").innerHTML = kada_cost + " Coin";
        document.getElementById("kada_level").innerHTML =
          kada_level + " / 50 level";
      }
      if (kada_level == 0) {
        kada_level++;
        document.getElementById("kada").style.display = "initial";
        coin_upgrade += 6;
        document.getElementById("kada_level").innerHTML =
          kada_level + " / 50 level";
        document.getElementById("kada_cost").innerHTML = kada_cost + " Coin";
        num_of_pokes++;
      }
      if (kada_level > 49) {
        kada_level = 50;
        document.getElementById("kada_level").innerHTML =
          kada_level + " / 50 level";
        document.getElementById("kada_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "charmaleon") {
      if (char_level > 0 && char_level < 49) {
        alert("duplicate");
        char_level += 3;
        char_cost = Math.round(char_cost * 1.2);
        char_cost = Math.round(char_cost * 1.2);
        char_cost = Math.round(char_cost * 1.2);
        coin_upgrade += 6;
        document.getElementById("char_cost").innerHTML = char_cost + " Coin";
        document.getElementById("char_level").innerHTML =
          char_level + " / 50 level";
      }
  
      if (char_level == 0) {
        char_level++;
        document.getElementById("char").style.display = "initial";
        coin_upgrade += 6;
        document.getElementById("char_level").innerHTML =
          char_level + " / 50 level";
        document.getElementById("char_cost").innerHTML = char_cost + " Coin";
        num_of_pokes++;
      }
      if (char_level > 49) {
        char_level = 50;
        document.getElementById("char_level").innerHTML =
          char_level + " / 50 level";
        document.getElementById("char_cost").innerHTML = "Max";
      }
    }
  
    //commons
    if (one_pokemon == "vulpix") {
      if (vulpix_level > 0 && vulpix_level < 49) {
        alert("duplicate");
        vulpix_level += 3;
        vulpix_cost = Math.round(vulpix_cost * 1.2);
        vulpix_cost = Math.round(vulpix_cost * 1.2);
        vulpix_cost = Math.round(vulpix_cost * 1.2);
        coin_upgrade + 3;
        document.getElementById("vulpix_cost").innerHTML = vulpix_cost + " Coin";
        document.getElementById("vulpix_level").innerHTML =
          vulpix_level + " / 50 level";
      }
  
      if (vulpix_level == 0) {
        vulpix_level++;
        document.getElementById("vulpix").style.display = "initial";
        coin_upgrade += 1;
        document.getElementById("vulpix_level").innerHTML =
          vulpix_level + " / 50 level";
        document.getElementById("vulpix_cost").innerHTML = vulpix_cost + " Coin";
        num_of_pokes++;
      }
      if (vulpix_level > 49) {
        vulpix_level = 50;
        document.getElementById("vulpix_level").innerHTML =
          vulpix_level + " / 50 level";
        document.getElementById("vulpix_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "stunfisk") {
      if (stun_level > 0 && stun_level < 49) {
        alert("duplicate");
        stun_level += 3;
        stun_cost = Math.round(stun_cost * 1.2);
        stun_cost = Math.round(stun_cost * 1.2);
        stun_cost = Math.round(stun_cost * 1.2);
        coin_upgrade + 3;
        document.getElementById("stun_cost").innerHTML = stun_cost + " Coin";
        document.getElementById("stunfisk_level").innerHTML =
          stun_level + " / 50 level";
      }
  
      if (stun_level == 0) {
        stun_level++;
        document.getElementById("stunfisk").style.display = "initial";
        coin_upgrade += 1;
        document.getElementById("stunfisk_level").innerHTML =
          stun_level + " / 50 level";
        document.getElementById("stun_cost").innerHTML = stun_cost + " Coin";
        num_of_pokes++;
      }
      if (stun_level > 49) {
        stun_level = 50;
        document.getElementById("stunfisk_level").innerHTML =
          stun_level + " / 50 level";
        document.getElementById("stun_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "dedenne") {
      if (dede_level > 0 && dede_level < 49) {
        alert("duplicate");
        dede_level += 3;
        dede_cost = Math.round(dede_cost * 1.2);
        dede_cost = Math.round(dede_cost * 1.2);
        dede_cost = Math.round(dede_cost * 1.2);
        coin_upgrade + 3;
        document.getElementById("dedenne_cost").innerHTML = dede_cost + " Coin";
        document.getElementById("dedenne_level").innerHTML =
          dede_level + " / 50 level";
      }
      if (dede_level == 0) {
        dede_level++;
        document.getElementById("dedenne").style.display = "initial";
        coin_upgrade += 1;
        document.getElementById("dedenne_level").innerHTML =
          dede_level + " / 50 level";
        document.getElementById("dedenne_cost").innerHTML = dede_cost + " Coin";
        num_of_pokes++;
      }
      if (dede_level > 49) {
        dede_level = 50;
        document.getElementById("dedenne_level").innerHTML =
          dede_level + " / 50 level";
        document.getElementById("dedenne_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "swablu") {
      if (swab_level > 0 && swab_level < 49) {
        alert("duplicate");
        swab_level += 3;
        sawb_cost = Math.round(swab_cost * 1.2);
        swab_cost = Math.round(swab_cost * 1.2);
        swab_cost = Math.round(swab_cost * 1.2);
        coin_upgrade + 3;
        document.getElementById("swab_cost").innerHTML = swab_cost + " Coin";
        document.getElementById("swab_level").innerHTML =
          swab_level + " / 50 level";
      }
  
      if (swab_level == 0) {
        swab_level++;
        document.getElementById("swab").style.display = "initial";
        coin_upgrade += 1;
        document.getElementById("swab_level").innerHTML =
          swab_level + " / 50 level";
        document.getElementById("swab_cost").innerHTML = swab_cost + " Coin";
        num_of_pokes++;
      }
      if (swab_level > 49) {
        swab_level = 50;
        document.getElementById("swab_level").innerHTML =
          swab_level + " / 50 level";
        document.getElementById("swab_cost").innerHTML = "Max";
      }
    }
  
    if (one_pokemon == "magikarp") {
      if (mag_level > 0 && mag_level < 49) {
        alert("duplicate");
        mag_level += 3;
        mag_cost = Math.round(mag_cost * 1.2);
        mag_cost = Math.round(mag_cost * 1.2);
        mag_cost = Math.round(mag_cost * 1.2);
        coin_upgrade + 3;
        document.getElementById("mag_cost").innerHTML = mag_cost + " Coin";
        document.getElementById("mag_level").innerHTML =
          mag_level + " / 50 level";
      }
  
      if (mag_level == 0) {
        mag_level++;
        document.getElementById("mag").style.display = "initial";
        coin_upgrade += 1;
        document.getElementById("mag_level").innerHTML =
          mag_level + " / 50 level";
        document.getElementById("mag_cost").innerHTML = mag_cost + " Coin";
        num_of_pokes++;
      }
      if (mag_level > 49) {
        mag_level = 50;
        document.getElementById("mag_level").innerHTML =
          mag_level + " / 50 level";
        document.getElementById("mag_cost").innerHTML = "Max";
      }
    }
  
    
    showautoc();
    function showautoc() {
      document.getElementById("autocoin").innerHTML =
        coin_upgrade * 2 + " coin / sec";
    }
    setInterval(showautoc, 1000);
  }