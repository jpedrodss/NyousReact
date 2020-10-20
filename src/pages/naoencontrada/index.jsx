import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/logo.jpg';

const NaoEncontrada = () => {
    return(
        <div>
            <Menu />
            <h1 className="text-center" style={{marginTop: '80px'}}>404</h1>
            <Rodape />
        </div>
    )
}

export default NaoEncontrada;