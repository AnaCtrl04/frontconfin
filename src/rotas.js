import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Estados from "./components/estado_lista";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <h1>ConFin - Controle Financeiro</h1>
                        <Link className="button" to="estados">Estados</Link>
                    </div>
                } />
                <Route  path="/estados" element={<Estados />} />
            </Routes>
        </BrowserRouter>
    )
}