import { AiOutlineDislike } from "react-icons/ai"; 
import { AiOutlineLike } from "react-icons/ai"; 
import { colors } from "../../../../utils/constants"
import { styleParent } from "../../../../utils/types"

//ID de comentario
export default function CommentItem({añadir=true,linea=true}:{añadir:boolean,linea?:boolean}){




    const style : styleParent = {
        main:{
            display:"flex",
            borderBottom:`${linea ? "solid 2px #fff4" : ""}`,
        },
        img:{
            width:50,
            height:50,
        },
        container:{
            margin:"10px",
        },
        icon:{
            marginInline:5,
            color:colors.text.medium,
        }
    }





    
    return <div style={style.main}>
        <img style={style.img} src="https://autostatcorp.com/wp-content/uploads/2019/04/INT-ADULT3.png"/>
        <div style={style.container}>
            <p><b>MariaGamer</b> <span style={{color:colors.text.medium}}>hace 2 horas</span></p>
            <p>¡Me encanta este corto! El conejo es muy gracioso, especialmente cuando encuentra la manzana. 😂</p>
            <div style={{display:"flex",justifyContent:"left",}}>
                <div style={style.icon}>
                <AiOutlineLike /> 18
                </div>
                <div style={style.icon}>
                <AiOutlineDislike /> 2
                </div>
                <button style={style.icon} >
                    Responder
                </button>




                
            </div>
            {añadir && <CommentItem añadir={false} linea={false}/>}
        </div>
    </div>
}
