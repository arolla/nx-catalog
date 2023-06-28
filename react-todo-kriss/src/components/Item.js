import React, { useState } from "react";

export default function Item(props) {

  const [iditem, setItemid]=useState(-1);
  return (
    <>
      <div onClick={()=>{props.updatefunc(props.id)
      props.changetext(props.text)
      }}className="card">
        <h1>{props.titre}</h1>
        
        <p>{props.text}</p>
        <button onClick={(e)=>props.del(e, props.id)}>delete</button>
      </div>
    </>
  );
}
