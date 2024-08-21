import React, { useEffect, useRef } from "react";
import { Engine, Scene, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF"; // Import the glTF loader
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/core/Loading/loadingScreen";
import "@babylonjs/loaders/glTF";
// import "@babylonjs/core/Materials/standardMatertal";
// import "@babylonjs/core/Matertals/Textures/Loaders/enTextureLoader";
const BabylonScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = new Engine(canvasRef.current, true);
    const scene = new Scene(engine);
    
    const createScene = async () =>{

    const camera = new BABYLON.ArcRotateCamera(
        'camera1' ,
        50,
        50,
        50,
        new BABYLON.Vector3(0,0,0),
        scene
    ) 

    camera.setPosition(new BABYLON.Vector3(0,5,-10))
    camera.attachControl(scene , true)

    const light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(2,2,2),
        scene
    )
    light.intensity = 1

    engine.runRenderLoop(() => {
      scene.render();
    });

    // const sphere = BABYLON.MeshBuilder.CreateSphere(
    //     "sphere" , 
    //     {diameter:2 , segments:32},
    //     scene
    // )

    // sphere.position.y = 1 

    const mesh = await BABYLON.SceneLoader.ImportMeshAsync(null , "../../public/A1-A4/" , "A2.glb" , scene)



    mesh.setPositionWithLocalVector(new BABYLON.Vector3(-200, -100, -120));
    
    console.log(mesh)



    return scene

    }

    createScene()


    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);

  return <canvas style={{height:"100vh" , width:"100%"}} ref={canvasRef} />;
};

export default BabylonScene;
