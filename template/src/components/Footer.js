import React from "react"
import {Redes} from './Redes'
import {Copyright} from "./Copyright"

export function Footer(){
    return(
        <div>
            <footer>
                <Redes/>
                <Copyright/>
            </footer>
        </div>
    )
}