var Drop : GameObject;
var SpawnTimeMin = 10;
var SpawnTimeMax = 130;
var SpawnTime = 0;
var Counter = 0;
var Position : Vector3;
var xRangeMax = -100.0;
var xRangeMin = 100.0;
var yRange = -75.0;

function Update () {
if (GameObject.Find("Player") == null || !GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	if (Counter == SpawnTime) {
		SpawnTime = Mathf.Floor(Random.Range(SpawnTimeMin, SpawnTimeMax));
		Position = new Vector3(Mathf.Floor(Random.Range(xRangeMin , xRangeMax)), yRange, 100);
		Counter = 0;
		Instantiate(Drop, Position, Drop.transform.rotation);
	}
	else {
		Counter++;
	}
}
}