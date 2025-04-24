import { SlMagnifier } from "react-icons/sl"; 
import { CSSProperties, useRef, useState } from "react";
import { colors } from "../../../utils/constants";
import { playerVideo } from "../../../utils/types";
import VideoLayautSearch from "../../atomos/layauts/VideoLayaut/VideoLayautSearch";

export default function SearchEngine() {
  const [height, setHeight] = useState<string>("0px");
  const input = useRef<HTMLInputElement>(null);
  const [mediasEncontrados,setMedia] =  useState<playerVideo[]>([]);

  const db: playerVideo[] = [
   {
  verticalPoster: "https://picsum.photos/200/300",
  title: "Dragon Ball Z: El Regreso del Guerrero",
  description:
    "Goku regresa a la Tierra después de su entrenamiento en el planeta Kaioshin. Su regreso coincide con la llegada de un nuevo enemigo, Babidi, que busca conquistar el mundo.",
  duration: 200,
  contuning: 50,
  year: 2024,
  type: "movie",
  director: "Akira Toriyama",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/301",
  title: "Dragon Ball Super: La Nueva Era",
  description:
    "La historia sigue a Goku y sus amigos mientras intentan detener a Babidi y su plan para conquistar el mundo.",
  duration: 250,
  contuning: 75,
  type: "movie",
  year: 2024,
  director: "Akira Toriyama",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/302",
  title: "Naruto: El Último Ninja",
  description:
    "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
  duration: 300,
  contuning: 100,
  type: "series",
  year: 2024,
  director: "Masashi Kishimoto",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/303",
  title: "One Piece: La Búsqueda del Tesoro",
  description:
    "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
  duration: 350,
  contuning: 125,
  type: "series",
  year: 2024,
  director: "Eiichiro Oda",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/304",
  title: "Bleach: La Venganza del Shinigami",
  description:
    "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
  duration: 400,
  contuning: 150,
  type: "series",
  year: 2024,
  director: "Tite Kubo",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/302",
  title: "Naruto: La Sombra del Pasado",
  description:
    "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
  duration: 300,
  contuning: 100,
  type: "series",
  year: 2024,
  director: "Masashi Kishimoto",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/303",
  title: "One Piece: La Isla del Cielo",
  description:
    "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
  duration: 350,
  contuning: 125,
  type: "series",
  year: 2024,
  director: "Eiichiro Oda",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/304",
  title: "Bleach: La Batalla Final",
  description:
    "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
  duration: 400,
  contuning: 150,
  type: "series",
  year: 2024,
  director: "Tite Kubo",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/300",
  title: "Dragon Ball GT: La Nueva Generación",
  description:
    "Goku regresa a la Tierra después de su entrenamiento en el planeta Kaioshin. Su regreso coincide con la llegada de un nuevo enemigo, Babidi, que busca conquistar el mundo.",
  duration: 200,
  contuning: 50,
  year: 2024,
  type: "movie",
  director: "Akira Toriyama",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/301",
  title: "Dragon Ball Heroes: La Unión de los Guerreros",
  description:
    "La historia sigue a Goku y sus amigos mientras intentan detener a Babidi y su plan para conquistar el mundo.",
  duration: 250,
  contuning: 75,
  type: "movie",
  year: 2024,
  director: "Akira Toriyama",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/302",
  title: "Naruto: El Legado del Ninja",
  description:
    "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
  duration: 300,
  contuning: 100,
  type: "series",
  year: 2024,
  director: "Masashi Kishimoto",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/303",
  title: "One Piece: La Aventura del Pirata",
  description:
    "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
  duration: 350,
  contuning: 125,
  type: "series",
  year: 2024,
  director: "Eiichiro Oda",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/304",
  title: "Bleach: La Venganza del Shinigami",
  description:
    "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
  duration: 400,
  contuning: 150,
  type: "series",
  year: 2024,
  director: "Tite Kubo",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/302",
  title: "Naruto: La Sombra del Pasado",
  description:
    "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
  duration: 300,
  contuning: 100,
  type: "series",
  year: 2024,
  director: "Masashi Kishimoto",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/303",
  title: "One Piece: La Isla del Cielo",
  description:
    "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
  duration: 350,
  contuning: 125,
  type: "series",
  year: 2024,
  director: "Eiichiro Oda",
  generos: "Aventura, Acción",
},
{
  verticalPoster: "https://picsum.photos/200/304",
  title: "Bleach: La Batalla Final",
  description:
    "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
  duration: 400,
  contuning: 150,
  type: "series",
  year: 2024,
  director: "Tite Kubo",
  generos: "Aventura, Acción",
},
  ];

  function searchMedia(e:React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value === "") {
      setMedia([]);
      document.body.style.overflow = "auto";
      setHeight("0px");
      return;
    }
    setHeight("100vh");
    const result = db.filter((media) => media.title.toLowerCase().includes(value.toLowerCase()));
    document.body.style.overflow = "hidden";
    setMedia([...result]);
  }


  return<>
  <div style={{position:"relative",}}>
    <input style={style.main} ref={input} onInput={searchMedia}  placeholder="Buscar..."/>
    <SlMagnifier style={style.icon} onClick={()=>{input.current?.focus();}}/>
  </div>
  <div style={{...style.container,height:height}} onClick={()=>{document.body.style.overflow = "auto";}}>
    {mediasEncontrados.map((video, index) => (
        <VideoLayautSearch
        key={index}
        verticalPoster={video.verticalPoster}
        title={video.title} type={"movie"}        />
      ))}
  </div>
  </>
}

const style: { [key: string]: CSSProperties } = {
  main: {
    width: "400px",
    height: 35,
    backgroundColor: colors.background.medium2,
    marginInline:10,
    borderRadius:30,
    border:"1px solid white",
    boxShadow: "inset 1px 1px 5px  rgba(5, 5, 5, 0.9)",
    maxWidth:250,
    color:"white",
    textIndent:50,
    marginBottom:12,
  },
  icon:{
    color:"white",
    fontSize:25,
    position:"absolute",
    left:20,
    top:5,
  },
  container:{
    transform:"translateY(70px)",
    width:"100vw",
    backgroundColor:colors.background.medium,
    position:"absolute",
    zIndex:1,
    transition:"height 0.5s ease-in-out", 
    transformOrigin: "top",
    top:0,
    overflowY:"auto",
    scrollbarWidth:"none",
    display:"flex",
    flexWrap:"wrap",
  }
};
