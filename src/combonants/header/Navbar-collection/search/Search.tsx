import React from 'react'
import {BiSearchAlt} from "react-icons/bi";
import {motion}  from "framer-motion";

function Search_icon_section() {

    const showSearch=()=>{document.querySelector(".Search-Section")?.classList.toggle("active")}

  return (
        <li><BiSearchAlt onClick={showSearch}/>
         <motion.input type="text"    animate={{ x: 0 }} initial={{x:-300}} transition={{ duration: 2 }} placeholder='Search Here ...' className='Search-Section'/>
        </li>
    )
}

export default Search_icon_section
