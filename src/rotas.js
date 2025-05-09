import React from 'react';
import {browserRouter, Routes, Route} from 'react-router-dom';

export default function Rotas() {
    return (
        <browserRouter>
            <Routes>
                <Route path="./" element={<h1>Controle Financeiro</h1>} />
                <Route path="./estado_lista" element={<EstadoLista />} />
            </Routes>
        </browserRouter>
    )
}