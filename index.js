var randomNumber1=Math.floor(Math.random()*6)+1;
var source1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",source1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var source2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",source2);

var text;
if(randomNumber1>randomNumber2){
  text="Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
  text="Player 2 wins!";
}
else
{
  text="Draw!";
}
document.querySelector("h1").innerHTML=text;
