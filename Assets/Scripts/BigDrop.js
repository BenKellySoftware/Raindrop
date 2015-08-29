function Start () {
transform.eulerAngles.z = Random.Range(-30,30);
}

function Update () {
if (GameObject.Find("Player") == null || !GameObject.Find("Player").GetComponent(PlayerMove).Pause) {
transform.Translate(Vector3.down * 100* Time.deltaTime, Space.Self);
transform.position.y += (GameObject.Find("Player").GetComponent(PlayerMove).Momentum)/20;
}
if (transform.position.y < -100) {Destroy(gameObject);}
}