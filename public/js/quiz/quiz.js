




let answer3Question1 = document.getElementById("answer3-question1")
answer3Question1.addEventListener("click", correctAnswer1 )

function correctAnswer1 (){

    document.querySelector(".answer3").style.backgroundColor = "#C1D8B5"
    document.querySelector("#question1 section h2").innerHTML = "Een boekje is het meest veilig manier om alle wachtwoorden op te slaan. Een internetcrimineel kan er nooit bijkomen"
    setTimeout(function(){ 
    document.getElementById("question1").style.opacity = "0"
    document.getElementById("question1").style.height = "0"
    }, 6000);
    
    console.log("test")
}