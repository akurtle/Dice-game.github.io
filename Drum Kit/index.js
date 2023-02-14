
var length = document.getElementsByTagName("button").length;

for(var i=0;i<length;i++){
    document.querySelectorAll('button')[i].addEventListener("click",function(){
        var text=this.innerHTML
        charChecker(text)
    })

    
    };
    document.addEventListener("keydown",function(event){
        try {
            document.getElementsByClassName(event.key+" drum")[0].style.color="black";
        charChecker(event.key)
        setTimeout(() => {
            document.getElementsByClassName(event.key+" drum")[0].style.color="#DA0463";
        }, 100);
        } catch (TypeError) {
            console.log("Use one of the defined keys!")
        }
        
        
    })

function charChecker(char){
        switch(char){
            case "w":
                var tom1= new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2= new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3= new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            
            case "d":
                var tom4= new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare= new Audio("sounds/snare.mp3");
                snare.play();
                break;
            
            case "k":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick= new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;  
            default:
                break;
        }
}
