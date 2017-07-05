var Player : GameObject;
var Speed : float;
var Scale : float;

function Update() {
	// MaxHealth = Parent.GetComponent(PlayerMove).MaxHealth;
	Speed = Player.GetComponent(PlayerMove).Momentum;
	Scale = Speed / 33.3;
	transform.localScale.x = Scale;
	if (Speed > 5) {
		GetComponent.<Renderer>().material.color = Color.cyan;
	}
	else {
		GetComponent.<Renderer>().material.color = Color.red;
	}
}