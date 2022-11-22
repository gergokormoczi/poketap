  let first_battle = true;
  let battle_ing = false;
  
  function battlestart() {
    if (hp > 1 && first_battle == true) {
      setInterval(hp_reducing, 125);
    }
  
    if (wins != 4 && wins != 9) {
      coins -= 10000;
      battle_ing = true;
      en_hp = 100;
      document.getElementById("battlechoose").style.display = "none";
      document.getElementById("battlefield").style.display = "initial";
  
      document.getElementById("enhp").style.display = "initial";
      document.getElementById("enemy1").style.display = "initial";
  
      document.getElementById("hp").innerHTML = "hp: " + hp;
      document.getElementById("enhp").innerHTML = "enemy hp: " + en_hp;
    }
  
    if (wins == 4) {
      en_hp = 275;
      coins -= 10000;
      battle_ing = true;
      alert("Look up! There is  a nidoking");
      document.getElementById("boss1").style.display = "initial";
      document.getElementById("battlechoose").style.display = "none";
      document.getElementById("battlefield").style.display = "initial";
  
      document.getElementById("enhp").style.display = "initial";
  
      document.getElementById("hp").innerHTML = "hp: " + hp;
      document.getElementById("enhp").innerHTML = "enemy hp: " + en_hp;
    }

    if (wins == 9) {
      en_hp = 325;
      coins -= 10000;
      battle_ing = true;
      alert("Look up! There is  a machamp");
      document.getElementById("boss2").style.display = "initial";
      document.getElementById("battlechoose").style.display = "none";
      document.getElementById("battlefield").style.display = "initial";
  
      document.getElementById("enhp").style.display = "initial";
  
      document.getElementById("hp").innerHTML = "hp: " + hp;
      document.getElementById("enhp").innerHTML = "enemy hp: " + en_hp;
    }
    if (wins == 14) {
      en_hp = 365;
      coins -= 10000;
      battle_ing = true;
      alert("Look up! There is  a gyarados");
      document.getElementById("boss3").style.display = "initial";
      document.getElementById("battlechoose").style.display = "none";
      document.getElementById("battlefield").style.display = "initial";
  
      document.getElementById("enhp").style.display = "initial";
  
      document.getElementById("hp").innerHTML = "hp: " + hp;
      document.getElementById("enhp").innerHTML = "enemy hp: " + en_hp;
    }
  }
  
  function hp_reducing() {
    if (hp > 0 && battle_ing == true) {
      hp -= 1;
      document.getElementById("hp").innerHTML = "hp: " + hp;
    }
    if (hp < 1) {
      battle_ing = false;
      alert("unfortunatly, you lost");
  
      loses++;
  
      document.getElementById("battlefield").style.display = "none";
      document.getElementById("main").style.display = "initial";
  
      document.getElementById("tyra_f").style.display = "none";
      document.getElementById("hydre_f").style.display = "none";
      document.getElementById("nidok_f").style.display = "none"
      document.getElementById("mach_f").style.display = "none";
      document.getElementById("mel_f").style.display = "none";
      document.getElementById("kada_f").style.display = "none";
      document.getElementById("haun_f").style.display = "none";
      document.getElementById("char_f").style.display = "none";
  
      document.getElementById("enemy1").style.display = "none";
      document.getElementById("boss1").style.display = "none";
      document.getElementById("boss2").style.display = "none";
  
      battle_ing = false;
      hp = 100;
      en_hp = 100;
      atk = 1;
  
      first_battle = false;
    }
  }
  
  function damage() {
    en_hp -= atk;
    document.getElementById("enhp").innerHTML = "enemy hp: " + en_hp;
  
    if (en_hp < 1) {
  
  
      document.getElementById("battlefield").style.display = "none";
      document.getElementById("main").style.display = "initial";
  
      document.getElementById("tyra_f").style.display = "none";
      document.getElementById("hydre_f").style.display = "none";
      document.getElementById("nidok_f").style.display = "none";
      document.getElementById("mach_f").style.display = "none";
      document.getElementById("mel_f").style.display = "none";
      document.getElementById("kada_f").style.display = "none";
      document.getElementById("haun_f").style.display = "none";
      document.getElementById("char_f").style.display = "none";
  
      document.getElementById("enemy1").style.display = "none";
      document.getElementById("boss1").style.display = "none";
      document.getElementById("boss2").style.display = "none";
  
      alert("Congrat, You won 50000 coin!");
      coins += 50000;
      wins++;
      battle_ing = false;
      hp = 100;
      en_hp = 100;
      atk = 1;
      first_battle = false;
    }
  }
  