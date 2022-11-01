import {FcHome,FcOnlineSupport,FcPortraitMode} from "react-icons/fc";

import {FcServices,FcTodoList} from "react-icons/fc"

import {FcDoughnutChart,FcElectricalThreshold,FcLineChart,FcProcess} from "react-icons/fc"

let Select_Dashboard_All_Data=[
    {type:"data"
        ,item:[
            {icon:<FcHome/>,name:"Dashboard Data",page:"0"}
           ,{icon:<FcOnlineSupport/>,name:"All Employes",page:"1"}
           ,{icon:<FcPortraitMode/>,name:"All Custmoers",page:"2"}]
    },
    {type:"Pages"
    ,item:[
        {icon:<FcServices/>,name:"create Item",page:"3"}
       ,{icon:<FcTodoList/>,name:"All item ",page:"4"}]
    },
    {type:"Charts"
    ,item:[
        {icon:<FcLineChart/>,name:"Bar Charts",page:"5"}
       ,{icon:<FcProcess/>,name:"pie charts",page:"6"}
       ,{icon:<FcElectricalThreshold/>,name:"line charts",page:"7"}
       ,{icon:<FcDoughnutChart/>,name:"geograph charts",page:"8"}]
    }

]

export default Select_Dashboard_All_Data