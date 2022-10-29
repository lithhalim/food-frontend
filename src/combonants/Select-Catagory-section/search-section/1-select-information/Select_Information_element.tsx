import React, { useRef } from 'react';
import "./style/style.scss"


function Select_Information({optionItem,type}:any) {
    const {name,option}=optionItem;

    let expanded = false;
    const CheckBox=useRef<any>()

    const  showCheckboxes=()=> {
        if (!expanded) {
            CheckBox.current.style.display = "block";
            expanded = true;
        } else {
            CheckBox.current.style.display = "none";
            expanded = false;
        }
    }

  return (
        <div className="multiselect">
                <div className="selectBox" onClick={showCheckboxes}>
                    <select>
                        <option>{name}</option>
                    </select>
                    <div className="overSelect"></div>
                </div>
                <div id="checkboxes" ref={CheckBox}>
                    {option.map((a:any,i:any)=>(
                        <div key={i}>
                            {type==="other"?<label key={i}><input type="checkbox" id="one" name={`${name}###${a}`}   />{a}</label>:<></>}          
                        </div>
                    ))}
                </div>
        </div>
  )
}

export default Select_Information