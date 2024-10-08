import { useRecoilState } from "recoil"
import selectFrameAtom from "../../atoms/selectFrame"
import faceColorAtom from "../../atoms/faceColor"
import selectStepsAtom from "../../atoms/steps"
import ColorPicker from "../colorPicker/colorPicker"

export default function SelectFrame () {
    
    const [_ , setSelectFrame] = useRecoilState(selectFrameAtom)
    const [___ , setSteps] = useRecoilState(selectStepsAtom)
    const [faceColor,setFaceColor] = useRecoilState(faceColorAtom)
    
    return (
<div class="ex-steps">
      <div id="step_1" class="ex-configurator-step active">
          <div class="ex-configurator-step-header"><h3>SELECT FRAME</h3></div>
          
          <div id="a-change-models" onClick={()=>{
            setSelectFrame(1)
          }} class="ex-configurator-step-options">
            frame1 
          </div>
          <div id="a-change-models" onClick={()=>{
            setSelectFrame(2)
          }} class="ex-configurator-step-options">
            frame2 
          </div>
          <div id="a-change-models" onClick={()=>{
            setSelectFrame(3)
          }} class="ex-configurator-step-options">
            frame3 
          </div>

          <div className="selectColor">
           <ColorPicker setColor={setFaceColor} color={faceColor}/>
            
          </div>

          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(2)
          }}>
              NEXT STEP
          </div>
      </div>
    </div>
    )
}