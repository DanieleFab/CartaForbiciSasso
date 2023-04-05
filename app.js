var score = {
    userScore: 0, 
    cpuScore: 0              // utilizziamo l'oggetto score per descrivere lo userScore e la cpuScore //
}

var userPick;    
var cpuPick;

var allOptions = [
    {
        name: "sasso",
        image: "assets/sasso.png"
    },
    {
        name: "carta",
        image: "assets/carta.png"
    },
    {
        name: "forbice",
        image: "assets/forbice.png"
    }
]

var possibleUserPick = document.getElementsByClassName("user-choice");    // questo ci fa ritornare un array con tuttui gli elementi con la classe user-choice (ovvere le tre immagini)

    for(var i = 0; i < possibleUserPick.length; i++){
       possibleUserPick[i].addEventListener('click', onUserPick);
    }

    function onUserPick (){
      userPick = this.dataset.name;
      generateCpuPick();
      var cpuPickImage = "<img src='" + cpuPick.image + "' />";
      var cpuPickText = "<h3>" + cpuPick.name + "</h3>";
      document.getElementById("computer-choice").innerHTML = cpuPickImage + cpuPickText;
      document.getElementById("result").innerHTML = checkWhoWon();
      document.getElementById("player-score").innerHTML = score.userScore;
      document.getElementById("cpu-score").innerHTML = score.cpuScore;
    }


    function generateCpuPick() {
      cpuPick = allOptions[Math.floor(Math.random() * allOptions.length)];     // math.floor genera un numero intero, math.random genera numeri decimali tra 0 e 1 //
    }
      
    
      
    function checkWhoWon() {
            if(userPick == cpuPick.name) {
            return "Hai pareggiato";
            } else {
                if(userPick == "sasso") {
                    if(cpuPick.name == "forbice") {
                        score.userScore++;
                        return "Hai vinto";
                    } else {
                        score.cpuScore++;
                        return "Hai perso";
                    }
                }    
                if(userPick == "carta") {
                    if(cpuPick.name == "sasso") {
                        score.userScore++;
                        return "Hai vinto";
                    } else {
                        score.cpuScore;
                        return "Hai perso";
                    }
                }
                if(userPick == "forbice") {
                    if(cpuPick.name == "carta") {
                        score.userScore++;
                        return "Hai vinto";
                    } else {
                        score.cpuScore++;
                        return "Hai perso";
                    }
                }
            }
    }

