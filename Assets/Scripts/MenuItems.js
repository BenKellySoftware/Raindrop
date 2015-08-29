var GUIskin : GUISkin;

var Menu = true;
var Easy = false;
var Medium = false;
var Hard = false;
var Tutorial = false;
var EasyMove = false;
var MediumMove = false;
var HardMove = false;
var TutorialMove = false;
var MenuMove = false;
var StartPos = 0.0;
var StartLight = 0.0;

function OnGUI () {
	GUI.skin = GUIskin;
	if (Menu) {
		if (GUI.Button (Rect(Screen.width/20, 9*Screen.height/10, 9*Screen.width/10, Screen.height/10),"Play")) {
			StartPos = transform.position.x;
			TutorialMove = true;
		}
	}
	if (Tutorial) {
		if (GUI.Button (Rect(Screen.width/20,40+Screen.height/10,Screen.height/10,Screen.height/10),"Title")) {
			StartPos = transform.position.x;
			MenuMove = true;
		}
		if (GUI.Button (Rect(19*Screen.width/20 - (Screen.height/10) ,40+Screen.height/10,Screen.height/10,Screen.height/10),"Next")) {
			StartPos = transform.position.x;
			EasyMove = true;
		}
		if (GUI.Button (Rect(Screen.width/20, 9*Screen.height/10, 9*Screen.width/10, Screen.height/10), "Play Level")) {
			Application.LoadLevel(1);
		};
	}
	if (Easy) {
		if (GUI.Button (Rect(Screen.width/20,40+Screen.height/10,Screen.height/10,Screen.height/10),"Previous")) {
			StartPos = transform.position.x;
			TutorialMove = true;
		}
		if (GUI.Button (Rect(19*Screen.width/20 - (Screen.height/10) ,40+Screen.height/10,Screen.height/10,Screen.height/10),"Next")) {
			StartPos = transform.position.x;
			MediumMove = true;
		}
		if (GUI.Button (Rect(Screen.width/20, 9*Screen.height/10, 9*Screen.width/10, Screen.height/10), "Play Level")) {
			Application.LoadLevel(2);
		};
	}
	if (Medium) {
		if (GUI.Button (Rect(Screen.width/20,40+Screen.height/10,Screen.height/10,Screen.height/10),"Previous")) {
			StartPos = transform.position.x;
			EasyMove = true;
		}
		if (GUI.Button (Rect(19*Screen.width/20 - (Screen.height/10) ,40+Screen.height/10,Screen.height/10,Screen.height/10),"Next")) {
			StartPos = transform.position.x;
			HardMove = true;
		}
		if (GUI.Button (Rect(Screen.width/20, 9*Screen.height/10, 9*Screen.width/10, Screen.height/10), "Play Level")) {
			Application.LoadLevel(3);
		};
	}
	if (Hard) {
		if (GUI.Button (Rect(Screen.width/20,40+Screen.height/10,Screen.height/10,Screen.height/10),"Previous")) {
			StartPos = transform.position.x;
			MediumMove = true;
			GameObject.Find("Lightning").GetComponent(Lightning).enabled = true;

		}
		if (GUI.Button (Rect(Screen.width/20, 9*Screen.height/10, 9*Screen.width/10, Screen.height/10), "Play Level")) {
			Application.LoadLevel(4);
		};
	}
}

function Update () {
	if (TutorialMove) {
		Menu = false;
		Easy = false;
		if (transform.position.x > 102 || transform.position.x < 98) {
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMax = 60;
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMin = 140;
			transform.position.x += (100 - StartPos)/50;
		}
		else {
			TutorialMove = false;
			Tutorial = true;
			transform.position.x = 100;
		}
	}
	if (EasyMove) {
		Medium = false;
		Hard = false;
		Menu = false;
		Tutorial = false;
		if (transform.position.x > 202 || transform.position.x < 198) {
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMax = 160;
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMin = 240;
			transform.position.x += (200 - StartPos)/50;
		}
		else {
			EasyMove = false;
			Easy = true;
		}
	}
	if (MediumMove) {
		Easy = false;
		Hard = false;
		Menu = false;
		Tutorial = false;
		if (transform.position.x > 302 || transform.position.x < 298) {
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMax = 260;
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMin = 340;
			transform.position.x += (300 - StartPos)/50;
		}
		else {
			MediumMove = false;
			Medium = true;
		}
	}
	if (HardMove) {
		Easy = false;
		Medium = false;
		Menu = false;
		Tutorial = false;
		if (transform.position.x > 402 || transform.position.x < 398) {
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMax = 360;
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMin = 440;
			transform.position.x += (400 - StartPos)/50;
		}
		else {
			HardMove = false;
			Hard = true;
			GameObject.Find("Lightning").GetComponent(Lightning).enabled = true;
		}
	}
	if (MenuMove) {
		Tutorial = false;
		Easy = false;
		Medium = false;
		Hard = false;
		if (transform.position.x > 0) {
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMax = -40;
			GameObject.Find("Spawner").GetComponent(Spawner).xRangeMin = 40;
			transform.position.x -= StartPos/50;
		}
		else {
			MenuMove = false;
			Menu = true;
		}
	}
}