import { loadavg } from "os";
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { StandardMaterial } from "babylonjs";

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

        camera.alpha = 26.686378314091602;
        camera.beta = 1.3309757193555238;
        camera.radius = 300;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        scene.collisionsEnabled = true;
        camera.checkCollisions = true;
        camera.lowerRadiusLimit = 30;
        camera.upperRadiusLimit = 600;
        
        //camera.collisionRadius = new BABYLON.Vector3(10, 10, 10);
        
        this.events();
        BABYLON.SceneLoader.Append("environments/", "coche.gltf", scene,()=> {
            this.currentScene = scene;
            this.currentScene.createDefaultCameraOrLight();
            this.logGeometriesScene();
            
            this.currentScene.activeCamera.useAutoRotationBehavior = true;
            for(var x = 0; x < scene.meshes.length;x++){
                if(this.currentScene.meshes[x].material){
                    this.currentScene.meshes[x].material.backFaceCulling = false;
                }
            }

            var material = this.currentScene.getMeshByName("body").material;
            material.metallic = 0.8;
            material.roughness = 0.2;
            material.albedoColor = new BABYLON.Color3(Math.random(),Math.random(),Math.random());
            
            material.clearCoat.isEnabled = true;
            material.clearCoat.intensity = 1;
            var axis = new BABYLON.Vector3(1, 0, 0);
            var angle = 0.04;

            
            this.currentScene.executeWhenReady(()=>{
                this.engine.runRenderLoop(()=>{
                    //this.currentScene.getMeshByName("group1").rotation.y += 0.01;
                    this.currentScene.render();

                    angle = angle +0.01;
                    //this.currentScene.getMeshByName("rueda1").rotationQuaternion = new BABYLON.Quaternion.RotationAxis(axis, angle);
                    //this.currentScene.getMeshByName("rueda1").rotate(new BABYLON.Vector3(0.1, 0, 0),0.04,BABYLON.Space.LOCAL);
                    //this.currentScene.getMeshByName("rueda2").rotate(new BABYLON.Vector3(0.1, 0, 0),0.04,BABYLON.Space.LOCAL);
                    //this.currentScene.getMeshByName("rueda3").rotate(new BABYLON.Vector3(0.1, 0, 0),0.04,BABYLON.Space.LOCAL);
                    //this.currentScene.getMeshByName("rueda4").rotate(new BABYLON.Vector3(0.1, 0, 0),0.04,BABYLON.Space.LOCAL);
                    
                    this.currentScene.getMeshByName("ground").material._albedoTexture.vOffset += 0.004;
                    BABYLON.SceneLoader.ShowLoadingScreen = false;
                });
            });
        });
        
    }

    start (  ) {
        //BABYLON.SceneLoader.ShowLoading = true;

        this.loadMap();

    };

    events(){
        window.addEventListener('resize', ()=>{ this.engine.resize(); });


    }

    logGeometriesScene(){
        for(var x = 0; x < this.currentScene.meshes.length;x++){
            
                console.log(this.currentScene.meshes[x].name);
            
        }
    }

    buildGround(){
        this.groundMaterial = new StandardMaterial("groundMaterial", this.currentScene);
        this.groundMaterial.diffuseTexture = new BABYLON.Texture("",this.currentScene);
    }
}