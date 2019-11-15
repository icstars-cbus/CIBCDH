//initializing wallet balances
var wallet = 500.00;
document.getElementById("wal").innerHTML = wallet.toFixed(2);//keeping it decimal
var savings = 0.00;
document.getElementById("sav").innerHTML = savings.toFixed(2);
var investments = 0.00;
document.getElementById("inv").innerHTML = investments.toFixed(2);

//character piece
var player = new Image;
player.src = 'image-repository/blueBaconJr.png';
document.getElementById("0").appendChild(player); //positions player
var playerID = "0"; //starting position value to assist in keeping track
//dice roll and update player pos
//popup menu forms

function rulesPopUp() {
	document.getElementById("rulesPopUp").style.display = "block";
}
function closeRules() {
	document.getElementById("rulesPopUp").style.display = "none";
}

function land()	{
	smoke();
	document.getElementById("question-popup").style.display = "block";
}
function endland()	{
	document.getElementById("question-popup").style.display = "none";
}

/*for (z in loc)
{
	if(loc[("tile" + z)] == 'yellow')
		{ correctCounter++;
			if (correctCounter > 3)
				{color.splice(4, 1);}
		};
};*/
