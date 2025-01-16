var NumberOfDrum=document.querySelectorAll(".drum").length;
    for(var i=0; i<NumberOfDrum; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click",function (){
         var ButtoninnerHtml=this.innerHTML;
         makesound(ButtoninnerHtml);
         buttonAnimantion(ButtoninnerHtml);
        });
        }
         document.addEventListener("keydown",function(event){
            makesound(event.key);
            buttonAnimantion(event.key);
         });
         function makesound(key){
            switch(key){
                case "w":
                    var tom1=new Audio("./sounds/pubgwala.mp3");
                    tom1.play(); 
                    break;
                    case "a":
                    var tom2=new Audio("./sounds/Kehnakya.mp3"); 
                    tom2.play();
                    break;
                    case "s":
                    var tom3=new Audio("./sounds/rukojara.mp3");
                    tom3.play();
                    break;
                    case "d":
                    var tom4=new Audio("./sounds/gajjabbejjati.mp3");
                    tom4.play();
                    break;
                    case "j":
                    var crash=new Audio("./sounds/mazaaaya.mp3");
                    crash.play();
                    break;
                    case "k":
                    var snare=new Audio("./sounds/yedukh.mp3");
                    snare.play();
                    break;
                    case "l":
                    var kick=new Audio("./sounds/khatam.mp3");
                    kick.play();
                    break;
                    default:
                    break;
                }
        }
    
        function buttonAnimantion(currentKey){
                var activebutton= document.querySelector('.'+currentKey);
                activebutton.classList.add("pressed");
                setTimeout(function(){
                    activebutton.classList.remove("pressed");
                 },100);
        }
        