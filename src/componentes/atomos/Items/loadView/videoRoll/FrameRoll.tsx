import { colors } from "../../../../../utils/constants"
import { styleParent } from "../../../../../utils/types"

export default function FrameRoll({color,position}:{color:string,position:number}){ 
    
    const style:styleParent = {
        container:{
            width: "20%",
           
            marginBlock: "2%",
            boxSizing: "border-box",
            border: `solid 2px ${color}`,
            borderRadius: "8px",
            boxShadow: `inset 0 0 0 2px ${color}`,
            position: "relative",
        },
        box:{
            width: "10%",
            aspectRatio: "1/1",
            backgroundColor: colors.background.dark,
            borderRadius: "2px",
            position: "absolute",
        },
        top:{top:"-30%",},
        bottom:{bottom:"-30%"},

    }
    
    return(
        <div style={style.container}>
            <div style={{...style.box,...style.top,left:"5%"}}></div>
            <div style={{...style.box,...style.top,left:"45%",}}></div>
            <div style={{...style.box,...style.top,left:"85%"}}></div>
            <div style={{...style.box,...style.bottom,left:"5%"}}></div>
            <div style={{...style.box,...style.bottom,left:"45%",}}></div>
            <div style={{...style.box,...style.bottom,left:"85%"}}></div>
        </div>
    )
}
