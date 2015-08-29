function Update () {
if (GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	audio.volume = 0;
}
else {
	if (GameObject.Find("Player").GetComponent(PlayerMove).Momentum < 10) {
		audio.volume = GameObject.Find("Player").GetComponent(PlayerMove).Momentum/100;
		audio.pitch = 1;
	}
	else {
		audio.volume = 0.1;
		audio.pitch = 1+(GameObject.Find("Player").GetComponent(PlayerMove).Momentum - 10)/20;
	}
}
}