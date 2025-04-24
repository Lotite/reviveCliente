import Service from "../services/Service";

export default function IMG(){
    return (
        <img src={`${Service.getContentMedia(756,"poster")}`} />
    )
}