
let wins = 0;
let loses = 0;

function stats() {
  document.getElementById("main").style.display = "none";
  document.getElementById("stats").style.display = "initial";

  document.getElementById("wins").innerHTML = "wins: " + wins;
  document.getElementById("loses").innerHTML = "loses: " + loses;
  document.getElementById("num_of_pokes").innerHTML = "pokémons owned: " + num_of_pokes ;
  document.getElementById("playtime").innerHTML = "Playtime: " + playtime_m + " minutes";
}

function back_from_stats() {
  document.getElementById("main").style.display = "initial";
  document.getElementById("stats").style.display = "none";
}


let boss1_claimed= false;
let boss2_claimed = false;
let task_20_battle_claimed = false;
let task_claim_all_pokes = false;

function task() {
  document.getElementById("main").style.display = "none";
  document.getElementById("tasks").style.display = "initial";
  document.getElementById("claim_reward").style.display = "none";
  document.getElementById("claim_reward_20").style.display = "none";
  document.getElementById("claim_all_pokes").style.display = "none";
 


  if (wins > 4 && boss1_claimed == false) {
    document.getElementById("claim_reward").style.display = "initial";
  }
  if (wins >  9 && boss2_claimed == false ) {
    document.getElementById("claim_reward").style.display = "initial";
  }
  if (wins >  19 && task_20_battle_claimed == false ) {
    document.getElementById("claim_reward_20").style.display = "initial";
  }
  if (num_of_pokes >  12 && task_claim_all_pokes  == false ) {
    document.getElementById("claim_all_pokes").style.display = "initial";
  }


  if (wins < 5 && boss1_claimed == false) {
    document.getElementById("task1").innerHTML = "Defeat Nidoking!  (reward: Nidoking)";
  }
  if (boss2_claimed == false && boss1_claimed == true) {
    document.getElementById("task1").innerHTML = "Defeat Machamp!  (reward: Machamp) ";
  }
  if (task_20_battle_claimed == false){
    document.getElementById("task2").innerHTML = "Win 20 battle!  (reward: 5 million coin) ";
  }
  if (task_20_battle_claimed == false){
    document.getElementById("task3").innerHTML = "Get all the pokémons!  (reward: 10 million coin) ";
  }


}

function back_from_tasks() {
  document.getElementById("main").style.display = "initial";
  document.getElementById("tasks").style.display = "none";
}


function claim_bosses(){
    if (wins > 4 && boss1_claimed == false) {
        nidok_level++;

        num_of_pokes++;

        boss1_claimed = true;
        document.getElementById("nidok").style.display = "initial";
        document.getElementById("main").style.display = "initial";
  document.getElementById("tasks").style.display = "none";
  document.getElementById("nidok_cost").innerHTML = nidok_cost + " Coin";
  document.getElementById("nidok_level").innerHTML = nidok_level + " / 50 level";
  alert("you Claimed Nidoking")

      }

      if (wins > 9 && boss2_claimed == false && boss1_claimed == true) {
        mach_level++;

        num_of_pokes++;

        boss2_claimed = true;
        document.getElementById("mach").style.display = "initial";  
        document.getElementById("main").style.display = "initial";
  document.getElementById("tasks").style.display = "none";
  document.getElementById("mach_cost").innerHTML = mach_cost + " Coin";
  document.getElementById("mach_level").innerHTML = mach_level + " / 50 level";
  alert("You Claimed Machamp")

  
  
  document.getElementById("task1").style.display = "none";
  }
}

function claim_20_battle(){
  coins += 5000000 ;
  document.getElementById("main").style.display = "initial";
document.getElementById("tasks").style.display = "none";
alert("You Claimed 5 Million coin")

document.getElementById("task2").style.display = "none";

task_20_battle_claimed = true;

}

function claim_all_pokes(){
  coins += 5000000 ;
  document.getElementById("main").style.display = "initial";
document.getElementById("tasks").style.display = "none";
alert("You Claimed 5 Million coin")

document.getElementById("task3").style.display = "none";

task_claim_all_pokes = true;

}