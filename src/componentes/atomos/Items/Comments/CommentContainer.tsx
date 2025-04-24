import { colors } from "../../../../utils/constants";
import { styleParent } from "../../../../utils/types";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentContainer = () => {
    

    return (
        <div style={style.main}>
         <h3>Comentarios(10)</h3>
         <CommentInput/>
         <CommentItem añadir={true}/>
        </div>
    );
};

export default CommentContainer;


const style : styleParent = {
    main:{
        width:"80%",
        height:"auto",
        backgroundColor:colors.background.medium,
        marginInline:"auto",
        marginTop:30,
        borderRadius:10,
        overflow:"hidden",
        padding:20,
    },
}
