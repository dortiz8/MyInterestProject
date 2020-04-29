
let movieDiv = document.getElementById("movieDiv");  
let movieListDiv = document.querySelectorAll("#movieList"); 
let movieList = document.querySelectorAll("#movieList li"); 

function changeDivBackground(){
    
    for(i = 0; i < movieList.length; i++){
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

let buttonClose = document.getElementById("close"); 

function showVid(){
    let paper = document.getElementsByClassName("toiletJuggle"); 
    paper[0].style.display = 'block'; 
}

function closeVid(){
    let paper = document.getElementsByClassName("toiletJuggle");
    paper[0].style.display = 'none'; 
}

