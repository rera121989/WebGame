var row = "0";
var col = "0";

var score = 100;


function but(){
	document.getElementById("start").disabled = true;
	document.getElementById("quit").disabled = false;
	
	
	restore(); 
	var number = prompt("Please enter a lucky number to start from: ");

	//start randomizer
	this.row = number % 8;
	var cellName = this.col + this.row;
	document.getElementById(cellName).innerHTML = "Start";
	document.getElementById(cellName).style.color = "black";
	document.getElementById(cellName).style.background = "yellow";
}

function restore(){
	var x = document.getElementsByClassName("name");

	for (var i = 0; i <x.length; i++) {
		x[i].style.color = "white";  	
	}
}

function up(){
	var cl = (+this.col) -1;
		
		if (cl >7 || cl < 0) { 
			alert("Wall Encountered !!");
			cl = this.col;
		}

		var x = cl.toString();
		var rw = this.row;

		this.row =rw;
		this.col = x;
		var num = x.concat(rw);

		document.getElementById(num).style.background = "lightblue";
		document.getElementById(num).style.color = "black";	

		stage(num);


}

function stage(num){
		if (document.getElementById(num).innerHTML == 'W'){
			document.getElementById(num).style.background = "yellow";


			$(document).ready(function(){
        		score = score + 10;
            	$("h4").text("Score : " + score + "pts");    
            });

		}
		if (document.getElementById(num).innerHTML == "C") {
			document.getElementById(num).style.background = "red";	

			$(document).ready(function(){
        		score = score - 10;
            	$("h4").text("Score : " + score + "pts");    
            });

		}
		if (document.getElementById(num).innerHTML == "E") {
			document.getElementById(num).style.background = "green";	

			$(document).ready(function(){
            	$("h4").text("Final Score : " + score + "pts");    
            });

            document.getElementById("up").disabled = true;
            document.getElementById("down").disabled = true;
            document.getElementById("left").disabled = true;
            document.getElementById("right").disabled = true;

		}

}

function down(){
	var cl = (+this.col) +1;
		//check that direction command doesn't pass over a wall.
		if (cl >7 || cl < 0) { 
			alert("Wall Encountered !!");
			
			cl = this.col;
		}

		var x = cl.toString();
		var rw = this.row;

		var num = x.concat(rw);
		this.row = rw;
		this.col = x;
		document.getElementById(num).hidden = "false";
		document.getElementById(num).style.color = "black";

		stage(num);
}

function right(){

	var rw = (+this.row) + 1;
		//check that direction command doesn't pass over a wall.
		if (rw >7 || rw < 0) { 
			alert("Wall Encountered !!");
			
			rw = this.row;
		}		
		var x = rw.toString();

		var cl = this.col;
		var num = cl.concat(x);
		this.row = x;
		this.col = cl;
		document.getElementById(num).style.background = "lightblue";
		document.getElementById(num).style.color = "black";	

		stage(num);
}

function left(){
	var rw = (+this.row)-1;
		//check that direction command doesn't pass over a wall.
		if (rw >7 || rw < 0) { 
			alert("Wall Encountered !!");
		
			rw = this.row;
		}		

		var cl = this.col;

		var x = rw.toString();
		var num = cl.concat(x);
		this.row = x;
		this.col = cl;
		document.getElementById(num).style.background = "lightblue";
		document.getElementById(num).style.color = "black";

		stage(num);
}

function showAllCells(){

	var x = document.getElementsByClassName("name");

	for (var i = 0; i <x.length; i++) {
		x[i].style.color = "black";	
	}

	document.getElementById("start").disabled = false; 

}

function clear(){
	window.location.reload();
}