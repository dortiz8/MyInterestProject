"use strict"

let movieDiv = document.getElementById("movieDiv");  
let movieListDiv = document.querySelectorAll("#movieList"); 
let movieList = document.querySelectorAll("#movieList li"); 

//Change Background of OrderList Div 
function changeDivBackground(){
    
    for(var i = 0; i < movieList.length; i++){
        let movie = movieList[i]; 
        movie.addEventListener('click', ()=>{
            
            movie.style.color = "red"; 
            
            if(movie.innerHTML === "Avengers: Infinity War"){
                movieDiv.className = "infinity"; 
            }if(movie.innerHTML === "Avengers: End Game"){
                movieDiv.className = "endgame"; 
            }
            if(movie.innerHTML === "The Dark Knight"){
                movieDiv.className = "darknight"; 
            }
            if(movie.innerHTML === "The Dark Knight Rises"){
                movieDiv.className = "bane"; 
            }

            movieDiv.style.color = "orange"; 
            movieDiv.style.width = "600px";
            movieDiv.style.height = "400px";
            movieDiv.style.padding = "10px"
        })
    }
}
changeDivBackground(); 

//Open and Close Buttons for Video Div 
let buttonClose = document.getElementById("close"); 

function showVid(){
    let paper = document.getElementsByClassName("toiletJuggle"); 
    paper[0].style.display = 'block'; 
}

function closeVid(){
    let paper = document.getElementsByClassName("toiletJuggle");
    paper[0].style.display = 'none'; 
}

//Create two-colored Rectangle

let rectButton = document.getElementById("createRect"); 
let c1 = document.getElementById("rectC1") 
let c2 = document.getElementById("rectC2")
let canvas = document.getElementById("canvas1"); 
let ctx = canvas.getContext("2d"); 

let inputSlider = document.getElementById("slider");


rectButton.addEventListener("click", ()=>{
    let gradient = ctx.createLinearGradient(50,50,150,150)
        gradient.addColorStop(0, c1.value); 
        gradient.addColorStop(1, c2.value); 
        ctx.fillStyle = gradient; 
        ctx.fillRect(10, 10, 400, 400); 
})

inputSlider.addEventListener('input', ()=>{
    let value = inputSlider.value; 
    let gradient = ctx.createLinearGradient(0,0,parseInt(value),parseInt(value))
        gradient.addColorStop(0, c1.value); 
        gradient.addColorStop(1, c2.value); 
        ctx.fillStyle = gradient; 
        ctx.fillRect(10, 10, 400, 400); 
}
); 




//Function to Upload Documents 
var image;
var image2;  

function upload(){
    var imgcanvas = document.getElementById("can"); 
    var imgcanvas2 = document.getElementById("can2"); 
    var fileinput = document.getElementById("finput"); 
    

    image = new SimpleImage(fileinput); 
    image2 = new SimpleImage(fileinput); 
    image.drawTo(imgcanvas); 
    image2.drawTo(imgcanvas2); 
}

//Function to make an image greyscale 

function makeGrey(){
    
    for(var pix of image.values()){
        let red = pix.getRed(); 
        let blue = pix.getBlue(); 
        let green = pix.getGreen(); 
        let average = (red + blue + green)/3; 

        pix.setBlue(average)
        pix.setRed(average)
        pix.setGreen(average)
    }
    var imgcanvas = document.getElementById("can"); 
    image.drawTo(imgcanvas); 
}

//Upload Slider
let slider = document.getElementById("uploadSlider"); 

function upslider(){
   let value = slider.value; 
   
        for(var pix of image2.values()){
          if((pix.getGreen() + pix.getBlue() + pix.getRed()) < 765){
            pix.setGreen(value); 
            pix.setBlue(value); 
            pix.setRed(value); 
          }else{
            //   pix.setGreen(pix.getGreen()-value)
            //   pix.setBlue(pix.getBlue()-value)
            //   pix.setRed(pix.getRed()-value)
          }

    }

    var imgcanvas2 = document.getElementById("can2"); 
    
    image2.drawTo(imgcanvas2); 
    // context.clearRect(0,0,imgcanvas2.width,imgcanvas2.height); 
    
}; 

    
    var firstImage = null; 

function firstLoad(){
    var firstPic = document.getElementById("firstPic"); 
    var firstInput = document.getElementById("firstInput"); 
    firstImage = new SimpleImage(firstInput); 
    firstImage.drawTo(firstPic); 
    
}

    var greenImage = null; 

function secondLoad(){
    var greenPic = document.getElementById("greenPic"); 
    var greenInput = document.getElementById("greenInput"); 
    greenImage = new SimpleImage(greenInput); 
    greenImage.drawTo(greenPic); 
}

 


function greenScreen(){
    var output = new SimpleImage(greenImage.getWidth(), greenImage.getHeight());
    for(var i of greenImage.values()){
        let green = i; 
        let x = i.getX(); 
        let y = i.getY(); 

        if(green.getGreen() >= green.getRed()){
           let bgimg = firstImage.getPixel(x,y); 
           output.setPixel(x,y,bgimg); 
        }else{
            output.setPixel(x,y, i); 
        }

    }
    var firstPic = document.getElementById("firstPic");
    output.drawTo(firstPic); 
    let can2 = document.getElementById("greenPic");
    let ctx2 = can2.getContext("2d")
    ctx2.clearRect(0,0, can2.width, can2.height);
}

; 

function ClearCanvas(){
    let can1 = document.getElementById("firstPic"); 
    let can2 = document.getElementById("greenPic");

    let ctx1 = can1.getContext("2d"); 
    let ctx2 = can2.getContext("2d"); 

    ctx1.clearRect(0,0, can1.width, can1.height); 
    ctx2.clearRect(0,0, can2.width, can2.height);
}




// function greenScreen(){
//     if(firstImage = null || ! firstImage.complete()){
//         alert("background image not loaded"); 
//         return; 
//     }
//     if(greenImage = null || ! greenImage.complete()){
//         alert("foreground image not loaded"); 
//         return; 
//     }else{
//         for(var pix of greenImage.values()){
//             let x = pix.getX(); 
//             let y = pix.getY(); 
           
//             if(pix.getGreen() > pix.getBlue() + pix.getRed()){
//               var bgpix = firstImage.getPixel(x,y); 
//               output.setPixel(x,y, bgpix); 
//             }else{
//                 output.setPixel(x,y,pixel); 
//             }
//         }
//         output.drawTo(firstPic);  
//     }

    
// }





   


    