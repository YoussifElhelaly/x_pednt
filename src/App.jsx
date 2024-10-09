import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Scene";
import ModelBaby from "./components/modelBaby";
import BabylonScene from "./components/modelBaby";
import { useRecoilState, useRecoilValue } from "recoil";
import armColorAtom from "./atoms/armColor";
import './App.css'
import faceColorAtom from "./atoms/faceColor";
import selectFrameAtom from "./atoms/selectFrame";
import selectStepsAtom from "./atoms/steps";
import SelectFrame from "./components/selectFrame/selectFrame";
import SelectTipColor from "./components/selectTipColor/selectTipColor";
import './assets/main.min8459.css'
import { Model3d } from "./components/model3d/model3d";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import Loader from "./components/Loader";
import SelectLight from "./components/selectLight/selectLight";
import SelectLoupe from "./components/selectLoupe/selectLoupe";
export default function App() {

  const steps = useRecoilValue(selectStepsAtom)



  return (
    <div className="modelScene">
    <Canvas style={{height: "100vh" , width:"70vw"}}>
      <color attach="background" args={ ["#f6f6f6"]}/>
      <Suspense fallback={<Loader />}>
        <Model/>
      </Suspense>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        maxDistance={0.2}
        minDistance={0.2}
      />
    </Canvas>
    {
      steps == 1 ?
        <SelectFrame/>
        : 
        steps == 2 ?
         
         <SelectTipColor/>
        :
         steps == 3 ?
         <SelectLight/> 
    :steps == 4 && 
      <SelectLoupe/>
        
    }
    {/* <BabylonScene/> */}
    
    </div>
  );
}