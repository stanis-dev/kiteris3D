import { loadavg } from "os";
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

export default class {
    constructor() {
        this.canvas = document.getElementById("renderCanvas");
        this.engine = new BABYLON.Engine(this.canvas,true);
        this.file;
        this.currentScene = null;
        this.geometrySelected = null;
    }

    loadMap (){
        var scene = new BABYLON.Scene(this.engine);
        scene.clearColor = new BABYLON.Color3(0.7, 0.7, 0.7);
        var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(this.canvas, false);

        camera.alpha = 27.257828718528508;
        camera.beta = 1.110666093283756;
        camera.radius = 31.25009668622236;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        scene.collisionsEnabled = true;
        camera.checkCollisions = true;
        camera.lowerRadiusLimit = 30;
        camera.upperRadiusLimit = 80;
        
        //camera.collisionRadius = new BABYLON.Vector3(10, 10, 10);
        console.log(camera);
        

        BABYLON.SceneLoader.Append("environments/", "sofa.gltf", scene,()=> {
            scene.createDefaultCameraOrLight();
            for(var x = 0; x < scene.meshes.length;x++){
                if(scene.meshes[x].material){
                    scene.meshes[x].material.backFaceCulling = false;
                }
            }

            
            scene.executeWhenReady(()=>{
                this.engine.runRenderLoop(()=>{
                    //this.currentScene.getMeshByName("group1").rotation.y += 0.01;
                    scene.render();
                    
                    
                    BABYLON.SceneLoader.ShowLoadingScreen = false;
                });
            });
        });
        
    }

    start (  ) {
        //BABYLON.SceneLoader.ShowLoading = true;

        this.loadMap();

    };


}