

function getNumbersCol(row){
    if(row == column1){   
    for(let i = 0; i< row.length; i++){
        if(row[i]){
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
    console.log(colresults1);}
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
        if(row[i]){
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
        if(row[i]){
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


    function getNumbersCol(row){
        if(row == column1){   
        for(let i = 0; i< row.length; i++){
            if(row[i]){
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
        console.log(colresults1);}
        else if(row == column2){   
        for(let  i= 0; i< row.length; i++){
            if(row[i]){
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
        console.log(colresults2);}
        else if(row == column3){   
        for(let i = 0; i< row.length; i++){
            if(row[i]){
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
        console.log(colresults3);}
        else if(row == column4){   
        for(let i = 0; i< row.length; i++){
            if(row[i]){
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
        console.log(colresults4);}
        else if(row == column5){   
        for(let i = 0; i< row.length; i++){
            if(row[i]){
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
        console.log(colresults5);}
        colresultN[0] = colresults1;
        colresultN[1] = colresults2;
        colresultN[2] = colresults3;
        colresultN[3] = colresults4;
        colresultN[4] = colresults5;
        
        }
    
   
    
    
    
    
    