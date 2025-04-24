import { playerVideo, styleParent } from "../../../../utils/types";
import VideoLayaut from "../VideoLayaut/VideoLayaut";

// "https://picsum.photos/200/301",
// "https://picsum.photos/200/302",
// "https://picsum.photos/200/303",
// "https://picsum.photos/200/304",
// "https://picsum.photos/200/305",
// "https://picsum.photos/200/306",
// "https://picsum.photos/200/307",
// "https://picsum.photos/200/308",

export default function Galery() {
  const videos: playerVideo[] = [
    {
      verticalPoster: "https://picsum.photos/200/300",
      title: "Jose",
      description:
        "Goku regresa a la Tierra después de su entrenamiento en el planeta Kaioshin. Su regreso coincide con la llegada de un nuevo enemigo, Babidi, que busca conquistar el mundo.",
      duration: 200,
      contuning: 50,
      year: 2020,
      type: "movie",
      director: "Akira Toriyama",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/301",
      title: "Dragon Ball",
      description:
        "La historia sigue a Goku y sus amigos mientras intentan detener a Babidi y su plan para conquistar el mundo.",
      duration: 250,
      contuning: 75,
      type: "movie",
      year: 2019,
      director: "Akira Toriyama",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/302",
      title: "Naruto",
      description:
        "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
      duration: 300,
      contuning: 100,
      type: "series",
      year: 2018,
      director: "Masashi Kishimoto",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/303",
      title: "One Piece",
      description:
        "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
      duration: 350,
      contuning: 125,
      type: "series",
      year: 2017,
      director: "Eiichiro Oda",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/304",
      title: "Bleach",
      description:
        "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
      duration: 400,
      contuning: 150,
      type: "series",
      year: 2016,
      director: "Tite Kubo",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/302",
      title: "Naruto",
      description:
        "La historia sigue a Naruto Uzumaki, un joven ninja que intenta proteger a su aldea de los enemigos.",
      duration: 300,
      contuning: 100,
      type: "series",
      year: 2018,
      director: "Masashi Kishimoto",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/303",
      title: "One Piece",
      description:
        "La historia sigue a Monkey D. Luffy, un joven pirata que busca convertirse en el rey de los piratas.",
      duration: 350,
      contuning: 125,
      type: "series",
      year: 2017,
      director: "Eiichiro Oda",
      generos: "Aventura, Acción",
    },
    {
      verticalPoster: "https://picsum.photos/200/304",
      title: "Bleach",
      description:
        "La historia sigue a Ichigo Kurosaki, un joven que puede ver a los espíritus y se convierte en un Shinigami.",
      duration: 400,
      contuning: 150,
      type: "series",
      year: 2016,
      director: "Tite Kubo",
      generos: "Aventura, Acción",
    },
  ];

  return (
    <div style={styles.main}>
      {videos.map((video, index) => (
        <VideoLayaut
          key={index}
          verticalPoster={video.verticalPoster}
          title={video.title}
          description={video.description}
          duration={video.duration}
          contuning={video.contuning}
          type={video.type}
          year={video.year}
          director={video.director}
          generos={video.generos}
        />
      ))}
    </div>
  );
}

const styles: styleParent = {
  main: {
    display: "flex",
    width: "100%",
    overflowX: "auto",
    scrollbarWidth: "none",
    marginBottom:50,
  },
};
