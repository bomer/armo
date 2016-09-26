console.log('starting');
function run(){

	var width  = window.innerWidth;
	var height = window.innerHeight;
	var frameCount=0;
	var renderer = PIXI.autoDetectRenderer(width, height,{backgroundColor : 0x1099bb});
	document.body.appendChild(renderer.view);

	// create the root of the scene graph
	var stage = new PIXI.Container();

	// create a texture from an image path
	var texture = PIXI.Texture.fromImage('img/armosmall1.png');
	var texture2 = PIXI.Texture.fromImage('img/armosmall2.png');


	// create a new Sprite using the texture
	var armo = new PIXI.Sprite(texture);

	// center the sprite's anchor point
	armo.anchor.x = 0.5;
	armo.anchor.y = 0.5;

	// move the sprite to the center of the screen
	armo.position.x = width/2;
	armo.position.y = height/2;

	stage.addChild(armo);

	// start animating
	animate();
	function animate() {
	    requestAnimationFrame(animate);
	    frameCount++;

	    // just for fun, let's rotate mr rabbit a little
	    // bunny.rotation += 0.01;
	    if (frameCount>180)
	    	armo.texture=texture2;
	    if (frameCount>190){
	    	armo.texture=texture;
	    	frameCount=0;
	    }

	    // render the container
	    renderer.render(stage);
	}
}
run();