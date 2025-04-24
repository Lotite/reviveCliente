import { CSSProperties } from "react"

export type playerVideo = {
    src?:string
    type: "movie" | "series" | "tv"
    title : string
    duration? : number | string
    quality? : "HD" | "FHD" | "4K"
    description? : string
    verticalPoster? : string
    horizontalPoster? : string
    contuning? : number
    year? :number
    director? : string
    generos? : string
    
}

export type response = {
    success?: boolean,
    message?: any,
    token?: string,
    payload?:any
}

export type styleParent = { [key: string]: CSSProperties }






export type tColor = "orange" | "green" | "blue"|"white"

export type visible = "visible" | "hidden" | "";


export type tInput = "name"|"email"|"password"

export type TinfoHerader = {name:string,email:string}
