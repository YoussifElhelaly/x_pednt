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

export default function App() {

  const steps = useRecoilValue(selectStepsAtom)
  return (
    <div className="modelScene">
    <Canvas style={{height: "100vh" , width:"70vw"}}>
      <color attach="background" args={ ["#f2f2f2"]}/>
      <Model/>
    </Canvas>
    {
      steps == 1 ? <SelectFrame/> : <SelectTipColor/>
    }
    {/* <BabylonScene/> */}
    
    </div>
  );
}