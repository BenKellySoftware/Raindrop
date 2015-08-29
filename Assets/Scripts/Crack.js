var texture : Texture[];
var passed = false;
function Start() {
var rand = Mathf.Floor(Random.Range(0,3));
renderer.material.mainTexture = texture[rand];

}

function Update () {
	if (GameObject.Find("Player") != null && !GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
		transform.position.y=transform.position.y+((GameObject.Find("Player").GetComponent(PlayerMove).Momentum)/10);
		if (transform.position.y>-10 && !passed) {
			GameObject.Find("Player").GetComponent(PlayerMove).Avoided ++;
			passed = true;
		}
		if(transform.position.y>75) {
			Destroy(gameObject);
		}
	}
}