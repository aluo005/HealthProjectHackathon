var currentQuestion;
var i = 0;
document.getElementById('yes').style.display='none';
document.getElementById('no').style.display='none';
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
    if (type == "relaxed") {
        if (q2done == false) {
            popgoestheweasal();
            q2 = "done";
            i = i+1;
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









function getInputValue() {
    console.log("functionStart");
    var inputVal = document.getElementById("group").value;
    console.log(inputVal);

    if (inputVal == "relaxed") {
        console.log("yog");
        type = "relaxed";
        document.getElementById('group').style.display='none'; 
        document.getElementById('submit').style.display='none';
        document.getElementById('yes').style.display='block';
        document.getElementById('no').style.display='block';
        while (q2done == false) {
            temp.textContent = "Question 1.5: Would you like a hard workout?";    
        } 
        for (i=0; i < questionelaxed.length;) {
            temp.textContent = questionelaxed[i];    
        }

    }

    else if (inputVal == "intense") {
        console.log("card");
        type = "intense";
        document.getElementById('group').style.display='none';
        document.getElementById('submit').style.display='none'; 
        document.getElementById('yes').style.display='block';
        document.getElementById('no').style.display='block';
        while (q2done == false) {
            temp.textContent = "Would you like a hard workout?";    
        } 
        for (i=0; i < questionintense.length;) {
            temp.textContent = questionintense[i];  
        }
    }   


    else {
        console.log("else");
        var temp = document.getElementById("question");
        temp.textContent = "ERROR: We were unable to figure out what you meant, make sure you follow the instructions about how to input your info.";
        setTimeout(function () {temp.textContent = "Question 1: Would you like to do cardio, muscular, yoga? (Hint: Please answer with with only the type of excercise you wish to do, written exactly how it is here."}, 3000);
    }
}