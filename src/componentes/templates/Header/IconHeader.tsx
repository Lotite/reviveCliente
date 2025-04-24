import React, { useState } from "react";
import { colors } from "../../../utils/constants";

export default function IconHeader({children,colorHover , onclick}:{children: React.ReactNode,onclick?: (e: React.MouseEvent<HTMLDivElement>) => void ,colorHover:"green"|"orange"|"blue"}){

    const [color,setColor] = useState<"green"|"orange"|"blue"|"white">("white");
    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width:"100px",
        marginBlock: "auto",
        height:"min-content",
        paddingBlock:10,
        margin: 10,
        borderRadius:10 ,
        padding:10,
        background: colors.background[color],
        transition:"color 300ms ease-in-out",
    };
    
    

   return (
    <div
     style={style} 
     onMouseEnter={()=>{setColor(colorHover) }} 
     onMouseLeave={()=>{setColor("white")}}
     onClick={onclick}
     >
        {React.Children.map(children, (child) => 
            React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<React.HTMLAttributes<HTMLElement>>, { 
                style: { ...child.props.style, color: colors.main[color],transition:"color 300ms ease-in-out", }, 
            }) : child
        )}
    </div>
)
}
