
var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");
var user = prompt("Enter your name");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    h1.style.backgroundColor = "steelblue";

    numSquares = 3;
    
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
        }else{
        squares[i].style.display = "none";
        }
    }

   
})

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    h1.style.backgroundColor = "steelblue";
    
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

   
    
})


    resetButton.addEventListener("click",function(){
        //GENERATE RANDOM COLOR
        colors = generateRandomColors(numSquares);
        //select new colors from array
        pickedColor = pickColor();
    // change color display for picked colors
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for( var i = 0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "steelblue";
    }

    
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to  squares 
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor,pickedColor);
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            
            messageDisplay.textContent="Well Done " + user;
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.background = "steelblue";
            
            
        }else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
            
        } 
    });

}

function changeColors(color){
    //loop through all squares 
    for(var i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function  pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
    //make an array  
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
// get Random colors and push into array
        arr.push(randomColor());
    }
    // return array
    return arr;
}

function randomColor(){
    //pick a color from red between 0 - 255
    var r = Math.floor(Math.random()*256);
    //pick a color from green between 0 - 255
    var g = Math.floor(Math.random()*256);
    //pick a color from blue between 0 - 255 
    var b = Math.floor(Math.random()*256);
   return  "rgb(" + r + ", " + g + ", " + b + ")";
}