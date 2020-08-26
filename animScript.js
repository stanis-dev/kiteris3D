var inCube = {};

var canvas = document.getElementById("render");
var engine = new BABYLON.Engine(canvas, true);

BABYLON.SceneLoader.ShowLoadingScreen = true;

// Esta funcion permitirá cargar cualquier escenario
inCube.loadMap = function (map) {
	BABYLON.SceneLoader.Load('environments/', map + '.babylon', engine, function(scene) {
		scene.executeWhenReady(function() {
			engine.runRenderLoop(function() {
				inCube.hotspots();
				scene.render();
				BABYLON.SceneLoader.ShowLoadingScreen = false;
			});
		});

		inCube.currentScene = scene;
		inCube.currentScene.clearColor = new BABYLON.Color4(1.0, 1.0, 1.0, 0.0);
		inCube.currentScene.setActiveCameraByName('mainCamera');
		inCube.currentScene.activeCamera.lowerRadiusLimit = inCube.currentScene.getMeshByName('Locator_min')._scaling.x;
		inCube.currentScene.activeCamera.upperRadiusLimit = inCube.currentScene.getMeshByName('Locator_max')._scaling.x;
		inCube.currentScene.activeCamera.lowerBetaLimit = 0;
		inCube.currentScene.activeCamera.upperBetaLimit = 3;
		inCube.currentScene.activeCamera.maxZ = 1000;

		inCube.currentScene.activeCamera.attachControl(self.canvas);
		inCube.currentScene.activeCamera.speed = 0.7;
		inCube.currentScene.getLightByName('Sun').parent = inCube.currentScene.activeCamera;


		/* reflection tools*/
		if(inCube.file.reflection) {
			// var mainMaterial = new BABYLON.StandardMaterial("main", inCube.currentScene);
			// inCube.currentScene.getMeshByName(inCube.file.reflection.geometriesToReflection).material = mainMaterial;
			var mainMaterial = inCube.currentScene.getMeshByName(inCube.file.reflection.geometriesToReflection).material;
			console.log(mainMaterial);
			var probe = new BABYLON.ReflectionProbe(inCube.file.reflection.name, inCube.file.reflection.scale, inCube.currentScene);
			probe.renderList.push(inCube.currentScene.getMeshByName('skybox'));
			probe.renderList.push(inCube.currentScene.getMeshByName(inCube.file.reflection.geometriesToReflection));
			//mainMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
			mainMaterial.refractionTexture = probe.cubeTexture;
			mainMaterial.refractionFresnelParameters = new BABYLON.FresnelParameters();
			mainMaterial.refractionFresnelParameters.bias = 0.5;
			mainMaterial.refractionFresnelParameters.power = 12;
			mainMaterial.refractionFresnelParameters.leftColor = BABYLON.Color3.Black();
			mainMaterial.refractionFresnelParameters.rightColor = BABYLON.Color3.White();
			mainMaterial.refractionFresnelParameters.isEnabled = false;
			mainMaterial.indexOfRefraction = 1.05;
		}

		/* End reflection tools*/

		var keyboard = new Keyboard (inCube.currentScene.activeCamera);
		var mouse = new Mouse (canvas);
		keyboard.move();

		canvas.addEventListener('mousemove', mouse.overlayModel);
		window.addEventListener("keydown", keyboard.keyboardManage, false);

		window.addEventListener("resize", function () {
			engine.resize();
		});

		var buttons = document.getElementsByClassName('buttoncolor');

		for (var i = 0; i<buttons.length; i++) {
			if(buttons[i] != undefined){
				buttons[i].addEventListener('click', (button)=>{
					if(inCube.file.objToChangeColor){
						var color = $(button.target).css('background-color');
						color = color.substring(4,color.length -1).split(',');
						inCube.currentScene.getMeshByName(inCube.file.objToChangeColor).material.diffuseColor =
						new BABYLON.Color3(color[0]/255,color[1]/255,color[2]/255);
					}
				});
			}
		}

		var textures = document.getElementsByClassName('buttontexture');

		for(var j = 0; j<textures.length; j++){
			if(textures[j] != undefined){
				textures[j].addEventListener('click', (texture)=>{
					inCube.currentScene.getMeshByName(inCube.file.objToChangeColor).material = inCube.currentScene.getMaterialByName("test."+texture.target.classList[texture.target.classList.length -1]);
				});
			}
		}



		window.addEventListener("click", mouse.shoot ,false);
	});
}

// Funcion para la carga de interface
inCube.loadUI = function () {
	if (inCube.file.objectsToAnimCamera) {
		$('body').append("<div id='containerObjectsToAnim'></div>");
		for(let x=0; x<inCube.file.objectsToAnimCamera.length;x++){
			$('#containerObjectsToAnim').append("<div id="+inCube.file.objectsToAnimCamera[x]+"></div>");
		}
	}

	if (inCube.file.objInScene) {
		$('body').append("<div id='containerObjects'></div>");
		inCube.file.objInScene.map((object)=>{
			$('#containerObjects').append("<div id='image-"+object.name+"'><img class='imagesObjects' src='"+object.urlImage+"'></img></div>");

			$('#image-'+ object.name).click((e)=>{
				var name = e.target.parentNode.id.split("-");
				if(name[1] == "Cylinder"){
					$('.Cylinder').show();
				} else {
					$('.Cylinder').hide();
				}

				inCube.currentScene.meshes.map((mesh)=>{
					//inCube.AnimToFade(inCube.currentScene.getMeshByName(mesh.name));
					inCube.currentScene.getMeshByName(mesh.name).visibility = 0;
				});

				object.geoIncluded.map((obj)=>{
					//inCube.AnimToShow(inCube.currentScene.getMeshByName(obj));
					inCube.currentScene.getMeshByName(obj).isVisible = true;
					inCube.currentScene.getMeshByName(obj).visibility = 1;
				});
			});

		});
	}

	/*if (inCube.file.texturesToChange) {
		$('body').append("<div id='texturesToChange'></div>");
		inCube.file.texturesToChange.map((object)=>{
			$('#texturesToChange').append("<div id='image-"+object.name+"'><img class='imagesObjects' src='"+object.urlImage+"'></img></div>");

			$('#image-'+ object.name).click((e)=>{
				var material = e.currentTarget.id.split("-");
				material = "Material_" + material[1];
				inCube.currentScene.getMeshByName(inCube.file.objToChangeColor).material = inCube.currentScene.getMaterialByName(material);
			});

		});
	}*/
}

// Funcion para empezar el juego. Arranca el mapa, inicializa el jugador.
inCube.start = function (env) {
	BABYLON.SceneLoader.ShowLoadingScreen = true;
	inCube.getObjectFromUrl ("component/"+env+".json").then ( object => {
		inCube.file = object;
		if (inCube.file.dinnerOut) {
			inCube.loadUI();
			inCube.loadMap(inCube.file.env);
		}
	});
};

inCube.getObjectFromUrl = function (url) {
    return new Promise ((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
            if (xhr.status !== 200) reject();
            resolve(xhr.response);
        };
        xhr.send();
    });
};

inCube.hotspots = function () {
	//inCube.currentScene.getMeshByName('Hotspot_1').lookAt(inCube.currentScene.activeCamera.position);
};

inCube.inCubeAnimToFade = function(mesh){
	var meshToAnim = mesh;
}

inCube.moveCamera = function(picked){
	var cameraToAnim = inCube.currentScene.getCameraByName(picked);
	var alphaCameraAnimation = new BABYLON.Animation("alpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var betaCameraAnimation = new BABYLON.Animation("beta", "beta", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var radiusCameraAnimation = new BABYLON.Animation("radius", "radius", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

	var rads = 2 * Math.PI;
	if ( inCube.currentScene.activeCamera.alpha > rads) {
		inCube.currentScene.activeCamera.alpha =
		console.log("ha dado" + inCube.currentScene.activeCamera.alpha / rads + "vueltas");
	} else if (inCube.currentScene.activeCamera.alpha < 0) {

	}

	// An array with all animation keys
	var alphaKeys = [];
	var betaKeys = [];
	var radiusKeys = [];


//At the animation key 0, the value of scaling is "1"
  alphaKeys.push({
    frame: 0,
    value: inCube.currentScene.activeCamera.alpha
  },{
    frame: 100,
    value: cameraToAnim.alpha
  });

	betaKeys.push({
    frame: 0,
    value: inCube.currentScene.activeCamera.beta
  },{
    frame: 100,
    value: cameraToAnim.beta
  });

	radiusKeys.push({
    frame: 0,
    value: inCube.currentScene.activeCamera.radius
  },{
    frame: 100,
    value: cameraToAnim.radius
  });

	alphaCameraAnimation.setKeys(alphaKeys);
	betaCameraAnimation.setKeys(betaKeys);
	radiusCameraAnimation.setKeys(radiusKeys);

	inCube.currentScene.activeCamera.animations.push(alphaCameraAnimation);
	inCube.currentScene.activeCamera.animations.push(betaCameraAnimation);
	inCube.currentScene.activeCamera.animations.push(radiusCameraAnimation);
	inCube.currentScene.activeCamera.setTarget(cameraToAnim.target);

	inCube.currentScene.beginAnimation(inCube.currentScene.activeCamera, 0, 100, false);

};

inCube.overlayModel = function () {

}

inCube.start('tools');