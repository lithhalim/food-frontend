import {FcManager,FcOnlineSupport,FcPortraitMode} from "react-icons/fc";

import {FcServices,FcTodoList} from "react-icons/fc"

import {FcDoughnutChart,FcElectricalThreshold,FcLineChart,FcProcess} from "react-icons/fc"

let Select_Dashboard_All_Data=[
    {type:"data"
        ,item:[
            {icon:<FcManager/>,name:"Manager Team",page:"/Manegarteam"}
           ,{icon:<FcOnlineSupport/>,name:"All Employes",page:"/employes"}
           ,{icon:<FcPortraitMode/>,name:"All Custmoers",page:"/custmors"}]
    },
    {type:"Pages"
    ,item:[
        {icon:<FcServices/>,name:"create Item",page:"/createItem"}
       ,{icon:<FcTodoList/>,name:"All item ",page:"/all Item"}]
    },
    {type:"Charts"
    ,item:[
        {icon:<FcLineChart/>,name:"Bar Charts",page:"/bar charts"}
       ,{icon:<FcProcess/>,name:"pie charts",page:"/pie charts"}
       ,{icon:<FcElectricalThreshold/>,name:"line charts",page:"/line charts"}
       ,{icon:<FcDoughnutChart/>,name:"geograph charts",page:"/geograph charts"}]
    }

]

export default Select_Dashboard_All_Data