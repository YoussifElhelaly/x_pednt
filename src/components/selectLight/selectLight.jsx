import { useRecoilState } from "recoil"
import selectLightAtom from "../../atoms/selectLight"
import selectStepsAtom from "../../atoms/steps"
import ColorPicker from "../colorPicker/colorPicker"

export default function SelectLight () {
    
    const [selectLight, setSelectLight] = useRecoilState(selectLightAtom)
    const [___ , setSteps] = useRecoilState(selectStepsAtom)
    
  function handleSelectLight(light) {
    if(light == selectLight) {
      setSelectLight(0)
    } else {
      setSelectLight(light)
    }
  }

    return (
<div class="ex-steps">
      <div id="step_1" class="ex-configurator-step active">
          <div class="ex-configurator-step-header"><h3>SELECT Light</h3></div>
          
          <div id="a-change-models" onClick={()=>{
            handleSelectLight(1)
          }} class="ex-configurator-step-options">
            Light1 
          </div>
          <div id="a-change-models" onClick={()=>{
            handleSelectLight(2)
          }} class="ex-configurator-step-options">
            Light2 
          </div>
          <div id="a-change-models" onClick={()=>{
            handleSelectLight(3)
          }} class="ex-configurator-step-options">
            Light3 
          </div>
          <div id="a-change-models" onClick={()=>{
            handleSelectLight(4)
          }} class="ex-configurator-step-options">
            Light4
          </div>

          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(4)
          }}>
              next STEP
          </div>
          <div class="ex-configurator-step-button a-change-position_step_2" onClick={()=>{
            setSteps(2)
          }}>
              Back STEP
          </div>
      </div>
    </div>
    )
}