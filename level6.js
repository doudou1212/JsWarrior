var lastHealthValue = 19;
var minHealthValue = 12;
var diamondNumber = 0;
jsWarrior.turn = function(warrior) {
  var currentHealthValue = warrior.getHealth();
  if(diamondNumber == 0){
    if(warrior.check('backward') == "diamond"){
      warrior.collect('backward');
      diamondNumber += 1;
    }
    else{
      warrior.walk('backward');
    }
  }
  else{
     if(warrior.check() == "enemy"){
       warrior.attack();
     }
     else{
       if(currentHealthValue < lastHealthValue ){
         if(warrior.getHealth() < minHealthValue){
           warrior.walk('backward');
         }
         else{
           warrior.walk();
         }
      }
      else{
        if(warrior.getHealth() < 20){
          warrior.rest();
        }
        else{
          warrior.walk();
        }
      }
    }
  }
  lastHealthValue = warrior.getHealth(); 
}
