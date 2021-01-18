var currentResponses;
var currentQuestion = "start";
console.log("basicSyntaxeExucuted");

function displayError(originalQuestion)
{
    var temp = document.getElementById("question");
    temp.textContent = "ERROR: We were unable to figure out what you meant, make sure you follow the instructions about how to input your info.";
    setTimeout(function () {temp.textContent = originalQuestion}, 3000);
}

function getInputValue() {
    console.log("functionStart")
    inputVal = document.getElementById("group").value;
    var temp = document.getElementById("question");
    console.log(inputVal);

    if(currentQuestion == "start")
    {
        if (inputVal == "yoga" || inputval == "Yoga") {

            currentQuestion = "flexible";
            temp.textContent = "Would you say you are somewhat flexible?"; 
        }

        else if (inputVal == "cardio" || inputVal == "Cardio") {
            console.log("card");
        }
        
        else if (inputVal == "muscular" || inputVal == "Muscular") {
            console.log("muscu")
        }
        else { displayError("Question 1: Would you like to do cardio, muscular, yoga? (Hint: Please answer with with only the type of excercise you wish to do, written exactly how it is here.") }
    }
    else if(currentQuestion == "flexible")
    {
        if(inputVal == "yes" || inputVal == "no")
        {
            currentResponses = inputVal + "-" + currentQuestion;
            currentQuestion = "calm";
            temp.textContent = "Would you like workouts that help you calm down?"; 
        } 
        else { displayError("Would you say you are somewhat flexible?") }
    }
    else if(currentQuestion == "calm")
    {
        if(inputVal == "yes" || inputVal == "no")
        {
            currentResponses += inputVal + "-" + currentQuestion;
            temp.textContent = currentResponses;
        } 
        else { displayError("Would you say you are somewhat flexible?") }
    }
    document.getElementById("group").value = "";
}