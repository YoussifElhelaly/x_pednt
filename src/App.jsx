import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Scene";
import ModelBaby from "./components/modelBaby";
import BabylonScene from "./components/modelBaby";
import { useRecoilState } from "recoil";
import armColorAtom from "./atoms/armColor";
import './App.css'
import faceColorAtom from "./atoms/faceColor";

export default function App() {

  const [armColor , setArmColor] = useRecoilState(armColorAtom)
  const [faceColor , setFaceColor] = useRecoilState(faceColorAtom)

  return (
    <div className="modelScene">
    <div className="controlles">
      <input type="color" onChange={(e)=>{
       setArmColor(e.target.value)
      }} />
      <input type="color" onChange={(e)=>{
       setFaceColor(e.target.value)
      }} />
    </div>
    <Canvas style={{height: "100vh" , width:"100vw"}}>
      <color attach="background" args={ ["#f2f2f2"]}/>
      <Model/>
    </Canvas>
    {/* <BabylonScene/> */}
    
    </div>
  );
}