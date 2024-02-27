
    var randomNumber1= Math.ceil(Math.random()*6);
    var randomDiceImage="images/dice"+randomNumber1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);
    var randomNumber2=Math.ceil(Math.random()*6);
    var randomDiceImage2="images/dice"+randomNumber2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);
    if(randomNumber1===randomNumber2)
    {
     alert("Bruh u will get a girl friend next month!");
    }


