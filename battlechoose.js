function back_from_battlechoose() {
    document.getElementById("battlechoose").style.display = "none";
    document.getElementById("main").style.display = "initial";
  }
  
  document.getElementById("enemy1").style.display = "none";
  document.getElementById("boss1").style.display = "none";
  document.getElementById("boss2").style.display = "none";
  document.getElementById("enhp").style.display = "none";
  
  document.getElementById("tyra_f").style.display = "none";
  document.getElementById("hydre_f").style.display = "none";
  document.getElementById("nidok_f").style.display = "none";
  document.getElementById("mach_f").style.display = "none";
  document.getElementById("mel_f").style.display = "none";
  document.getElementById("kada_f").style.display = "none";
  document.getElementById("haun_f").style.display = "none";
  document.getElementById("char_f").style.display = "none";
  
  document.getElementById("battlefield").style.display = "none";
  document.getElementById("battlechoose").style.display = "none";
  
  document.getElementById("tyra_card").style.display = "none";
  document.getElementById("hydre_card").style.display = "none";
  
  document.getElementById("nidok_card").style.display = "none";
  document.getElementById("mach_card").style.display = "none";
  
  document.getElementById("haun_card").style.display = "none";
  document.getElementById("meltan_card").style.display = "none";
  document.getElementById("kada_card").style.display = "none";
  document.getElementById("char_card").style.display = "none";
  
  function battle() {
    if (coins >= 10000) {
      document.getElementById("battlechoose").style.display = "initial";
      document.getElementById("main").style.display = "none";
      if (tyra_level > 0) {
        document.getElementById("tyra_card").style.display = "initial";
      }
      if (hydre_level > 0) {
        document.getElementById("hydre_card").style.display = "initial";
      }
      if (nidok_level > 0) {
          document.getElementById("nidok_card").style.display = "initial";
      }
      if (mach_level > 0) {
        document.getElementById("mach_card").style.display = "initial";
    }
      if (meltan_level > 0) {
        document.getElementById("meltan_card").style.display = "initial";
      }
      if (haun_level > 0) {
        document.getElementById("haun_card").style.display = "initial";
      }
      if (kada_level > 0) {
        document.getElementById("kada_card").style.display = "initial";
      }
      if (char_level > 0) {
        document.getElementById("char_card").style.display = "initial";
      }
  
    } else {
      alert("you need more coin");
    }
  }
  
  function fwtyra() {
    hp = hp * 2;
    atk = atk * 2;
  
    document.getElementById("tyra_f").style.display = "initial";
    battlestart();
  }
  function fwhydre() {
    hp = hp * 1.5;
    atk = atk * 2.5;
  
    document.getElementById("hydre_f").style.display = "initial";
  
    battlestart();
  }
  function fwnidok() {
      hp = hp * 1.8;
      atk = atk * 1.5;
    
      document.getElementById("nidok_f").style.display = "initial";
    
      battlestart();
    }
    function fwmach() {
      hp = hp * 1.65;
      atk = atk * 3;
    
  document.getElementById("mach_f").style.display = "initial";
    
      battlestart();
    }
    function fwgya() {
      hp = hp * 2.00;
      atk = atk * 3;
    
  document.getElementById("gya_f").style.display = "initial";
    
      battlestart();
    }
  function fwmel() {
    hp = hp * 1;
    atk = atk * 0.5;
    document.getElementById("mel_f").style.display = "initial";
  
    battlestart();
  }
  function fwhaun() {
    hp = hp * 1.25;
    atk = atk * 1;
    document.getElementById("haun_f").style.display = "initial";
  
    battlestart();
  }
  function fwkada() {
    hp = hp * 1.4;
    atk = atk * 1;
    document.getElementById("kada_f").style.display = "initial";
  
    battlestart();
  }
  function fwchar() {
    hp = hp * 1.5;
    atk = atk * 1.5;
    document.getElementById("char_f").style.display = "initial";
  
    battlestart();
  }