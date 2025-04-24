import "./barAnimation.css";
export const TopBar = ({ title,opacidad }: { title: string , opacidad:number}) => {
  return (
    <div
      style={{
        position: "absolute",
        height: "80px",
        background: "linear-gradient(to bottom, #000a, #000a,#0000)",
        width:"100%",
        color:"white",
        paddingInline:"20px",
        opacity:opacidad,
        transition:"opacity 300ms ease-in-out",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
};
