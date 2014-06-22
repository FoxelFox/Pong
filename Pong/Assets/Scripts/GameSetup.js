#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;

var topBorder : Transform;
var bottomBorder : Transform;

var Player01 : Transform;
var Player02 : Transform;

var leftGoal : Transform;
var rightGoal : Transform;

function Start () {
	//set position of each wall/goal & border:
	topWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width*2F,0f,0f)).x,1f);
	topWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height,0f)).y + 0.5f);
	topBorder.position.y = mainCam.ScreenToWorldPoint(new Vector3(0f,1f,0f)).y;

	bottomWall.size = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width*2f,0f,0f)).x,1f);
	bottomWall.center = new Vector2(0f, mainCam.ScreenToWorldPoint(new Vector3(0f,0f,0f)).y - 0.5f);
	bottomBorder.position.y = mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height - 1f,0f)).y;
	
	leftWall.size = new Vector2(1f,mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height*2f,0f)).y);
	leftWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(0f,0f,0f)).x - 0.5f,0f);
	leftGoal.position.x = mainCam.ScreenToWorldPoint(new Vector3 (1f,0f,0f)).x;
	
	rightWall.size = new Vector2(1f,mainCam.ScreenToWorldPoint(new Vector3(0f,Screen.height*2f,0f)).y);
	rightWall.center = new Vector2(mainCam.ScreenToWorldPoint(new Vector3(Screen.width,0f,0f)).x + 0.5f,0f);
	rightGoal.position.x = mainCam.ScreenToWorldPoint(new Vector3 (Screen.width - 1f,0f,0f)).x;
	
	//set position of each player:
	Player01.position.x = mainCam.ScreenToWorldPoint(new Vector3 (75f,0f,0f)).x;
	Player02.position.x = mainCam.ScreenToWorldPoint(new Vector3 (Screen.width - 75f,0f,0f)).x;
}