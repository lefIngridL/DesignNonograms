// Controler


function mode(btn) {
    //console.log("works");
    //console.log(btn);
    if (btn.innerText == "╳") {
        btn.innerText = "⬛";
        //console.log("also");
    }
    else if (btn.innerText == "⬛") {
        btn.innerText = "╳";
    }
}
//Denne koden fyller ruter med enten x eller [] avhengig av knappens tilstand. 
//Den logger også om ruten er "filled" eller "empty" til objektet i model.js
function fill(square, smallLevels) {

    let ps = square.id;
    let myButton = document.getElementById("fillBtn");

    if (myButton.innerText == "╳" && square.style.color == "white" || myButton.innerText == "╳" && square.style.color == '') {
        square.style.color = "black";
        //console.log(ps);

        activePuzzle.grid[ps].state = "filledx";
        activePuzzle.grid[ps].correct = false;

        //console.log(levelObj.levels[0].level1.puzzles[0].grid[0][ps].state);
        //console.log("1");
    }
    else if (myButton.innerText == "╳" && square.style.color == "black") {
        square.style.color = "white";

        activePuzzle.grid[ps].state = "empty";

        //console.log(levelObj.levels[0].level1.puzzles[0].grid[0][ps].state);

        //console.log("2");
    }

    else if (myButton.innerText == "⬛" && square.style.backgroundColor == '' || myButton.innerText == "⬛" && square.style.backgroundColor == "white") {
        square.style.backgroundColor = "gray";
        square.style.color = "gray";
        //console.log("yeah");

        activePuzzle.grid[ps].state = "filled";
        activePuzzle.grid[ps].correct = true;


        //console.log(levelObj.levels[0].level1.puzzles[0].grid[0][ps].state);
    }
    else if (myButton.innerText == "⬛" && square.style.backgroundColor == "gray") {
        square.style.backgroundColor = "white";
        square.style.color = "white";
        //console.log("see?");

        activePuzzle.grid[ps].state = "empty";
        //console.log(levelObj.levels[0].level1.puzzles[0].grid[0][ps].state);
    }
    //evaluate(square);
}
//Denne koden henter id til rutene langs toppen og på venstre side, slik at jeg kan behandle de separat
//utdatert?
function edge() {
    let place;
    let places;
    for (box in row) {
        place = row[box];
        places = document.getElementById(place);
        rowEdge.push(places);
    }
    for (box in column) {
        place = column[box];
        places = document.getElementById(place);
        columnEdge.push(places);
        //console.log(document.getElementById(place));
    }
}


//utdatert
function distinct() {
    for (rute in rowEdge) {

    }
}

function evaluate(square) {
    let sqrId = square.id;
    let correct;
    possiblePoints = count();
    //console.log(square.id);
    //console.log("here!");

    if (activePuzzle.grid[sqrId].state == "filled" && activePuzzle.grid[sqrId].correct == true) {
        //console.log("true");
        correct = "true";
        points++;
    }
    else if (activePuzzle.grid[sqrId].state == "filled" && activePuzzle.grid[sqrId].correct == false) {
        correct = "false";
        square.style.backgroundColorolor = "red";
        square.style.color = "red";
        const tick = setTimeout(emptyOut, 1000, square);

    }
    else if (activePuzzle.grid[sqrId].state == "filledx" && activePuzzle.grid[sqrId].correct == false) {
        correct = "true";
        //console.log("uh?");
    }
    else if (activePuzzle.grid[sqrId].state == "filledx" && activePuzzle.grid[sqrId].correct == true) {
        correct = "false";
        square.style.color = "red";
        const tickx = setTimeout(emptyOutx, 1000, square);



        //console.log("uh?");
    }


    console.log(correct);
    if (correct == "false" && lives > 0) {
        lives = lives - 1;
        document.getElementById("life").innerHTML = "Lives:" + ' ' + lives;
    }

    if (possiblePoints == points) {
        setTimeout(function () { alert("win"); }, 500);
        setTimeout(function () {
            if (level == "small") {
                A++;
                if (levelObj.levels.level1.puzzles[A] != undefined) {
                    updateViewSmall();
                    points = 0;
                }
                else{alert("no more levels");}

            }
            else if (level == "medium") {
                B++;
                if (levelObj.levels.level1.puzzles[B] != undefined){
                updateViewMedium();
                points = 0;    
                }
                else{alert("no more levels");}
            }
            else if (level == "Large") {
                C++;
                if (levelObj.levels.level1.puzzles[C] != undefined){
                updateViewLarge();
                points = 0;  
                }
                else{alert("no more levels");}
            }
            else if (level == "XL") {
                D++;
                if (levelObj.levels.level1.puzzles[C] != undefined){
                updateViewXL();
                points = 0;    
                }
                else{alert("no more levels");}
            }}, 2000)}
    if (lives == 0) {
        setTimeout(function () { alert("you lost!"); }, 500);
        if(level == "small"){
            lives = 5;
            updateViewSmall();
        }
        else if(level == "medium"){
            lives = 5;
            updateViewMedium();
            
        }
        else if(level == "Large"){
            lives = 5;
            updateViewLarge();
        }
        else if(level == "XL"){
            lives = 5;
            updateViewXL();
        }
        

    }

}

function emptyOut(square) {
    square.style.backgroundColor = "white";
    square.style.color = "white";
}
function emptyOutx(square) {
    square.style.color = "white";
}

//skal telle antall korrekte ruter på en puzzle
function count() {
    let rows = activePuzzle.rows;
    let count = 0;
    for (num in rows) {
        let place = rows[num];
        console.log(place);
        for (int in place) {
            let nr = place[int];
            console.log(nr);
            count += nr;

        }
    } return count;
}

function downloadNonogram(grid) {
    let jsonString = JSON.stringify(grid);
    let blob = new Blob([jsonString], {type: "application/json"});
    let url = URL.createObjectURL(blob);

    let a = document.createElement('a');
    a.href = url;
    a.download = 'nonogram.json';
    a.click();
}
