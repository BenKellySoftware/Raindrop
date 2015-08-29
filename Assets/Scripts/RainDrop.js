var Player : GameObject;
var yrange = 75;
var OldSize = 10.0;
var Size = 10.0;
var Remove = false;
var Momentum = 1.0;
var Static = false;

function Start() {
	Player = GameObject.Find("Player");
	Size = Random.Range(1.0, 2.5);
	OldSize = Size;
}

function Update() {
if (!GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	if (Size < 0.1) {Size = 0;}
	if(transform.position.y>yrange || transform.localScale.x <= 0) {
		Destroy(gameObject);
	}
	else {
		if (Remove) {
			Size -= OldSize/10;
			Player.GetComponent(PlayerMove).Momentum += OldSize/10;
			if (Player.GetComponent(PlayerMove).Size < 1.2) {
			Player.GetComponent(PlayerMove).Size += OldSize/50;
			}
		}
		else {
			if(!Static) {
				transform.position.y=transform.position.y+((Player.GetComponent(PlayerMove).Momentum)/10-Size/3);
			}
			else {
				transform.position.y=transform.position.y+((Player.GetComponent(PlayerMove).Momentum)/10);
			}
		}
		transform.localScale = Vector3(Size*1.5,Size*1.5,Size*1.5);
	}
}
}