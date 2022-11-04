import React,{useContext} from 'react';
import "./style/style.scss";
import {motion} from "framer-motion";
import {AiFillCloseCircle} from "react-icons/ai"
import { Alert_Create_Context } from '../../context-api/Alert-Context';

function Alert_Section() {

    const Alert_Create_Context_Section=useContext(Alert_Create_Context);


  return (
        <>
            {Alert_Create_Context_Section.RunAlert!==false?
                <motion.div className='Item_Alert' initial={{y:"-100vh"}} animate={{y:0}} transition={{duration:1}}>
                    <div className='header-Alert'>
                        <p></p>
                        <span onClick={()=>{Alert_Create_Context_Section.setRunAlert(false)}}><AiFillCloseCircle/></span>
                    </div>
                    <img src={Alert_Create_Context_Section.RunAlert.image} alt="" />
                    <p className='AlertValue'>{Alert_Create_Context_Section.RunAlert.Value}</p>
                </motion.div>
            :<></>}
        </>)
}

export default Alert_Section