import Particle from "./Particle"

export default function Particles({number}:{number:number}){
    return(<>
       {Array(number).fill(0).map(()=>{
    return(<Particle/>)
})}
    </>)
}


       
