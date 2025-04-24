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

<<<<<<< HEAD
export type response = {
    success?: boolean,
    message?: any,
    token?: string,
    payload?:any
}

export type styleParent = { [key: string]: CSSProperties }

=======
export type styleParent = { [key: string]: CSSProperties }


>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
export type tColor = "orange" | "green" | "blue"|"white"

export type visible = "visible" | "hidden" | "";

<<<<<<< HEAD
export type tInput = "name"|"email"|"password"

export type TinfoHerader = {name:string,email:string}
=======
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
