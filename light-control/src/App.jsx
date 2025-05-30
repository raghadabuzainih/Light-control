import React from "react"
import pads from "./pads"
import Pad from "./pad"

export default function App() { 
    const [padsData, setPads] = React.useState(pads) 
     
    function handleClick(id){
      const checkID = padsData.map(pad => {
        if(pad.id == id) return {...pad, on: !pad.on}
        return pad
      }
      )
      setPads(old => checkID)
      console.log(padsData)
    }
    
    const padsArr = padsData.map(pad => <Pad key={pad.id} toggleClick={handleClick} color={pad.color} on={pad.on} id={pad.id}/>)
    return (
      <div>
        <h1>Click light to swap from on to off or from off to on</h1>
        <div style={{display: "flex", gap: "1rem"}}>
            {padsArr}
        </div>
      </div>
    )
}