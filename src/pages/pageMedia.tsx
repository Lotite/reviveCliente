import { useEffect } from "react";
import CommentContainer from "../componentes/atomos/Items/Comments/CommentContainer";
import { useLocation, useNavigate } from "react-router-dom";
import VideoPlay from "../componentes/atomos/Items/Videos/VideoPlayer/VideoPlayer";

export default function PageMedia() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const msg = searchParams.get("m");
    if (msg) {
      navigate("/media", { replace: true }); 
    }
  }, [location.search, navigate]);
<<<<<<< HEAD
  //https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
  return (
    <>
      <VideoPlay title="Hola" type="movie" src="http://192.168.1.141/ReviveServidor/private/media.php?video=mario.mp4"></VideoPlay>
=======

  return (
    <>
      <VideoPlay title="Hola" type="movie" src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></VideoPlay>
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
      <div>        
          <CommentContainer />
      </div>
    </>
  );
}
