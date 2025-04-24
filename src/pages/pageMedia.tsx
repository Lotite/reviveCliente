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

  return (
    <>
      <VideoPlay title="Hola" type="movie" src="http://192.168.1.141/ReviveServidor/private/media.php?video=mario.mp4"></VideoPlay>
      <div>        
          <CommentContainer />
      </div>
    </>
  );
}
