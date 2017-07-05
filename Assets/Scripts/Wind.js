function Update () {
if (GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	GetComponent.<AudioSource>().volume = 0;
}
else {
	if (GameObject.Find("Player").GetComponent(PlayerMove).Momentum < 10) {
		GetComponent.<AudioSource>().volume = GameObject.Find("Player").GetComponent(PlayerMove).Momentum/100;
		GetComponent.<AudioSource>().pitch = 1;
	}
	else {
		GetComponent.<AudioSource>().volume = 0.1;
		GetComponent.<AudioSource>().pitch = 1+(GameObject.Find("Player").GetComponent(PlayerMove).Momentum - 10)/20;
	}
}
}