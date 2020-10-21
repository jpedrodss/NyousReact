import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const AcessoNegado = () => {
    return(
        <div>
            <Menu />
            <h1 className="text-center" style={{marginTop: '80px'}}>Acesso Negado.</h1>
            <Rodape />
        </div>
    )
}

export default AcessoNegado;