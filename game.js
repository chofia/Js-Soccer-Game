(function(){

    //team-1 number of shots button functionality
    let team1numShotsButton = document.querySelector("#teamone-shoot");
    let team1numShots = document.querySelector("#teamone-numshots");
    let team1numHits = document.querySelector("#teamone-numhits");

    //add click function
    team1numShotsButton.addEventListener("click", function(){
        let currentShots = team1numShots.innerHTML;
        let newShots = parseInt(currentShots) + 1;
        team1numShots.innerHTML = newShots;

        //team-1 goals
        let hit = 2;
        let currentHits = team1numHits.innerHTML;
        let newHits = parseInt(currentHits) +1;
        
        //if random number 1-4  = hit(2)
        if( Math.floor(Math.random() * 11)  >= hit)
        {
            team1numHits.innerHTML = newHits;
            document.body.style.backgroundColor = "#781D32";
            document.body.style.color = "#fff";
        }
    });


    //team-2 number of shots button functionality
    let team2numShotsButton = document.querySelector("#teamtwo-shoot");
    let team2numShots = document.querySelector("#teamtwo-numshots");
    let team2numHits = document.querySelector("#teamtwo-numhits");

    //add click function
    team2numShotsButton.addEventListener("click", function(){
        let currentShots = team2numShots.innerHTML;
        let newShots = parseInt(currentShots) + 1;
        team2numShots.innerHTML = newShots;

        //team-2 goals
        let hit = 5;
        let currentHits = team2numHits.innerHTML;
        let newHits = parseInt(currentHits) +1;
        
        //if random number 1-4  = hit(2)
        if( Math.floor(Math.random() * 11)  >= hit)
        {
            team2numHits.innerHTML = newHits;
            document.body.style.backgroundColor = "#37778F";
            document.body.style.color = "#fff";
        }
    });

    //keep track of how many time the reset button was clicked. 
    let resetButton = document.querySelector("#reset");
    let numberOfResets = document.querySelector("#num-resets");

    //add click function
    resetButton.addEventListener("click", function(){
        let currentResets = numberOfResets.innerHTML;
        let newResets = parseInt(currentResets) + 1;
        numberOfResets.innerHTML = newResets;

        //Making a reset button that wipe the number of shots and scores
        team1numShots.innerHTML = 0;
        team2numShots.innerHTML = 0;
        team1numHits.innerHTML = 0;
        team2numHits.innerHTML = 0;
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    });


 })()//function end