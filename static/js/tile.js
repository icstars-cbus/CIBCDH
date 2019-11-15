function smoke()	{	
	if (playerID == 5||playerID ==8||playerID ==12||playerID ==19||playerID ==24||playerID ==28||playerID ==36|playerID ==40||playerID ==44 )	{
		
		document.getElementById("tileColor").innerHTML = "purple donate square";
	}	else if (playerID == 2||playerID ==6||playerID ==14||playerID ==18||playerID ==22||playerID ==26||playerID ==30||playerID ==34||playerID ==38||playerID ==42)	{
		
		document.getElementById("tileColor").innerHTML = "yellow random event square";
	}	else if (playerID == 3||playerID ==7||playerID ==11||playerID ==15||playerID ==23||playerID ==27||playerID ==31||playerID ==35||playerID ==39||playerID ==43)	{
		
		document.getElementById("tileColor").innerHTML = "blue invest square";
	}	else if (playerID == 1 ||playerID ==9||playerID ==13||playerID ==17||playerID ==21||playerID ==25||playerID ==29||playerID ==33||playerID ==37||playerID ==41||playerID ==45)	{
		
		document.getElementById("tileColor").innerHTML = "orange save square";
	}	else if (playerID == 4 ||playerID ==10||playerID ==16||playerID ==20||playerID ==32)	{
		
		document.getElementById("tileColor").innerHTML = "red spend square";
	}	else	{
		
		document.getElementById("tileColor").innerHTML = "Payday! Congrats!";
	};
}
	
/*

//randomizing tiles
var color = ["#FF6A00", "#FFD401", "#0000FF", "#FF0000", "#680099"];
var x = 1;
while (x < 45) 	{
	var a = Math.floor(Math.random() * color.length);
	document.getElementById(x).style.background = color[a];
	x++;
};
*/
