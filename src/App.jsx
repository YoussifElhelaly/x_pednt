import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./Scene";
import ModelBaby from "./components/modelBaby";
import BabylonScene from "./components/modelBaby";


export default function App() {
  return (
    <>
    {/* <Canvas style={{height: "100vh"}}>
      <color attach="background" args={ ["#f2f2f2"]}/>
      <Model/>
    </Canvas> */}
    <BabylonScene/>
    
    </>
  );
}