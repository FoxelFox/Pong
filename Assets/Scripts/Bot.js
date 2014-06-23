#pragma strict

var Ball : Transform;
var speed : float = 10;

function Start () {

}

function Update () {
	if(transform.position.y < Ball.position.y) {
		rigidbody2D.velocity.y = speed;
	} else {
		rigidbody2D.velocity.y = speed *-1;
	}
}