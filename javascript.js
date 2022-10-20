let computerChoice = "";
let playerChoice = "";
let gem = "";
let roundStatus = "";
let selected = "";


function getComputerChoice() {
    let computerNum = Math.floor(Math.random() * 2);
    if (computerNum === 0) {
        computerChoice = "Rocks";
        drawRock();
    } else if (computerNum === 1) {
        computerChoice = "Paper";
        drawPaper();   
    } else {
        computerChoice = "Scissors";
        drawScissors();
    };
}

function battleRoyale() {
    if (computerChoice == "Rocks") {
        if (playerChoice == "Rocks") {
            roundStatus = "TIE";
        } else if (playerChoice == "Paper") {
            roundStatus = "WIN";
        } else if (playerChoice == "Scissors") {
            roundStatus = "LOSE";
        }
    } else if (computerChoice == "Paper") {
        if (playerChoice == "Rocks") {
            roundStatus = "LOSE";
        } else if (playerChoice == "Paper") {
            roundStatus = "TIE";
        } else if (playerChoice == "Scissors") {
            roundStatus = "WIN";
        }
    } else if (computerChoice == "Scissors") {
        if (playerChoice == "Rocks") {
            roundStatus = "WIN";
        } else if (playerChoice == "Paper") {
            roundStatus = "LOSE";
        } else if (playerChoice == "Scissors") {
            roundStatus = "TIE";
        }
    };
    callIt();
    setTimeout(
        function() {
        resetInvisibility();
    }, 1000);
}

function pyroxineClicked() {
    playerChoice  = "Rocks";
    getComputerChoice();
    battleRoyale(playerChoice); 
}

function garnetClicked() {
    playerChoice  = "Paper";
    getComputerChoice();
    battleRoyale(playerChoice); 
}

function olivineClicked() {
    playerChoice  = "Scissors";
    getComputerChoice();
    battleRoyale(playerChoice); 
}

function drawRock() {
    var element = document.getElementById("whaleRock");
    element.style.opacity = "1";
}

function drawPaper() {
    var element = document.getElementById("whalePaper");
    element.style.opacity = "1";
}

function drawScissors() {
    var element = document.getElementById("whaleScissors");
    element.style.opacity = "1";
}

function resetInvisibility() {
    let invisibles = document.querySelectorAll('.invisible');

    invisibles.forEach(invisible => {
        invisible.style.opacity = "0";
    });
}

function callIt() {
    if (roundStatus === "TIE") {     
        let ties = document.querySelectorAll('.tie');
        ties.forEach(tie => {
            tie.style.opacity = "1";
        });  
    } else if (roundStatus === "WIN") {
        var myScore = document.getElementById("myScoreHTML");
        var number = myScore.innerHTML;
        number++;
        myScore.innerHTML = number;   

        myScore++;
        let wins = document.querySelectorAll('.win');
        wins.forEach(win => {
            win.style.opacity = "1";
        });        

    } else {
        var whaleScore = document.getElementById("whaleScoreHTML");
        var number = whaleScore.innerHTML;
        number++;
        whaleScore.innerHTML = number;   

        let losses = document.querySelectorAll('.lose');
        losses.forEach(lose => {
            lose.style.opacity = "1";
        });     
    };
} 


//addBorders("div");
function addBorders(divClass) {
    console.log("running");
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    console.log("borderAllDivs: " + newArray);
    newArray.forEach((divClass) => {
        console.log(divClass.style.border);
        divClass.style.borderTop = "solid yellow";
        divClass.style.borderBottom = "solid blue";
        divClass.style.borderLeft = "solid lime";
        divClass.style.borderRight = "solid red";
    })
}


updateDivs(".yoink");
function updateDivs(divClass) {
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    console.log("updateDivs: " + newArray);
    newArray.forEach((divClass) => {
        let selected = divClass;
        divClass.addEventListener('click', () => {
            if (selected.id === "garnet") {
                garnetClicked();
            } else if (selected.id === pyroxine) {
                pyroxineClicked();
            } else {
                olivineClicked();
            }            
        })
        
    })

}

/*

updateDivs(".yoink");

function updateDivs(divClass) {
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    console.log(newArray);
    for (let i = 0; i <= newArray.length; i++) {
        let selected = newArray[i];
        //selected.style.border = "solid blue";
        selected.addEventListener('click', () => {           
            if (selected.id === "garnet") {
                garnetClicked();
            } else if (selected.id === pyroxine) {
                pyroxineClicked();
            } else {
                olivineClicked();
            }
        });
    }
}

function addBorders(divClass) {
    console.log("running");
    let selectedDivs = document.querySelectorAll(divClass);
    let newArray = Array.from(selectedDivs);
    console.log("borderAllDivs: " + newArray);
    for (let i = 0; i <= newArray.length; i++) {
        let selected = newArray[i];
        console.log(selected);
        selected.style.borderTop = "solid yellow";
        selected.style.borderBottom = "solid blue";
        selected.style.borderLeft = "solid lime";
        selected.style.borderRight = "solid red";
    }
    console.log("Finished!");
}

*/
