import { ChangeEventHandler, CSSProperties } from "react";
import  "./controlBar.css";



export default function Bar({duration,position,onChange,style}:{duration:number|string,position?:number|string,onChange?:ChangeEventHandler<HTMLInputElement>,style?:CSSProperties}){
    return <input className="controlBar" type="range" min={0} max={duration} value={position} onChange={onChange} readOnly style={style} />
}