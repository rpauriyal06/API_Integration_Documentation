import React,{useState} from "react";

export const AddEmailList=()=>{

    const [targetValue,setTargetValue]=useState("");
    const [emailList,setEmailList]=useState([]);


    const onChange=(e)=>{
        setTargetValue(e.target.value)
    }
    const onClicked=()=>{
        setEmailList.push({email:targetValue})
console.log(emailList)
    }
    return(
        <div>
               <input type="text" onChange={(e)=>onChange(e)}/>
               <button type="submit" onClick={onClicked} >Submit</button>
               <div>
               {
              emailList.map((item,id)=>(
               <p key={id} >
              <h1> {item.email}</h1>                       </p>
              ))
               }
               </div>
        </div>
    )
}
