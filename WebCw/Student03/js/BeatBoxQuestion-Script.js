var quiz = document.getElementById('quiz');
var questionEl = document.getElementById('question');

var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');

var nextQ = document.getElementById('nextQ');
var resultCont = document.getElementById('result');

var currentQuestion = 0;
var totQuestions = questions.length;

/*Loading the question and the answers to the quiz container*/
function loadQuestion(questionIndex){
	
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1)+' . '+q.question;
	answer1.textContent = q.ans1;
	answer2.textContent = q.ans2;
	answer3.textContent = q.ans3;
	answer4.textContent = q.ans4;
};

var marks = 0;
var score = 0;

/*Next Question button function*/
function nextQuestion(){
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	if(!selectedOption){					//To check if the user has not select an answer
		alert('Please select a answer to continue');
		return;
	}
//var array_answers =[];
	var selectedAnswer = selectedOption.value; //Getting the selected value
	
	//To check if the user's answer is correct
	if(questions[currentQuestion].correctAnswer == selectedAnswer){ 
		//array_answers.push(selectedOption.value);
		marks += 2;
		score +=1;
	}else
	{
		selectedOption.checked = false;
		//array_answers.push(selectedOption.value);
		marks-=1;
	}
	currentQuestion+=1;
	
	/* If the total questions equls to the current 
	question the next question button will changed to Submit*/
	if(currentQuestion == totQuestions - 1){
		nextQ.textContent = 'Submit';
	}
	
	if(marks <0)					//If the marks is less than 0 it will be initialise the marks to 0 
	{
	marks = 0;
	};
	
	if(currentQuestion == totQuestions){			//To check if all the questions are answered
		
		var timeSpend = 90 - time;
		//var text = "";
		//var i;
		
		clearInterval(counter);				//To stop the timer if the total questions are answered
		{
		document.getElementById("timer").innerHTML = "";
		};
		
		quiz.style.display = 'none';
		resultCont.style.display = '';
		
		
		//for(i = 0; i < array_answers.length; i++){
		//	text += array_answers[i]+""
	    //	}
		
		resultCont.textContent = " You took "+ timeSpend+" seconds to complete the quiz. You got "+score+
		"/10 questions correct. Your Score is "+marks; // Question"+text;
		
		//To change the background Color acroding to the marks user has got
		if(marks=>10){			 
			document.body.style.backgroundColor="green";
		}
		if(marks<10){
			document.body.style.backgroundColor="red";
		}
		return;
	}
	
	loadQuestion(currentQuestion);
};
loadQuestion(currentQuestion);

var time=90;							//Initialising the var time to 90

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer()
{	

//Counting down the time
	time=time-1;
	if (time <= 0)
	{
	var timeSpend = 90 - time;
	
/*To auto submit when the timer has timed out*/
    clearInterval(counter);
	document.getElementById("timer").innerHTML = "Timer Expired";
	document.getElementById("timer").innerHTML = "";
	 
/*To display the scores and the time spend*/
    quiz.style.display = 'none';
	resultCont.style.display = '';
	resultCont.textContent = "You couldn't complete the quiz in time. You got "+score+
											"/10 questions correct. Your score "+marks;
		
/*To change the color acroding to the marks*/
		if(marks=>10)
		{
			document.body.style.backgroundColor="green";
		}
		if(marks<10)
		{
			document.body.style.backgroundColor="red";
		}
     
     return;
  }
document.getElementById("timer").innerHTML="You have " + time + " seconds"; 
}

/*Student 1 Java Script -- Zoom in and Zoom out function*/

function increaseFontSize(objectID) 
{   
	/*create a function to increase the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize+.1)+"em";
}

function decreaseFontSize(objectID)
 {    
/*create a function to decrease the font size of the web page*/
    var object=document.getElementById(objectID);
    var currentSize=parseFloat(object.style.fontSize);
    object.style.fontSize=(currentSize-.1)+"em";
}


 