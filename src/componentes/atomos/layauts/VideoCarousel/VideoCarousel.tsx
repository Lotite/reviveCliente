import { AiOutlineArrowRight } from "react-icons/ai"; 
import { AiOutlineArrowLeft } from "react-icons/ai"; 
import { styleParent } from "../../../../utils/types";
import "./VideoCarousel.css";
import { useRef, useEffect, useState } from "react";

const Carousel = () => {
  const images = [
    "https://picsum.photos/1000/400",
    "https://picsum.photos/1000/401",
    "https://picsum.photos/1000/402",
    "https://picsum.photos/1000/403",
    "https://picsum.photos/1000/404",
    "https://picsum.photos/1000/405",
    "https://picsum.photos/1000/406",
    "https://picsum.photos/1000/407",
    "https://picsum.photos/1000/408",
  ];

  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [imgSelected, setImgSelected] = useState<number>(0);

  useEffect(() => {
    if (imageRefs.current[0]) {
      imageRefs.current[0].style.zIndex = "5";
    }
  });

  function backImg() {
    const imagenActual =
      imageRefs.current[imgSelected % imageRefs.current.length];
    const imagenSiguiente = imageRefs.current[(imgSelected - 1 + imageRefs.current.length) % imageRefs.current.length];
    if (imagenActual && imagenSiguiente) {
      setAnimation(imagenActual, "nextOut");
      setAnimation(imagenSiguiente, "next");
      setImgSelected((imgSelected - 1 + imageRefs.current.length) % imageRefs.current.length);
    }
  }

  function nextImg() {
    const imagenActual =
      imageRefs.current[imgSelected % imageRefs.current.length];
    const imagenAnterior =
      imageRefs.current[
        (imgSelected + 1) % imageRefs.current.length
      ];
    if (imagenActual && imagenAnterior) {
      setAnimation(imagenActual, "backOut");
      setAnimation(imagenAnterior, "back");
      setImgSelected(
        (imgSelected + 1) % imageRefs.current.length
      );
    }
  }

  function changeImg(index: number) {
  //por implementar
  }




  function setAnimation(
    img: HTMLImageElement,
    animation: "next" | "back" | "nextOut" | "backOut"
  ) {
    img.style.animation = `${animation} 800ms forwards`;
    if (animation == "next" || animation == "back") {
      img.style.zIndex = "5";
    } else {
      img.style.zIndex = "1";
    }
  }

  const imagenesElement: JSX.Element[] = images.map((src, index) => (
    <img
      key={index}
      src={src}
      style={style.image}
      ref={(i) => (imageRefs.current[index] = i)}
    />
  ));

  return (
    <div style={style.main} onMouseEnter={()=>{
      const buttonContent = document.getElementById("buttonContent");
      if (buttonContent) buttonContent.style.opacity = "1";
    }} onMouseLeave={()=>{
      const buttonContent = document.getElementById("buttonContent");
      if (buttonContent) buttonContent.style.opacity = "0";
    }}>
      <div style={style.container}>{imagenesElement}</div>
      <div style={style.viewSelect}>
        <div style={{display:'flex',}}>
          {images.map((_i,index)=>(
            <div style={style.viewIndex} onClick={()=>{changeImg(index);}} />
          ))}
        <div  style={{...style.viewIndexSelect,transform:`translateX(${imgSelected*40}px)`,}}/>
        </div>
      </div>
      <div style={style.buttonContent} id="buttonContent" >
      <AiOutlineArrowLeft style={style.button} onClick={backImg}/>
      <AiOutlineArrowRight style={style.button} onClick={nextImg}/>
      </div>
    </div>
  );
};

const style: styleParent = {
  main: {
    width: "fit-content",
    position:"relative",
    margin:20,
    marginInline:"auto",
  },
  container: {
    width: 1000,
    height: 400,
    overflow:"hidden",
    position:"relative",
    borderRadius:20,
    
  },
  image: {
    position: "absolute",
    animation: "adelante 3s  forwards",
  },
  viewSelect:{
    width:"100%",
    height:30,
    position:"absolute",
    zIndex:6,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    top:"90%",
  },viewIndex:{
    width:30,
    height:7,
    borderRadius:5,
    backgroundColor:"rgba(5, 5, 5, 0.67)",
    margin:5,
    cursor:"pointer",
  },viewIndexSelect:{
    width:30,
    height:7,
    borderRadius:5,
    backgroundColor:"black",
    margin:5,
    position:"absolute",
    zIndex:7,
    transition:"transform 300ms  ease-in-out",
  },buttonContent:{
    position:"absolute",
    zIndex:8,
    top:"50%",
    display:"flex",
    justifyContent:"space-between",
    transition:"opacity 300ms",
    width:"100%",
  },button:{
    color:"white",
    fontSize:50,
    cursor:"pointer",
  }
  
};

export default Carousel;
