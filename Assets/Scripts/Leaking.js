var Player : GameObject;

function Start() {
	Player = GameObject.Find("Player");
	transform.position.x = Player.transform.position.x - 10 * Player.transform.rotation.z;
	transform.position.y = 10 - Mathf.Abs(10*Player.transform.rotation.z);
	transform.localScale.y = Player.GetComponent(PlayerMove).Momentum * 0.06;
	transform.localScale.x = Player.GetComponent(PlayerMove).Size;
}

function Update() {
if (!GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	if (transform.position.y<75) {
		transform.position.y=transform.position.y+(Player.GetComponent(PlayerMove).Momentum/10);
	}
	else{
		Destroy(gameObject);
	}
}
}