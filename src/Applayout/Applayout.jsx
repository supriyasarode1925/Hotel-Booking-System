import { Footers } from "./Footer"
import { Headers } from "./Header"
import { Outlet } from "react-router-dom"
import { Marquee } from "../Components/Marquee"
import React from "react"

export const Applayout = () => {
    return(
        <>
        <Marquee />
        <Headers></Headers>
        <Outlet></Outlet>   
        <Footers></Footers>
        </>
    )
}