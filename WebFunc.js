var currentQuestion;
var i = 0;
var q1yes = ["push ups", "elliptical machine", "walking", "stair-climbing",  "jumping jacks", "jump rope",  "treadmill",  "rowing machine", "stair climb"];
var q2yes = ["sprints", "tabata", "kettlebell swings", "battle rope", "burpees", "squats", "burpees" ];
var q3yes = ["running", "walking", "elliptical machine","push ups"];
var q4yes = ["running", "walking", "elliptical machine","push ups", "squats",  "jumping jacks"];
var q1yyes = ["downward dog yoga pose", "cat-cow stretch", "recline hand to big toe pose", "low lunge", "pigeon pose", "firefly pose", "extended triangle pose"];
var q2yyes =  ["downward dog yoga pose", "cat-cow stretch", "mountain pose", "corpse pose", "extended triangle pose"];
var q3yyes =  ["anderson squat", "reverse lunger", "deadlift", "shoulder press", "v sit"];
var q4yyes = ["squats", "lunges", "v sit", "planks", "pushups"];
var questionintense = ["Question 2:Do you get tired after working out in small amounts?","Question 2: Do you prefer intense workouts? ","Question 3:Do you suffer knee or back pain?","Question 4:Do you have problems catching your breath after intense workouts"];
var questionelaxed = ["Question 2:Would you say your somewhat flexible?", "Question 3: Would you like a workout that helps you calm down?", "Question 4: Do you prefer more intense/advanced yoga exercises?","Question 5:Would you like a workout that does stretches?"];
var type;
var masterList = [];
console.log("basicExecution");
var q2done = false;

function popgoestheweasal() {
    q1yes.pop();
    q2yes.pop();
    q3yes.pop();
    q4yes.pop();
    q1yes.pop();
    q2yes.pop();
    q3yes.pop();
    q4yes.pop();
    q1yyes.pop();
    q2yyes.pop();
    q3yyes.pop();
    q4yyes.pop();
    q1yyes.pop();
    q2yyes.pop();
    q3yyes.pop();
    q4yyes.pop();




} 

function yoga() {
    console.log("yoga")
    if (type == "relaxed") {
        if (q2done == false) {
            popgoestheweasal();
            q2 = "done";
            i = i+1;
            test();
        }   
        else {
            masterList.extend(q + i + yyes )
            i = i+1;
                
            } 
        }  
    if (type == "intense") {
        if (q2done == false) {
            popgoestheweasal();
            q2 = "done";
            i = i+1;
            test();
        }
        else { 
            masterList.extend(q + (i+1) + yyes )
            i = i+1;
                
        } 
    }

}

function yoga2() {
    i = i+1;
    q2 = "done";

}



function test() {
    if (q2done == "done") {
        for (i=0; i < questionelaxed.length;) {
        console.log("for");
        temp.textContent = questionelaxed[i];    
    }
}





function getInputValue() {
    console.log("functionStart");
    var temp = document.getElementById("question");
    var inputVal = document.getElementById("group").value;
    console.log(inputVal);

    if (inputVal == "relaxed") {
        console.log("yog");
        var temp = document.getElementById("question");
        type = "relaxed";
        document.getElementById('group').style.display='none'; 
        document.getElementById('submit').style.display='none';
        document.getElementById('yes').style.display='block';
        document.getElementById('no').style.display='block';
        if (q2done == false) {
            temp.textContent = "Question 1.5: Would you like a hard workout?";    
            console.log("while");
            if (q2done == "done") {
                for (i=0; i < questionelaxed.length;) {
                console.log("for");
                temp.textContent = questionelaxed[i];    
            }
        }
    }

    else if (inputVal == "intense") {
        console.log("card");
        var temp = document.getElementById("question");
        type = "intense";
        document.getElementById('group').style.display='none';
        document.getElementById('submit').style.display='none'; 
        document.getElementById('yes').style.display='block';
        document.getElementById('no').style.display='block';
        if (q2done == false) {
            temp.textContent = "Would you like a hard workout?";    
            if (q2done == "done") {
                for (i=0; i < questionintense.length;) {
                temp.textContent = questionintense[i];  
            }
        }
       }    


    else {
        console.log("else");
        var temp = document.getElementById("question");
        temp.textContent = "ERROR: We were unable to figure out what you meant, make sure you follow the instructions about how to input your info.";
        setTimeout(function () {temp.textContent = "Question 1: What workout would you like to do: relaxed, or intense? (Note: Please answer with with only the type of excercise you wish to do, written exactly how it is here."}, 3000);
    }
    }
    }
}
