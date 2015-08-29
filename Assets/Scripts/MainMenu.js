function OnGUI () { 
	// if (Start == true) {
		if (GUI.Button (Rect(Screen.width/8,Screen.height-200,3*Screen.width/4,Screen.height/10),"Play")) {
			Application.LoadLevel(1);
		}
		// if (GUI.Button (Rect(50,150,100,50),"Help")) {
		// }
	// }
}

private var fp : Vector2;  // first finger position
private var lp : Vector2;  // last finger position

private var mouse1 = 0;
private var mouse2 = 0;
private var ScreenPos = 0;
private var down = false;
private var StartTime = 0.0;
var RevertStart = 0.0;
var RevertEnd = 0.0;


// function Update() {
// 	for (var touch : Touch in Input.touches) {
// 		if (touch.phase == TouchPhase.Began) {
// 			fp = touch.position;
// 			lp = touch.position;
// 		}
// 		if (touch.phase == TouchPhase.Moved ) {
// 				lp = touch.position;
// 				transform.position.x += (lp.x - fp.x)/50;
// 		}
// 		if(touch.phase == TouchPhase.Ended) {
// 		}
// 	}
// 		for (var touch : Touch in Input.touches) {
// 		if (touch.phase == TouchPhase.Began) {
// 			fp = touch.position;
// 			lp = touch.position;
// 		}
// 		if (touch.phase == TouchPhase.Moved ) {
// 				lp = touch.position;
// 				transform.position.x += (lp.x - fp.x)/50;
// 		}
// 		if(touch.phase == TouchPhase.Ended) {
// 		}
// 	}
// 	if (Input.GetMouseButtonDown(0)) {
// 		down = true;
// 		mouse1=Input.mousePosition.x;
// 		ScreenPos=transform.position.x;
// 		StartTime=Time.time;
// 	}
// 	if (Input.GetMouseButtonUp(0)) {
// 		down = false;
// 		RevertStart = transform.position.x;
// 		RevertEnd = 0.0;
// 	}
// 	if (down) {
// 		mouse2 = Input.mousePosition.x;
// 		transform.position.x = ScreenPos - 90*(mouse2-mouse1)/Screen.width;

// 	}
// 	else {
// 		if (transform.position.x < -0.5 || transform.position.x > 0.5) {
// 			transform.position.x = Mathf.Lerp(RevertStart, RevertEnd, 15*Time.deltaTime);
// 		}
// 	}
// }