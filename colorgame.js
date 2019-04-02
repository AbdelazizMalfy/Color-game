var colors = generateRandomColors(6);
var selectedColor= pickColor();
var message = document.querySelector(".message");
var displayColor = document.querySelector("h1");
var rectangles = document.querySelectorAll(".col-3");
var headerBg = document.querySelector("#headerBg");
var btnEasy = document.querySelector("#btnEasy");
var btnHard = document.querySelector("#btnHard");
var newGame = document.querySelector("#reset");

newGame.addEventListener("click",function(){
    //New Colors to rectangles array
    colors = generateRandomColors(6);
    // Pick New Selected color
    selectedColor = pickColor();
    //display the new selected color
    displayColor.textContent= selectedColor;
    //display the rectangles with the new colors
    for( var i = 0 ; i < colors.length ; i++){
        rectangles[i].style.backgroundColor=colors[i];
    }
    headerBg.style.backgroundColor="blue";
    newGame.textContent="New Colors"
    message.textContent="";

});


btnEasy.addEventListener("click",function(){
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    // choose 3 random colors for 3 items array
    colors = generateRandomColors(3);
    selectedColor = pickColor();
    displayColor.textContent=selectedColor;
    for( var i = 0 ; i < rectangles.length ; i++){
        if(colors[i]){
            rectangles[i].style.backgroundColor=colors[i];
        }else 
        {
            rectangles[i].style.display="none";
        }
        
    }
    message.textContent="";
    //hide the last 3 items of the array
    
});

btnHard.addEventListener("click",function(){
    btnEasy.classList.remove("selected");
    btnHard.classList.add("selected");
    //back to default
    colors = generateRandomColors(6);
    selectedColor = pickColor();
    displayColor.textContent=selectedColor;
    for( var i = 0 ; i < rectangles.length ; i++){
        rectangles[i].style.display="block";
        rectangles[i].style.backgroundColor=colors[i];
        
    }
    message.textContent="";

});

displayColor.textContent= selectedColor;

for ( var i = 0 ; i < rectangles.length ; i++){
    rectangles[i].style.backgroundColor = colors[i];
    rectangles[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor ;
        if( clickedColor === selectedColor){
            message.textContent="Correct";
            headerBg.style.backgroundColor=clickedColor;
            //turn all the rectangles to the correct color
            for ( var count = 0 ; count < rectangles.length ; count++){
            rectangles[count].style.backgroundColor=clickedColor;
            }
            newGame.textContent="Play Again?";
        }else {
            message.textContent="Wrong Answer";
            message.style.color= "white";
            this.style.backgroundColor="#232323";
        }

        
    });
}


function pickColor(){
    //randomly choose one color from colors array and ruturn it's value to be assigned to the selected color
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};


function generateRandomColors(arrayLength) {
    //take argument with the lenght of the array and generate colors based on that
    var randomArray = [];
    randomArray.length = arrayLength;
    for ( var i = 0 ; i < randomArray.length ; i++){
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);  
        randomArray[i] = "rgb(" + r + "," + " " + g + "," + " " + b + ")" ;
    }
    return randomArray;
};
