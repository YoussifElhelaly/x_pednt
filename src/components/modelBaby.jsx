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
        0,
        0,
        10,
        new BABYLON.Vector3(0,0,0),
        scene
    ) 

    camera.setPosition(new BABYLON.Vector3(0,5,-10))
    camera.attachControl(scene , true)

    const light = new BABYLON.HemisphericLight(
        "light1",
        new BABYLON.Vector3(0,1,0),
        scene
    )
    light.intensity = 0.7

    engine.runRenderLoop(() => {
      scene.render();
    });

    // const sphere = BABYLON.MeshBuilder.CreateSphere(
    //     "sphere" , 
    //     {diameter:2 , segments:32},
    //     scene
    // )

    // sphere.position.y = 1 

    const mesh = await BABYLON.SceneLoader.ImportMeshAsync(null , "../../public/" , "carbon.glb" , scene)

    // mesh.setPositionWithLocalVector(new BABYLON.Vector3(0, 0, 0));
    
    console.log(mesh)

    // Create a standard material
    const stdMaterial = new BABYLON.StandardMaterial("stdMaterial", scene);

    // Load your texture (replace 'texturePath' with the actual path or URL)
    const texturePath = "../../public/textures/carbon_albedo2.jpg";
    stdMaterial.diffuseTexture = new BABYLON.Texture(texturePath, scene);
    stdMaterial.diffuseColor = new BABYLON.Color3(1,1, 1); // White color
    
    // Assign the material to the mesh
    mesh.geometries[0] = stdMaterial;

    // const ground = BABYLON.MeshBuilder.CreateGround("ground" , {width: 6 , height: 6} , scene)
    // ground.setPositionWithLocalVector(new BABYLON.Vector3(1, 1, 1));
    // ground.material = stdMaterial

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
