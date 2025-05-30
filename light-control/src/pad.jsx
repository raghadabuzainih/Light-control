export default function Pad(props) {
    return(
        <div>
            <div onClick={()=> props.toggleClick(props.id)} className={props.on ? "on" : "off"} 
            style={{backgroundColor: props.color, width: '5rem', height: '5rem'}}>
            </div>
        </div>
    )
}