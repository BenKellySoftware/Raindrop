var offset = 0.0;
var speed = 0;
function Update() {
if (!GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	offset += GameObject.Find("Player").GetComponent(PlayerMove).Momentum/speed;
	GetComponent.<Renderer>().material.mainTextureOffset = Vector2 (-offset, 0);
}
}