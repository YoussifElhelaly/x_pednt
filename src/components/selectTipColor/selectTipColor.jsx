import { useRecoilState } from "recoil"
import selectFrameAtom from "../../atoms/selectFrame"
import faceColorAtom from "../../atoms/faceColor"
import armColorAtom from "../../atoms/armColor"
import selectStepsAtom from "../../atoms/steps"
import ColorPicker from "../colorPicker/colorPicker"

export default function SelectTipColor () {
    
    const [_ , setSelectFrame] = useRecoilState(selectFrameAtom)
    const [armColor,setArmColor] = useRecoilState(armColorAtom)
    const [___ , setSteps] = useRecoilState(selectStepsAtom)

    
    return (
<div class="ex-steps">
      <div id="step_1" class="ex-configurator-step active">
          <div class="ex-configurator-step-header"><h3>SELECT TIP COLOR</h3></div>
          
          

          <div className="selectColor">
           <ColorPicker setColor={setArmColor} color={armColor} />
          </div>

          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(3)
          }}>
              Next STEP
          </div>
          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(1)
          }}>
              Back STEP
          </div>
      </div>
    </div>
    )
}