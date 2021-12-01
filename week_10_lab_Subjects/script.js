function subjects(){
	
	var numSubjects=parseInt(document.getElementById("formNumSubjects").value);
	let result=[];
	for(i=0;i<numSubjects;i++){
		result[i] = prompt("Please enter your result in subject "+(i+1));
		
		document.getElementById("main").innerHTML+=("<br /> Your result in subject "+(i+1)+" is: "+result[i]+"%");
	}



	
	for(i=0;i<result;i++){
	if(result>=80){
        document.getElementById("main").innerHTML+=" Grade =  A";
        }
    else if((result<80)&&(result>=60)){
        document.getElementById("main").innerHTML+="   B";
    }
    else if((result<60)&&(result>=40)){
    document.getElementById("main").innerHTML+="   C";
    }
    else {
    document.getElementById("main").innerHTML+="  ... F";
    }

	}
}
	
	



    

