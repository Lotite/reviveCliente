import { CSSProperties, useEffect, useRef, useState } from "react"
import { colors } from "../../../../../utils/constants"
import { randomInt } from "../../../../../utils/functions";

const arrayColors = [
    colors.main.green,
    colors.main.blue,
    colors.main.orange
]
//Remplacar puntos por iconos;
export default function Particle() {

    const particle = useRef<HTMLDivElement>(null);
    const [frecuencia,SetFrecuencia] = useState<number>(randomInt(500,3000));
    useEffect(() => {
        let hide:number;
        const intervalId = setInterval(() => {
            animateParticle(particle.current!,frecuencia)
            particle.current!.style.opacity = randomInt(0.3,0.7).toString()
            hide = setTimeout(()=>{
                particle.current!.style.opacity = "0"
                SetFrecuencia(randomInt(500,3000))
            },frecuencia)
        }, frecuencia*2);

        // Limpieza del intervalo al desmontar el componente
        return () => {
            clearInterval(intervalId);
            clearInterval(hide)
        };
    }, [particle,frecuencia]);

    return (
        <div style={style} ref={particle}>
           
        </div>
    )
}

function animateParticle(particle:HTMLDivElement,frecuencia:number){
    const style = particle.style;
    style.opacity = "0";
    style.width = randomInt(5, 10) + "px";
    style.height = randomInt(5, 10) + "px";
    style.borderRadius = randomInt(5) + "px";
    style.background = arrayColors[randomInt(3)];
    style.top = randomInt(100) + "%";
    style.left = randomInt(100) + "%";
    style.transition=`opacity ease ${frecuencia}ms`;
}


const style: CSSProperties = {
    position: 'absolute',
    opacity :0
}
