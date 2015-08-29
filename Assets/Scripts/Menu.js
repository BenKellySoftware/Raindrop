private var length = 0.0;
private var SW = false;
private var startpos : Vector3;
private var endpos : Vector3;
var touchDeltaPosition : Vector2;
var DeltaPosition : Vector3;
// Update is called once per frame
function Update () {
    for (var touch : Touch in Input.touches) {
        if (touch.phase == TouchPhase.Began) {
            length = 0;
            SW = false;
            touchDeltaPosition = Input.GetTouch(0).position;
            startpos = new Vector3 (touchDeltaPosition.x, 0, touchDeltaPosition.y);
        }
        if (touch.phase == TouchPhase.Moved) {
            SW = true;
        }

        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Canceled) {
            SW = false;
        }

        if (touch.phase == TouchPhase.Stationary) {
            SW = false;
        }
        if (touch.phase == TouchPhase.Ended) {
            if (SW) {
                endpos = new Vector3 (Input.GetTouch(0).position.x, 0, Input.GetTouch(0).position.y);
                DeltaPosition = endpos - startpos;
                length = Vector3.zero.magnitude;
            }
        }
    }
}

function OnGUI() {
GUI.Box (new Rect (0,0,100,30), "length: " + length);
}