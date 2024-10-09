import { useRecoilState } from "recoil"
import selectLightAtom from "../../atoms/selectLight"
import selectStepsAtom from "../../atoms/steps"
import ColorPicker from "../colorPicker/colorPicker"
import selectLoupeAtom from "../../atoms/selectLoup"

export default function SelectLoupe () {
    
    const [selectLoupe, setSelectLoupe] = useRecoilState(selectLoupeAtom)
    const [___ , setSteps] = useRecoilState(selectStepsAtom)
    
  function handleSelectLoupe(Loupe) {
    if(Loupe == selectLoupe) {
      setSelectLoupe(0)
    } else {
      setSelectLoupe(Loupe)
    }
  }

    return (
<div class="ex-steps">
      <div id="step_1" class="ex-configurator-step active">
          <div class="ex-configurator-step-header"><h3>SELECT Light</h3></div>
          
          <div id="a-change-models" onClick={()=>{
            handleSelectLoupe(1)
          }} class="ex-configurator-step-options">
            Loupe1 
          </div>


          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(3)
          }}>
              Back STEP
          </div>
      </div>
    </div>
    )
}