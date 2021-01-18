var currentQuestion;
console.log("basicSyntaxeExucuted");


function getInputValue() {
    console.log("functionStart")
    inputVal = document.getElementById("group").value;
    console.log(inputVal);
    if (inputVal == "yoga" || inputval == "Yoga") {
        console.log("yog");
    }

    else if (inputVal == "cardio" || inputVal == "Cardio") {
        console.log("card");
    }
    
    else if (inputVal == "muscular" || inputVal == "Muscular") {
        console.log("muscu")
    }

    else {
        console.log("else");
        var temp = document.getElementById("question");
        temp.textContent = "ERROR: We were unable to figure out what you meant, make sure you follow the instructions about how to input your info.";
        setTimeout(function () {temp.textContent = "Question 1: Would you like to do cardio, muscular, yoga? (Hint: Please answer with with only the type of excercise you wish to do, written exactly how it is here."}, 3000);
    }
}