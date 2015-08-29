var yrange = -75;
var Momentum = 10.0;
var Absorb = false;
var Biggest =  true;
var Size = 5.0; 
var Other;

function OnTriggerEnter(other : Collider) {
	if (other.name == "Menu Drop(Clone)") {
		Absorb = true;
		if (other.GetComponent(MenuDrop).Size > Size) {
			Biggest = false;
			other.GetComponent(MenuDrop).Biggest = true;
			// otherSize = other.GetComponent(MenuDrop).Size;
		}
	}
	if (other.name == "Crack") {
		Momentum = Momentum/2;
	}
}

function OnTriggerExit(other : Collider) {
	if (other.name == "Menu Drop(Clone)") {
		Absorb = false;
	}
}

function Start() {
	Size = Random.Range(1.0, 3.5);
	Momentum = 2*(Mathf.Pow(Size*Random.Range(1, 3),1.5));
}

function Update() {
	if(Momentum > 0.5) {
		transform.position.y -= Momentum/10;
		Momentum -= Momentum/50;
	}
	else{
		Momentum=0;
	}
	if (Absorb) {
		Momentum += 0.3;
		if (Biggest) {
			// Size += Other.GetComponent(MenuDrop).Size/20 + 0.1;
		}
		else{
			Size -= Size/20 + 0.1;
		}
	}
	transform.localScale = Vector3(Size,Size,Size);
	if(transform.position.y<yrange || Size < 0.5) {
		// Other.GetComponent(MenuDrop).Absorb = false;
		Destroy(gameObject);
	}
}