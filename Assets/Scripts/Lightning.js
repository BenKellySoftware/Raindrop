var SpawnTimeMin = 200;
var SpawnTimeMax = 300;
var SpawnTime = 200;
var Counter = 0;
//var light : Light;
var Clip = 1;
var Clip1 : AudioClip;
var Clip2 : AudioClip;
var Clip3 : AudioClip;
var Mesh : GameObject;

function Update () {
if (GameObject.Find("Player") == null || !GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	if (Counter == SpawnTime) {
		SpawnTime = Mathf.Floor(Random.Range(SpawnTimeMin, SpawnTimeMax));
		Counter = 0;
		Mesh.SetActive(true);
		Clip = Random.Range(1, 4);
		switch (Clip)
		{
		case 1:
			audio.Stop();
			audio.clip = Clip1; 
			audio.Play();
		break;
		case 2:
			audio.Stop();
			audio.clip = Clip2;
			audio.Play();
		break;
		case 3:
			audio.Stop();
			audio.clip = Clip3;
			audio.Play();
		break;
		}
	}
	else {
		if (Counter == 10) {Mesh.SetActive(false);}
		Counter++;
	}
}
}