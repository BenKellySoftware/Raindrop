var GUIskin : GUISkin;

var xrange = 120;
var	Counter = 0;
var Momentum = 10.0;
var Distance = 0.0;
var Pause = false;
var PauseMenu = false;
var TutPause = false;
var Size = 1.0;
var Slow = true;
var Absorb = false;
var GameOver = false;

//Tutorial
var Tutorial = false;
var Speedbar : GameObject;
var Spawner : Spawner[];
// var DropSpawn : Spawner;
// var SmallSpawn : Spawner;
// var CrackSpawn : Spawner;
// var BigSpawn : Spawner;
var Intro = true;
var Collect = true;
var Collected = 0;
var Avoided = 0;
var Drops = false;
var Cracks = false;
var Avoid = false;
var Big = false;
var Fail = false;

function OnTriggerEnter(other : Collider) {
	if (other.name == "Smaller Drop(Clone)" || other.name == "Static Drop(Clone)") {
		other.GetComponent(RainDrop).Remove = true;
	}
	if (other.name == "Crack(Clone)") {
		Momentum -= Momentum/2;
		if (Avoid) {Avoided = 0; Display();}
	}
	if (other.name == "Big Drop(Clone)") {
		Absorb = true;
	}
}

function OnTriggerExit(other : Collider) {
	if (other.name == "Smaller Drop(Clone)" || other.name == "Static Drop(Clone)") {
		other.GetComponent(RainDrop).Remove = false;
	}
		if (other.name == "Big Drop(Clone)") {
		Absorb = false;
	}
}

function Update() {
if(!Pause) {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	if (Momentum < 5) {
		GameObject.Find("View").transform.position.y -= (5-Momentum)/15;
		if (GameObject.Find("View").transform.position.y <= -75) {
			if (Tutorial) {
				Avoided = 0;
				Display();
			}
			else {
				GameOver = true;
				Pause = true;
			}
		}
	}
	else {
		if (GameObject.Find("View").transform.position.y >= 0) {
			GameObject.Find("View").transform.position.y = 0;
		}
		else {GameObject.Find("View").transform.position.y -= (5-Momentum)/15;}
		
	}

	if (Slow) {
		if(Momentum > 0) {
			Momentum -= 0.03;
			Distance+=Momentum/10;
			GameObject.Find("Spawner").SetActive(true);
			GameObject.Find("SpawnPos").SetActive(true);
		}
		else{
			Momentum=0;
			if (GameObject.Find("Spawner")) {
				GameObject.Find("Spawner").SetActive(false);
				GameObject.Find("SpawnPos").SetActive(false);
			}
		}
	}

	if(transform.position.x<xrange && transform.position.x>(-xrange)) {
		// Momentum -= Mathf.Abs(Input.GetAxis("Horizontal")/10);
		transform.rotation.z=(4-Momentum/10)*(Input.GetAxis("Horizontal")+(1.5*Input.acceleration.x))/6;
		transform.position.x+= (0.5+Momentum/20)*(Input.GetAxis("Horizontal")+(1.5*Input.acceleration.x));
	}
	if(transform.position.x>xrange-10) {
		transform.position.x=transform.position.x-0.8;
	}
	if(transform.position.x<(-xrange)+10) {
		transform.position.x=transform.position.x+0.8;	
	}
	if(Size > 1) {
		Size -= Size/50;
	}
	transform.localScale = Vector3(Size*4,Size*4,Size*4);

	if (Absorb) {
		Size -= 0.05;
		Momentum = 0.9*Momentum;
	}
	if (Size < 0.1) {
		GameOver = true;
		Pause = true;
	}
}
else {
	Screen.sleepTimeout = SleepTimeout.SystemSetting;
}

// Tutorial stuff

}

function OnGUI () {
	GUI.skin = GUIskin;
	if (Pause && PauseMenu) {
		if (GUI.Button (Rect(Screen.width/20,4*Screen.width/20,Screen.width/10,Screen.width/10),"Menu")) {
			Application.LoadLevel(0);
		}
		if (GUI.Button (Rect(Screen.width/20,Screen.width/20,Screen.width/10,Screen.width/10),"Play")) {
			Pause = false;
			PauseMenu = false;
		}
	}
	if (!Pause) {
		if (GUI.Button (Rect(Screen.width/20,Screen.width/20,Screen.width/10,Screen.width/10),"Pause")) {
			Pause = true;
			PauseMenu = true;
		}
	}

	if (GameOver) {
		GUI.Label (Rect(Screen.width/20, Screen.height/5, 9*Screen.width/10, Screen.height/5), "Game Over");
		if (GUI.Button (Rect(Screen.width/20, 2*Screen.height/5, 9*Screen.width/10, Screen.height/10), "Play Again")) {
			Application.LoadLevel(Application.loadedLevel);
		}
		if (GUI.Button (Rect(Screen.width/20, 3*Screen.height/5, 9*Screen.width/10, Screen.height/10), "Menu")) {
			Application.LoadLevel(0);
		}
	}

	//Tutorial Stuff

	if (Pause) {
		if (Intro) {
			GUI.Box (Rect(0, 7*Screen.height/10, Screen.width, Screen.height/5), "Welcome to RainDrop. In this game, you are a rain drop going down a window, trying to stop yourself from slowing down or being absorbed. To move, tilt the phone left and right. Try doing this now.");
			if (GUI.Button (Rect(0,9*Screen.height/10,Screen.width,Screen.height/10),"Next")) {
				Menus();
			}
		}
		if (Drops) {
			GUI.Box (Rect(0, 7*Screen.height/10, Screen.width, Screen.height/5), "That bar at the top is your speed bar, in the game, it will constantly decrease over time. Right now, it is red because you are going dangerously slow. To keep yourself from slowing down to much, you need to absorb other rain drops. To absorb the other drops, fall into them. Increase your speed now by collecting some.");
			if (GUI.Button (Rect(0,9*Screen.height/10,Screen.width,Screen.height/10),"Next")) {
				Drops = false;
				Pause = false;
			}
		}
		if (Cracks) {
			GUI.Box (Rect(0, 7*Screen.height/10, Screen.width, Screen.height/5), "In this game, there are also cracks in the window that you will have to avoid, if you hit them you will lose considerable speed. Try avoiding 10 of them in a row.");
			if (GUI.Button (Rect(0,9*Screen.height/10,Screen.width,Screen.height/10),"Next")) {
				Cracks = false;
				Pause = false;
			}
		}
		if (Big) {
			GUI.Box (Rect(0, 7*Screen.height/10, Screen.width, Screen.height/5), "Congratulations, you have compleated this tutorial. One Final thing. It is a good idea to keep an eye on the top of the screen, as in this game there are larger drops that can absorb you if you get caught in them. \n To end this tutorial press the finish Button.");
			if (GUI.Button (Rect(0,9*Screen.height/10,Screen.width/2,Screen.height/10),"Continue Playing")) {
				Pause = false;
			}
			if (GUI.Button (Rect(Screen.width/2,9*Screen.height/10,Screen.width/2,Screen.height/10),"Finish")) {
				Application.LoadLevel(0);
			}
		}
	}
	if (Big && !Pause) {
		if (GUI.Button (Rect(0,9*Screen.height/10,Screen.width,Screen.height/10),"Finish")) {
			Application.LoadLevel(0);
		}
	}
	if (Collect) {
		GUI.Box (Rect(2*Screen.width/3, Screen.height/10, Screen.width/3, Screen.height/20), "Drops Absorbed: " + Collected +"/5");
	}
	if (Avoid) {
		GUI.Box (Rect(2*Screen.width/3, Screen.height/10, Screen.width/3, Screen.height/20), "Cracks Avoided: " + Avoided +"/5");
	}
	if (Fail) {
		GUI.Label (Rect(Screen.width/20, Screen.height/5, 9*Screen.width/10, Screen.height/5), "Try Again");

	}
	// GUI.Box (Rect(10, 150, 200, 100), "Speed: " + Mathf.Round(Momentum) + "\n Distance: " + Mathf.Round(Distance) +"\n x: " + Mathf.Round(Input.acceleration.x*100) + "\n y: " + Mathf.Round(Input.acceleration.y*100) + "\n z: "+ Mathf.Round(Input.acceleration.z*100));
}

function Display() {
	Fail = true;
	Pause = true;
	yield WaitForSeconds(1.0);
	Fail = false;
	Pause = false;
	for(var i : GameObject in GameObject.FindGameObjectsWithTag("Other"))
	{
		Destroy(i);
	}
	GameObject.Find("View").transform.position.y = 0;
	Momentum = 15;
}

function Menus () {
	Spawner = GameObject.Find("Spawner").GetComponents.<Spawner>();
	Pause = false;
	Intro = false;
	yield WaitForSeconds(3.0);
	Speedbar.SetActive(true);
	Slow = true;
	while(Momentum > 7){
		yield;
	}
	Spawner[0].enabled = true;
	Spawner[1].enabled = true;
	while(Momentum > 5){
		yield;
	}
	Pause = true;
	Drops = true;
	Slow = false;
	while(Momentum < 17){
		yield;
	}
	Spawner[2].enabled = true;
	yield WaitForSeconds(0.5);
	Avoid = true;
	Cracks = true;
	Pause = true;
	Slow = true;
	while(Avoided < 5) {
		yield;
	}
	Avoid = false;
	Spawner[3].enabled = true;
	yield WaitForSeconds(0.5);
	Pause = true;
	Big = true;
}
