import React from "react";

export const AddEmailList=()=>{

    const emailList=[];
    const clicked=(e)=>{
        emailList.push(e.target.value)
    }

    return(
        <div>
               <input type="text" />
               <button type="submit" onClick={(e)=>clicked(e)}/>

               {
                   emailList.map((item,id)=>{
                       <p>
                           {item[id]}
                       </p>
                   })
               }
        </div>
    )
}
