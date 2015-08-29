var forcedWidth = 480;
var forcedHeight = 768;

function Start() {
	Screen.fullScreen = false;
	PlayerPrefs.SetInt("Screenmanager Resolution Height", forcedHeight);
    PlayerPrefs.SetInt("Screenmanager Resolution Width", forcedWidth);
    DontDestroyOnLoad(gameObject);
}

 

function OnApplicationQuit() {
	Screen.fullScreen = false;
    PlayerPrefs.SetInt("Screenmanager Resolution Height", forcedHeight);
    PlayerPrefs.SetInt("Screenmanager Resolution Width", forcedWidth);
}