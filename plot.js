
async function say(){//印出劇情的主程式
    console.log("say")
    if(plotRate<plotStory[part].indexOf("END")){
        // if(textRate == -1){
        //     return 0
        // }
        plottext.innerHTML ="";
        plottext.style.color ="white";
        if(plotStory[part][plotRate][0] == "choice"){
            plotperson.style.display = 'block';
            plottext.style.textAlign = 'left';
            plotperson.innerHTML = `<img src="/picture/person.png" alt="" class="plotperson_img" >`;
            plotperson.appendChild(plotperson_name);
            plotperson_name.innerHTML = "you";
            // 
            // console.log("AHOY")
            plottext_button1.style.display = "inline-block";
            plottext_button2.style.display = "inline-block";
            plottext_button1.innerHTML = plotStory[part][plotRate][1]
            plottext_button2.innerHTML = plotStory[part][plotRate][3]
            plotTextwindow_next.style.display ='none';
            plottext_button1.onclick = plot_choice1;
            plottext_button2.onclick = plot_choice2;
            console.log("???end")
            return 0 

        }
        else{            
            textRate = 0;
            // console.log(`textRate${textRate}||plotRate${plotRate}`)
            if(plotStory[part][plotRate][0] == "prompt"){
                prompt_s(plotStory[part][plotRate][1]);
            }
            else{
                typing_text = plotStory[part][plotRate][0];
                typing();
                if(plotStory[part][plotRate][3] != undefined){
                    plottext.style.color = `${plotStory[part][plotRate][3]}`;
                }
                if(plotStory[part][plotRate][1] != 'null' ){
                    plotperson.style.display = 'block';
                    plottext.style.textAlign = 'left';
                    plotperson.innerHTML = `<img src="/picture/${plotStory[part][plotRate][1]}.png" alt="" class="plotperson_img" >`;
                    plotperson.appendChild(plotperson_name);
                    plotperson_name.innerHTML = plotStory[part][plotRate][2];
                }
                else{
                    plotperson.style.display = 'none';
                    plottext.style.textAlign = 'center';
                    plotperson.innerHTML = "";
                }
            }
            await waitingKeypress();
            textRate = -1;
            // console.log('good job!')  ;
            plotRate +=1;
            if(plotStory[part][plotRate+1] == "END"){
                plotperson.style.display = 'none';
                plotRate=-1;
                PlotEND();
                return 0;
            }
            else if(plotRate<plotStory[part].indexOf("END")){
                
                say(plotStory[part][plotRate][0]);
            }
            else{
                console.log("plot end1")
                plotperson.style.display = 'none';
                plotRate=-1;
                PlotEND();
                return 0;
            }
                
        
        }
    }
    else{
         console.log("plot end2");
         plotRate=-1;
         return 0;
    }
 
 }
 async function say_choice(choiceRate_i,choicechoice,choiceplotRate){//印出劇情的主程式
    // choiceRate choicechoice choiceplotRate 
    if(choiceplotRate<plot_choice[choiceRate_i][choicechoice].indexOf("END")){
        plottext.innerHTML ="";
        plottext.style.color ="white";
        if(plot_choice[choiceRate_i][choicechoice][choiceplotRate][0] == "choice"){
            plotperson.style.display = 'block';
            plottext.style.textAlign = 'left';
            plotperson.innerHTML = `<img src="/picture/person.png" alt="" class="plotperson_img" >`;
            plotperson.appendChild(plotperson_name);
            plotperson_name.innerHTML = "you";
            // 
            // console.log("AHOY")
            plottext_button1.style.display = "inline-block";
            plottext_button2.style.display = "inline-block";
            plottext_button1.innerHTML = plot_choice[choiceRate_i][choicechoice][choiceplotRate][1]
            plottext_button2.innerHTML = plot_choice[choiceRate_i][choicechoice][choiceplotRate][3]
            plotTextwindow_next.style.display ='none';
            plottext_button1.onclick = plot_choice1;
            plottext_button2.onclick = plot_choice2;

        }
        else{            
            textRate = 0;
            // console.log(`textRate${textRate}||plotRate${plotRate}`)
            // if(plot_choice[choiceRate_i][choicechoice][choiceplotRate][0] == "prompt"){
            //     prompt_s(plot_choice[choiceRate_i][choicechoice][choiceplotRate][1]);
            // }
            // else{
                typing_text = plot_choice[choiceRate_i][choicechoice][choiceplotRate][0];
                typing();
                if(plot_choice[choiceRate_i][choicechoice][choiceplotRate][3] != undefined){
                    plottext.style.color = `${plot_choice[choiceRate_i][choicechoice][choiceplotRate][3]}`;
                }
                if(plot_choice[choiceRate_i][choicechoice][choiceplotRate][1] != 'null' ){
                    plotperson.style.display = 'block';
                    plottext.style.textAlign = 'left';
                    plotperson.innerHTML = `<img src="/picture/${plot_choice[choiceRate_i][choicechoice][choiceplotRate][1]}.png" alt="" class="plotperson_img" >`;
                    plotperson.appendChild(plotperson_name);
                    plotperson_name.innerHTML = plot_choice[choiceRate_i][choicechoice][choiceplotRate][2];
                }
                else{
                    plotperson.style.display = 'none';
                    plottext.style.textAlign = 'center';
                    plotperson.innerHTML = "";
                }
            // }
            console.log(choiceRate);
            await waitingKeypress();
            textRate = -1;
            console.log('good job!');
            if(plot_choice[choiceRate_i][choicechoice][choiceplotRate+1] == "END"){
                console.log("plot end3")
                plotperson.style.display = 'none';
                choiceRate =choiceRate+1;
                say();
                return 0;
            }
            else if(choiceplotRate<plot_choice[choiceRate_i][choicechoice].indexOf("END")){
                
                say_choice(choiceRate_i,choicechoice,choiceplotRate+1);
            }
            else{
                console.log("plot end1")
                plotperson.style.display = 'none';
                choiceRate =choiceRate+1;
                say();
                
                return 0;
            }
                
        
        }
    }
    else{
         console.log("plot end2");
         say();
         choiceRate =choiceRate+1;
         return 0;
    }
 
 }
// function skip_plot(){
//     plotRate=-1;
//     PlotEND();
// }
function plot_choice1(){
    plotTextwindow_next.style.display ='block';
    plottext_button1.style.display = "none";
    plottext_button2.style.display = "none";
    plotRate +=1;
    console.log(choiceRate);
    say_choice(choiceRate,0,0);
}
function plot_choice2(){
    plotTextwindow_next.style.display ='block';
    plottext_button1.style.display = "none";
    plottext_button2.style.display = "none";
    plotRate +=1;
    console.log(choiceRate);
    say_choice(choiceRate,1,0);
}
 function waitingKeypress() {//等待enter按下(劇情)
     return new Promise((resolve) => {
       document.addEventListener('keydown', onKeyHandler);
       function onKeyHandler(e) {
         if (e.keyCode|mainBox.onclick ) {
           document.removeEventListener('keydown', onKeyHandler);
           resolve();
         }
       }
     });
   }
//  function typing(){
//      if (textRate<=plotStory[part][plotRate][0].length){
//          console.log(plotStory[part][plotRate][0].charAt(textRate));
//          plottext.innerHTML += plotStory[part][plotRate][0].charAt(textRate);
//          textRate++
//          setTimeout(typing,50);
//      }
//       else{
        
//          return 0
//      }
//  }
 function typing(){
     if(textRate == -1){
        return 0;
    }
    else if (textRate<=typing_text.length){
        // console.log(typing_text.charAt(textRate));
        plottext.innerHTML += typing_text.charAt(textRate);
        textRate++;
        setTimeout(typing,50);
    }
     else{
       
        return 0;
    }
}
//
// function typing(inp){
//     for(textRate=0;textRate<inp.length;textRate++){
//         console.log(inp.charAt(textRate))
//         setTimeout(plottext.innerHTML += inp.charAt(textRate),50);    
//     }
//     return 0    

// }
 function nextbuttonanimation(){
     if(plotRate != -1){
         if(nBAMove){
             plotTextwindow_next.style.marginTop='157px';
             nBAMove = false;
             setTimeout(nextbuttonanimation,500);
         }
         else{
             plotTextwindow_next.style.marginTop='163px';
             nBAMove = true;
             setTimeout(nextbuttonanimation,500);
         }
     }
     else{
         plotTextwindow_next.style.marginTop = '20px';
     }
 }
 function initplot(){
    plotRate = 0;
    plotTextwindow.style.display = 'block';
    nextbuttonanimation();
    
}