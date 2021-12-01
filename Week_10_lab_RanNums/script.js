/*
Create an application that generates an array of 5 random
 numbers 1-10. 
 The user should then guess a number and 
 the app should tell them how many time that number exists 
 within the array.*/
 
let randomNum=[];
function Num(){
	for(i=0;i<5;i++){
		randomNum[i]=Math.floor(Math.random()*10)+1;
	}

	userChoice=parseInt(prompt("Enter a number between 1 and 10:"));
	timesappeared=0;
	for(i=0;i<randomNum.length;i++){
		if(randomNum[i]==userChoice){
			timesappeared++;
		}
	}	
	alert("your number appears "+timesappeared+" times");
	document.getElementById("main").innerHTML="The computer picked the following random numbers: "+randomNum.toString();
	
}
