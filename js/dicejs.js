

var cubes= {
    1:"C:/Users/yousu/Projects/Web/DiceGame/images/dice1.png",
    2:"C:/Users/yousu/Projects/Web/DiceGame/images/dice2.png", 
    3:"C:/Users/yousu/Projects/Web/DiceGame/images/dice3.png",
    4:"C:/Users/yousu/Projects/Web/DiceGame/images/dice4.png",
    5:"C:/Users/yousu/Projects/Web/DiceGame/images/dice5.png",
    6:"C:/Users/yousu/Projects/Web/DiceGame/images/dice6.png"
}





document.getElementsByTagName("button")[0].onclick=function(){
    
    var chooser1= Math.floor(Math.random()*6)+1

    var chooser2= Math.floor(Math.random()*6)+1

    document.getElementsByTagName("img")[0].src=cubes[chooser1]


    document.getElementsByTagName("img")[1].src=cubes[chooser2] 


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






if(chooser1>chooser2){
    document.getElementsByClassName("winner")[0].innerHTML="Player 1 Wins"
}

else if(chooser1<chooser2){
    document.getElementsByClassName("winner")[0].innerHTML="Player 2 Wins"
}

else if(chooser1==chooser2){
    document.getElementsByClassName("winner")[0].innerHTML="Draw"
}











