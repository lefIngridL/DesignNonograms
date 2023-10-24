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
        activePuzzle.grid[ps].correct = false;
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
        activePuzzle.grid[ps].correct = false;
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

function placeEdgeNr(puzzle){
    genTrueFalseArr(puzzle);
    genTrueFalseArrCol(puzzle);
}

let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let row5 = [];
let column1 = [];
let column2 = [];
let column3 = [];
let column4 = [];
let column5 = [];
let pass;
//let myRow;
function genTrueFalseArr(puzzle){
for(let j=1; j<6; j++){ 
    //myRow = row+j   
for(let i = 1; i<6; i++){
    pass = "x" + i + "y" +j;
    if(j == 1){
        row1.push(puzzle.grid[pass].correct);} 
    
    if(j == 2){
        row2.push(puzzle.grid[pass].correct);} 
    if(j == 3){
        row3.push(puzzle.grid[pass].correct);
    }
    if(j == 4){
        row4.push(puzzle.grid[pass].correct);
    }
    if(j == 5){
        row5.push(puzzle.grid[pass].correct);
    }

}}
console.log(row1, row2, row3, row4, row5);
/*let myRow;
for(let i = 1; i<6; i++){
myRow = "row" + i;
console.log(myRow);
getNumbers(myRow);
}*/
getNumbers(row1);
getNumbers(row2);
getNumbers(row3);
getNumbers(row4);
getNumbers(row5);
placeNumbers();
//getNumbers(row1, row2, row3, row4, row5);
}


function genTrueFalseArrCol(puzzle){
for(let j=1; j<6; j++){ 
    //myRow = row+j   
for(let i = 1; i<6; i++){
    pass = "x" + i + "y" +j;
    if(i == 1){
        column1.push(puzzle.grid[pass].correct);} 
    
    if(i == 2){
        column2.push(puzzle.grid[pass].correct);} 
    if(i == 3){
        column3.push(puzzle.grid[pass].correct);
    }
    if(i == 4){
        column4.push(puzzle.grid[pass].correct);
    }
    if(i == 5){
        column5.push(puzzle.grid[pass].correct);
    }

}}
console.log(column1, column2, column3, column4, column5);
/*let myRow;
for(let i = 1; i<6; i++){
myRow = "row" + i;
console.log(myRow);
getNumbers(myRow);
}*/

getNumbersCol();

//placeNumbersCol();
//getNumbers(row1, row2, row3, row4, row5);*/
}

let results1 = []
let results2 = []
let results3 = []
let results4 = []
let results5 = []
let counter = 0;
let resultN = [];
let n=1;
function getNumbers(row){
if(row == row1){   
for(let i = 0; i< row.length; i++){
    if(row[i]){
        counter++;
    }
    else {
        if(counter !== 0) {
            results1.push(counter);
            counter = 0;
        }
    }
}
if(counter !== 0){
    results1.push(counter);
}
counter = 0;
console.log(results1);}
else if(row == row2){   
for(let  i= 0; i< row.length; i++){
    if(row[i]){
        counter++;
    }
    else {
        if(counter !== 0) {
            results2.push(counter);
            counter = 0;
        }
    }
}
if(counter !== 0){
    results2.push(counter);
}
counter = 0;
console.log(results2);}
else if(row == row3){   
for(let i = 0; i< row.length; i++){
    if(row[i]){
        counter++;
    }
    else {
        if(counter !== 0) {
            results3.push(counter);
            counter = 0;
        }
    }
}
if(counter !== 0){
    results3.push(counter);
}
counter= 0;
console.log(results3);}
else if(row == row4){   
for(let i = 0; i< row.length; i++){
    if(row[i]){
        counter++;
    }
    else {
        if(counter !== 0) {
            results4.push(counter);
            counter = 0;
        }
    }
}
if(counter !== 0){
    results4.push(counter);
}
counter = 0;
console.log(results4);}
else if(row == row5){   
for(let i = 0; i< row.length; i++){
    if(row[i]){
        counter++;
    }
    else {
        if(counter !== 0) {
            results5.push(counter);
            counter = 0;
        }
    }
}
if(counter !== 0){
    results5.push(counter);
}
counter = 0;
console.log(results5);}
resultN[0] = results1;
resultN[1] = results2;
resultN[2] = results3;
resultN[3] = results4;
resultN[4] = results5;

}
let colresults1 = []
let colresults2 = []
let colresults3 = []
let colresults4 = []
let colresults5 = []
let colcounter = 0;
let colresultN = [];
let coln=1;
let funcArray = [getNumbersCol1, getNumbersCol2, getNumbersCol3, getNumbersCol4, getNumbersCol5];
function getNumbersCol(){
for(funs in funcArray){
    funcArray[funs]();
}
placeNumbersCol();
}

function getNumbersCol1(){
     
    for(let i = 0; i< column1.length; i++){
        if(column1[i]){
            colcounter++;
        }
        else {
            if(colcounter !== 0) {
                colresults1.push(colcounter);
                colcounter = 0;
            }
        }
    }
    if(colcounter !== 0){
        colresults1.push(colcounter);
    }
    colcounter = 0;
    console.log(colresults1);
    colresultN[0] = colresults1;
}
function getNumbersCol2(){    
    for(let  i= 0; i< column2.length; i++){
        if(column2[i]){
            colcounter++;
        }
        else {
            if(colcounter !== 0) {
                colresults2.push(colcounter);
                colcounter = 0;
            }
        }
    }
    if(colcounter !== 0){
        colresults2.push(colcounter);
    }
    colcounter = 0;
    console.log(colresults2); 
    colresultN[1] = colresults2;}

function getNumbersCol3(){
     
    for(let i = 0; i< column3.length; i++){
        if(column3[i]){
            colcounter++;
        }
        else {
            if(colcounter !== 0) {
                colresults3.push(colcounter);
                colcounter = 0;
            }
        }
    }
    if(colcounter !== 0){
        colresults3.push(colcounter);
    }
    colcounter= 0;
    console.log(colresults3);
    colresultN[2] = colresults3;}

function getNumbersCol4(){
    
    for(let i = 0; i< column4.length; i++){
        if(column4[i]){
            colcounter++;
        }
        else {
            if(colcounter !== 0) {
                colresults4.push(colcounter);
                colcounter = 0;
            }
        }
    }
    if(colcounter !== 0){
        colresults4.push(colcounter);
    }
    colcounter = 0;
    console.log(colresults4);
    colresultN[3] = colresults4;}

function getNumbersCol5(){
   
    for(let i = 0; i< column5.length; i++){
        if(column5[i]){
            colcounter++;
        }
        else {
            if(colcounter !== 0) {
                colresults5.push(colcounter);
                colcounter = 0;
            }
        }
    }
    if(colcounter !== 0){
        colresults5.push(colcounter);
    }
    colcounter = 0;
    console.log(colresults5);
    colresultN[4] = colresults5;}

let columnId;
let rowId;
let cellId
function placeNumbers(){
    
    for (let i = 1; i <= 5; i++) {
        columnId = "x0" + "y" + i;
        cellId = columnId + i;
        document.getElementById(columnId).innerHTML = `<div id=${cellId} class="columnEdgex5"></div>`;
        for (nums in resultN[i-1]) {
            console.log(resultN[i - 1][nums]);
            document.getElementById(cellId).innerHTML += `<p>${resultN[i - 1][nums]}</p>`;
        }
    }}
    /*function placeNumbersCol(){
    //let rowId;
    //let cellId;
    
    for (let i = 1; i <= 5; i++) {
        rowId = "x" + i + "y0";
        cellId = rowId + i;
        console.log(rowId);
        document.getElementById(rowId).innerHTML = `<div id=${cellId} class="rowEdgex5"></div>`;

        for (let i = 1; i <= 5; i++) {
            columnId = "x0" + "y" + i;
            cellId = columnId + i;
            document.getElementById(columnId).innerHTML = `<div id=${cellId} class="columnEdgex5"></div>`;
            for (nums in resultN[i-1]) {
                console.log(resultN[i - 1][nums]);
                document.getElementById(cellId).innerHTML += `<p>${colresultN[i - 1][nums]}</p>`;
            }
        }

    }
}*/

function placeNumbersCol(){
    let rowId;
    let cellId;
    for (let i = 1; i <6; i++) {
        rowId = "x" + i + "y0";
        cellId = rowId + i;
        console.log(rowId);
        document.getElementById(rowId).innerHTML = `<div id=${cellId} class="rowEdgex5"></div>`;
        for (nums in colresultN[i - 1]) {
            console.log(colresultN[i - 1][nums]);
            document.getElementById(cellId).innerHTML += `<p>${colresultN[i - 1][nums]}</p>`;
        }

    }
}