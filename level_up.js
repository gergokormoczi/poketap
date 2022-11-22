//legendaries
function tyranitar_level_up() {
    if (coins < tyra_cost && tyra_level < 50) {
      alert(more_coins);
    }
    if (coins > tyra_cost && tyra_level < 50) {
      coins -= tyra_cost;
      tyra_level++;
      coin_upgrade += 4;
      tyra_cost = Math.round(tyra_cost * 1.2);
      document.getElementById("tyranitar_level").innerHTML =
        tyra_level + " / 50 level";
      document.getElementById("tyranitar_cost").innerHTML = tyra_cost + "Coin";
    }
    if (tyra_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("tyranitar_cost").innerHTML = "Max";
    }
  }
  
  function hydre_level_up() {
    if (coins < hydre_cost && hydre_level < 50) {
      alert(more_coins);
    }
    if (coins > hydre_cost && hydre_level < 50) {
      coins -= hydre_cost;
      hydre_level++;
      coin_upgrade += 4;
      hydre_cost = Math.round(hydre_cost * 1.2);
      document.getElementById("hydre_level").innerHTML =
        hydre_level + " / 50 level";
      document.getElementById("hydre_cost").innerHTML = hydre_cost + "Coin";
    }
    if (hydre_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("hydre_cost").innerHTML = "Max";
    }
  }
  
  
  //epics
  function nidok_level_up() {
      if (coins < nidok_cost && nidok_level < 50) {
        alert(more_coins);
      }
      if (coins > nidok_cost && nidok_level < 50) {
        coins -= nidok_cost;
        nidok_level++;
        coin_upgrade += 3;
        nidok_cost = Math.round(nidok_cost * 1.2);
        document.getElementById("nidok_level").innerHTML =
        nidok_level + " / 50 level";
        document.getElementById("nidok_cost").innerHTML = nidok_cost + "Coin";
      }
      if (nidok_level > 49) {
        alert("you cant upgrade it anymore");
      }
      if (nidok_level > 49) {
          nidok_level = 50;
          document.getElementById("nidok_level").innerHTML =
          nidok_level + " / 50 level";
          document.getElementById("nidok_cost").innerHTML = "Max";
        }
    }
  

    function mach_level_up() {
      if (coins < mach_cost && mach_level < 50) {
        alert(more_coins);
      }
      if (coins > mach_cost && mach_level < 50) {
        coins -= mach_cost;
        mach_level++;
        coin_upgrade += 3;
        mach_cost = Math.round(mach_cost * 1.2);
        document.getElementById("mach_level").innerHTML =
        mach_level + " / 50 level";
        document.getElementById("mach_cost").innerHTML = mach_cost + "Coin";
      }
      if (mach_level > 49) {
        alert("you cant upgrade it anymore");
      }
      if (mach_level > 49) {
        mach_level = 50;
          document.getElementById("mach_level").innerHTML =
          mach_level + " / 50 level";
          document.getElementById("mach_cost").innerHTML = "Max";
        }
    }
  
  //rares
  function meltan_level_up() {
    if (coins < meltan_cost && meltan_level < 50) {
      alert(more_coins);
    }
    if (coins > meltan_cost && meltan_level < 50) {
      coins -= meltan_cost;
      meltan_level++;
      coin_upgrade += 2;
      meltan_cost = Math.round(meltan_cost * 1.2);
      document.getElementById("meltan_level").innerHTML =
        meltan_level + " / 50 level";
      document.getElementById("meltan_cost").innerHTML = meltan_cost + "Coin";
    }
    if (meltan_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("meltan_cost").innerHTML = "Max";
    }
  }
  
  function haun_level_up() {
    if (coins < haun_cost && haun_level < 50) {
      alert(more_coins);
    }
    if (coins > haun_cost && haun_level < 50) {
      coins -= haun_cost;
      haun_level++;
      coin_upgrade += 2;
      haun_cost = Math.round(haun_cost * 1.2);
      document.getElementById("haun_level").innerHTML =
        haun_level + " / 50 level";
      document.getElementById("haun_cost").innerHTML = haun_cost + "Coin";
    }
    if (haun_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("haun_cost").innerHTML = "Max";
    }
  }
  
  function kada_level_up() {
    if (coins < kada_cost && kada_level < 50) {
      alert(more_coins);
    }
    if (coins > kada_cost && kada_level < 50) {
      coins -= kada_cost;
      kada_level++;
      coin_upgrade += 2;
      kada_cost = Math.round(kada_cost * 1.2);
      document.getElementById("kada_level").innerHTML =
        kada_level + " / 50 level";
      document.getElementById("kada_cost").innerHTML = kada_cost + "Coin";
    }
    if (kada_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("kada_cost").innerHTML = "Max";
    }
  }
  
  function char_level_up() {
    if (coins < char_cost && char_level < 50) {
      alert(more_coins);
    }
    if (coins > char_cost && char_level < 50) {
      coins -= char_cost;
      char_level++;
      coin_upgrade += 2;
      char_cost = Math.round(char_cost * 1.2);
      document.getElementById("char_level").innerHTML =
        char_level + " / 50 level";
      document.getElementById("char_cost").innerHTML = char_cost + "Coin";
    }
    if (char_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("char_cost").innerHTML = "Max";
    }
  }
  
  //commons
  function vulpix_level_up() {
    if (coins < vulpix_cost && vulpix_level < 50) {
      alert(more_coins);
    }
  
    if (coins > vulpix_cost && vulpix_level < 50) {
      coins -= vulpix_cost;
      vulpix_level++;
      coin_upgrade++;
      vulpix_cost = Math.round(vulpix_cost * 1.2);
      document.getElementById("vulpix_level").innerHTML =
        vulpix_level + " / 50 level";
      document.getElementById("vulpix_cost").innerHTML = vulpix_cost + "Coin";
    }
    if (vulpix_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("vulpix_cost").innerHTML = "Max";
    }
  }
  
  function stunfisk_level_up() {
    if (coins < stun_cost && stun_level < 50) {
      alert(more_coins);
    }
  
    if (coins > stun_cost && stun_level < 50) {
      coins -= stun_cost;
      stun_level++;
      coin_upgrade++;
      stun_cost = Math.round(stun_cost * 1.2);
      document.getElementById("stunfisk_level").innerHTML =
        stun_level + " / 50 level";
      document.getElementById("stun_cost").innerHTML = stun_cost + "Coin";
    }
    if (stun_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("stun_cost").innerHTML = "Max";
    }
  }
  
  function dedenne_level_up() {
    if (coins < dede_cost && dede_level < 50) {
      alert(more_coins);
    }
    if (coins > dede_cost && dede_level < 50) {
      coins -= dede_cost;
      dede_level++;
      coin_upgrade++;
      dede_cost = Math.round(dede_cost * 1.2);
      document.getElementById("dedenne_level").innerHTML =
        dede_level + " / 50 level";
      document.getElementById("dedenne_cost").innerHTML = dede_cost + "Coin";
    }
    if (dede_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("dedenne_cost").innerHTML = "Max";
    }
  }
  
  function swab_level_up() {
    if (coins < swab_cost && swab_level < 50) {
      alert(more_coins);
    }
    if (coins > swab_cost && swab_level < 50) {
      coins -= swab_cost;
      swab_level++;
      coin_upgrade++;
      swab_cost = Math.round(swab_cost * 1.2);
      document.getElementById("swab_level").innerHTML =
        swab_level + " / 50 level";
      document.getElementById("swab_cost").innerHTML = swab_cost + "Coin";
    }
    if (swab_level > 49) {
      alert("you cant upgrade it anymore");
      document.getElementById("swab_cost").innerHTML = "Max";
    }
  }
  
  function mag_level_up() {
    if (coins < mag_cost && mag_level < 50) {
      alert(more_coins);
    }
    if (coins > mag_cost && mag_level < 50) {
      coins -= mag_cost;
      mag_level++;
      coin_upgrade++;
      mag_cost = Math.round(mag_cost * 1.2);
      document.getElementById("mag_level").innerHTML = mag_level + " / 50 level";
      document.getElementById("mag_cost").innerHTML = mag_cost + "Coin";
    }
      if (mag_level > 49) {
        mag_level = 50;
        alert("you cant upgrade it anymore");
        document.getElementById("mag_level").innerHTML =
          mag_level + " / 50 level";
          document.getElementById("mag_cost").innerHTML = "Max";
      }
    }