   window.console.log("Nikhil");
   
   
   var playing = false;
   window.console.log("Nikhil");
   var score ;
 // if we click on the start/reset 
    document.getElementById("startreset").onclick = 
       function(){
           // if we are playing
              if(playing == true){
                 location.reload();   // reload our page
              }
              else{
                    // if not then
                 score = 0;
                 document.getElementById("scorevalue").innerHTML = score;
                 document.getElementById("timeremaining").style.display = "block";
              } 

       }
      // reload page
      // set scrore to 0  
      // show countdown box
      // reduce time by 1sec in loop
          //  timeleft?
             // yes--> continue
             // no--> gameover
      // change button to reset
      // generate new Q&A     
      
 // id we click on the answer box
    // if we are playing
       // correct
           // yes 
                // increase score 
                // show correct box for 1sec
                // generate new Q&A
           // no 
              // show try again box for 1sec   

