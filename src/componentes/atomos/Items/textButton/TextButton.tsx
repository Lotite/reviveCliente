import { CSSProperties } from "styled-components";
import { colors } from "../../../../utils/constants";
import React from "react";

export default function TextButton({text,styleProp,color,onclick}:{text:string,styleProp?:CSSProperties,color:"orange"|"blue"|"green", onclick?:React.MouseEventHandler<HTMLButtonElement>}) {


    const style : CSSProperties = {
        backgroundColor: colors.main[color],
        border: "none",
        color: "white",
        borderRadius: "20px",
        transition: "all 0.3s ease-in-out",
        paddingInline: 10,
    }






    return(<button 
        style={{...style,...styleProp}}
        onMouseEnter={(e)=>(e.currentTarget.style.backgroundColor = colors.hover.botton)}
        onMouseLeave={(e)=>(e.currentTarget.style.backgroundColor = colors.main[color])}
        onClick={onclick}
    >
        {text}
    </button>);
}


