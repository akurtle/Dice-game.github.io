

var cubes= {
    1:"images/dice1.png",
    2:"images/dice2.png", 
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png"
}





document.getElementsByTagName("button")[2].onclick=function(){
    
    var chooser1= Math.floor(Math.random()*6)+1

    var chooser2= Math.floor(Math.random()*6)+1

    document.getElementsByTagName("img")[1].src=cubes[chooser1]


    document.getElementsByTagName("img")[2].src=cubes[chooser2] 


    if(chooser1>chooser2){
        document.getElementsByClassName("winner")[0].innerHTML="Player 1 Wins"
    }
    
    else if(chooser1<chooser2){
        document.getElementsByClassName("winner")[0].innerHTML="Player 2 Wins"
    }
    
    else if(chooser1==chooser2){
        document.getElementsByClassName("winner")[0].innerHTML="Draw"
    }
}



document.getElementsByTagName("button")[1].onclick=function(){
    
    document.getElementsByClassName("title")[0].classList.remove("active");
    document.getElementsByClassName("title")[0].classList.add("inactive");
    
    setInterval(()=>{
        document.getElementsByClassName("play")[0].classList.remove("inactive");
        document.getElementsByClassName("play")[0].classList.add("active");
        },1000)
    
  
}








