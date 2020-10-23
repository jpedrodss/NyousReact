import React from 'react'
import { Container } from 'react-bootstrap';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

const CrudEventos = () => {
    return (
        <div>
            <Menu />
            <Container>
                <Titulo
                    titulo="Eventos"
                    chamada="Gerencie seus eventos"
                />
            </Container>
            <Rodape />
        </div>
    )
}

export default CrudEventos;