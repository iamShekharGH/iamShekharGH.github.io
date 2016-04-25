console.log("Javascript file started working ");
var fullBoxObj=[
	{ index:0 , value:"00" , valueBackup:"00" , who:"none" },
	{ index:1 , value:"01" , valueBackup:"01", who:"none" }	,
	{ index:2 , value:"02" , valueBackup:"02", who:"none" }	,
	{ index:3 , value:"10" , valueBackup:"10", who:"none" }	,
	{ index:4 , value:"11" , valueBackup:"11", who:"none" }	,
	{ index:5 , value:"12" , valueBackup:"12", who:"none" }	,
	{ index:6 , value:"20" , valueBackup:"20", who:"none" }	,
	{ index:7 , value:"21" , valueBackup:"21", who:"none" }	,
	{ index:8 , value:"22" , valueBackup:"22", who:"none" }	,
	{ index:9 , value:"Done", valueBackup:"Done", who:"none" }	];



var whichh='n';
var chancesNo = 0;
var isitover=false;
//    [0,1,2,3,4,5,6,7]
var a=[0,3,6,0,1,2,0,2];
var b=[1,4,7,3,4,5,4,4];
var c=[2,5,8,6,7,8,8,6];

//Stratergy for antiscipating if the game is goin to come to a point where in the next move
// Will let the player will have two places he can put to win the match.


function stratergy(val1){

	//console.log("Inside Stratergy  ...!");
	/*
	 * Now What i need to do in steps :~
	 * 1. check if you are able to finish it with One Strike.
	 * 2. if you are able to finish it change temp to that and return that value.
	 * 3. if not then check two steps if you can finish it in two steps or not.
	 * 4. if tjat is possible then try to follow that path..
	 *
	 * */
	var tempo = val1;
	console.log("The Index before Stratergy is    ::"+tempo);

	for(var i=0; i<8;i++){
		//console.log("entering StratergyLoop    ::"+i);
		//console.log("fullBoxObj["+i+"].who ::"+fullBoxObj[i].who);
		// console.log("--------"+i+"---------");
		// console.log("fullBoxObj["+a[i]+"].who  ::"+fullBoxObj[a[i]].who);
		// console.log("fullBoxObj["+b[i]+"].who  ::"+fullBoxObj[b[i]].who);
		// console.log("fullBoxObj["+c[i]+"].who  ::"+fullBoxObj[c[i]].who);
		// console.log("-----------------");
		
		//Trying to stop the opponet from winning..
		if(fullBoxObj[a[i]].who=="X" && fullBoxObj[b[i]].who=="X" && fullBoxObj[c[i]].value !="Done"){
			console.log("4");
				tempo=c[i]; 
			
			

		}else if(fullBoxObj[b[i]].who=="X" && fullBoxObj[c[i]].who=="X" && fullBoxObj[a[i]].value !="Done"){
				console.log("5");
				tempo=a[i]; 
		

		}else if(fullBoxObj[c[i]].who=="X" && fullBoxObj[a[i]].who=="X" && fullBoxObj[b[i]].value !="Done"){
				console.log("6");
				tempo=b[i]; 
			

		}else if(fullBoxObj[a[i]].who=="O" && fullBoxObj[b[i]].who=="O" && fullBoxObj[c[i]].value != "Done"){
			console.log("entering when a&b["+i+"] are== O");
			
				tempo=c[i]; 
			
			

		}else if(fullBoxObj[b[i]].who=="O" && fullBoxObj[c[i]].who=="O" && fullBoxObj[a[i]].value !="Done"){
				console.log("2");
				tempo=a[i]; 
			

		}else if(fullBoxObj[c[i]].who=="O" && fullBoxObj[a[i]].who=="O" && fullBoxObj[b[i]].value !="Done"){
				console.log("3");
				tempo=b[i]; 
			
				//If opponet has not won trying to win yourself
		}else{
			console.log("else");
			if(fullBoxObj[a[i]].who=="X" && fullBoxObj[b[i]]!="X" && fullBoxObj[c[i]]!="X"){
				temp=b[i]; //break;

			}else if(fullBoxObj[a[i]].who!="X" && fullBoxObj[b[i]]=="X" && fullBoxObj[c[i]]!="X"){
				temp=c[i]; //break;

			}else if(fullBoxObj[a[i]].who!="X" && fullBoxObj[b[i]]!="X" && fullBoxObj[c[i]]=="X"){
				temp=a[i]; //break;

			}

		}
	
		


	}
	console.log("The index which will win is 	::"+tempo);
	return tempo;

	
	
	

}


function win(){
	for(var i=0; i<8; i++){
		
		if(fullBoxObj[a[i]].who=="O" && fullBoxObj[b[i]].who=="O" && fullBoxObj[c[i]].who=="O" && !isitover){
			console.log("entered id of win");
			isitover=true;
			winimage("O",fullBoxObj[a[i]].valueBackup,fullBoxObj[b[i]].valueBackup,fullBoxObj[c[i]].valueBackup);
		}else if(fullBoxObj[a[i]].who=="X" && fullBoxObj[b[i]].who=="X" && fullBoxObj[c[i]].who=="X" && !isitover){
			console.log("entered id of win");
			isitover=true;
			winimage("X",fullBoxObj[a[i]].valueBackup,fullBoxObj[b[i]].valueBackup,fullBoxObj[c[i]].valueBackup);
		}

	}
}


function randomNo(){
	var temp=10*(Math.random());
	temp=parseInt(temp);
	return temp;
}

// var tempp=["20","21","22"];
// var temp1=0;

function myReply(){
	whichh="X";
	//console.log("MyMove");
	var temp=randomNo();
	while(fullBoxObj[temp].value=="Done"){
		temp=randomNo();
	}
	var abc=stratergy(temp);
	temp=abc;

	var id=fullBoxObj[temp].value;

	
	if(!isitover){
		$('#'+id).html("<img src='images/"+whichh+"Basic.png' />").hide().delay(200).slideToggle(200);
	}else{
		over();
	}
	fullBoxObj[temp].value="Done";
	fullBoxObj[temp].who=whichh;
	chancesNo++;
	//console.log("No f chances ::"+chancesNo);
	if(chancesNo >= 7){
		over();
	}
	win();
}

function changeImage(id){
	
	whichh="O";
	//console.log(whichh);
	//console.log("YourMove");
	var valueAt=9;

	for (var j=0; j<10; j++) {


		if(id==fullBoxObj[j].value){
			valueAt=fullBoxObj[j].index;
			break;
		}
		// statement
	}
	

	if(fullBoxObj[valueAt].value != "Done"){ 

		$("#"+id).html("<img src='images/"+whichh+"Basic.png' />").hide().slideToggle(200);

		fullBoxObj[valueAt].value="Done";
		fullBoxObj[valueAt].who=whichh;
		win();
		if(!isitover){
			myReply();
		}
		//myReply();

	}else{
 
	}

	
	chancesNo++;
	//console.log("No f chances ::"+chancesNo);
	if(chancesNo >= 7 && !isitover){
		over();
	}
}

function resetAll(){

		location.reload();
}

function over(){
	for(var i=0;i<10;i++){
		fullBoxObj[i].value="Done";
	}
}


function winimage(val1,val2,val3,val4){
	isitover=true;
	over();
		console.log(val1+val2+val3+val4);
		if(val1=="O"){
		
			$('#'+val2).html("<img src='images/"+val1+"GreenBackground.png' />").delay(600).animate({left:"40em"});
			$('#'+val3).html("<img src='images/"+val1+"GreenBackground.png' />").delay(400).animate({left:"40em"});
			$('#'+val4).html("<img src='images/"+val1+"GreenBackground.png' />").delay(200).animate({left:"40em"});
			over();
		}
		else if(val1=="X"){
			$('#'+val2).html("<img src='images/"+val1+"RedBackground.png' />").delay(600).animate({left:"40em"});
			$('#'+val3).html("<img src='images/"+val1+"RedBackground.png' />").delay(400).animate({left:"40em"});
			$('#'+val4).html("<img src='images/"+val1+"RedBackground.png' />").delay(200).animate({left:"40em"});
			over();

		}
}

$(document).ready(function(){
	$('.container').hide().delay(200).show(200);

	$('#00').on('click',function(){changeImage('00')});
	$('#01').on('click',function(){changeImage('01')});
	$('#02').on('click',function(){changeImage('02')});

	$('#10').on('click',function(){changeImage('10')});
	$('#11').on('click',function(){changeImage('11')});
	$('#12').on('click',function(){changeImage('12')});

	$('#20').on('click',function(){changeImage('20')});
	$('#21').on('click',function(){changeImage('21')});
	$('#22').on('click',function(){changeImage('22')});

	$('#reset').on('click',function(){resetAll()});

});
