function turn()		{
	//checking which dice roll/how many spaces to move
	if ( face == 1) {
		move1();
		setTimeout(land, 500);
	} else if(face == 2)	{
		move2();
	}else if (face == 3)	{
		move3();
	}else if (face == 4)	{
		move4();
	}else if (face == 5)	{
		move5();
	}else if (face == 6)	{
		move6();
	} else 	{
		roll();
	}
	//popup question tile color
	// using playerID for tile#, find background color// 
	//animation between squares
	function move1() {
		playerID = +playerID + 1;
		
		if (playerID >= 46)	{
			playerID = 0;
			wallet = wallet + 200;
			document.getElementById("wal").innerHTML = wallet.toFixed(2);
			savings = savings + (savings * 0.04);
			document.getElementById("sav").innerHTML = savings.toFixed(2);
			investments = investments + (investments * 0.06);			
			document.getElementById("inv").innerHTML = investments.toFixed(2);
		};
		document.getElementById(playerID).appendChild(player);
	}

	function move2() {
		setTimeout(move1, 100);
		setTimeout(move1, 400);
		setTimeout(land, 900);
	}
	function move3() 	{
		setTimeout(move1, 100);
		setTimeout(move1, 400);
		setTimeout(move1, 700);
		setTimeout(land, 1100);
	}
	function move4()	{
		setTimeout(move1, 100);
		setTimeout(move1, 400);
		setTimeout(move1, 700);
		setTimeout(move1, 1000);
		setTimeout(land, 1500);
	}
	function move5() {
		setTimeout(move1, 100);
		setTimeout(move1, 400);
		setTimeout(move1, 700);
		setTimeout(move1, 1000);
		setTimeout(move1, 1300);
		setTimeout(land, 1800);
	}
	function move6() {
		setTimeout(move1, 100);
		setTimeout(move1, 400);
		setTimeout(move1, 700);
		setTimeout(move1, 1000);
		setTimeout(move1, 1300);
		setTimeout(move1, 1600);
		setTimeout(land, 2200);
	}
};