// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          break;
        }
    }

    //   // ask player if they'd like to fight or run
    //   var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    //   // if player choses to fight, fight
    //   if (promptFight === "fight" || promptFight === "FIGHT") {
    //     // remove enemy's health by subtracting the amount set in the playerAttack variable
   

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
        break;
    }
    // if player choses to skip
//     else if (promptFight === "skip" || promptFight === "SKIP") {
//     // confirm player wants to skip
//     var confirmSkip = window.confirm("Are you sure you'd like to quit?");

//     // if yes (true), leave fight
//     if (confirmSkip) {
//       window.alert(playerName + " has decided to skip this fight. Goodbye!");
//       // subtract money from playerMoney for skipping
//       playerMoney = playerMoney - 2;
//     }
//     // if no (false), ask question again by running fight() again
//     else {
//       fight();
//     }
//     // if player did not chose 1 or 2 in prompt
//   } else {
//     window.alert("You need to pick a valid option. Try again!");
//   }
}; // end of fight function

// run fight function to start game
for(var i = 0; i <enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}