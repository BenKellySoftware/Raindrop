var Drop : GameObject;
var SpawnTime = 5;
var Counter = 0;
var Spawned : GameObject;

function Update () {
if (GameObject.Find("Player") == null || !GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
	if (Counter == 5) {
		Counter = 0;
		// var x = Spawned.transform.position.x - transform.position.x;
		// var y = Spawned.transform.position.y - transform.position.y;
		// Spawned.transform.localScale.y = Mathf.Sqrt(Mathf.Pow(x,2) + Mathf.Pow(y,2));
		// Debug.Log(x);
		// Debug.Log(y);
		// var Angle = Mathf.Rad2Deg*Mathf.Atan(x/y);
		// Spawned = Instantiate(Drop, transform.position, Quaternion.Euler(0,0,-(Mathf.Rad2Deg*Mathf.Atan(Spawned.transform.position.x - transform.position.x / Spawned.transform.position.y - transform.position.y))));
		Spawned = Instantiate(Drop, transform.position, Quaternion.Euler(0,0,GameObject.Find("Player").transform.eulerAngles.z));
	}
	else {
		Counter++;
	}
}
}