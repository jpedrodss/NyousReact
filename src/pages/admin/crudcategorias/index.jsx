import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Form, Card } from 'react-bootstrap';
import { url } from '../../utils/constants'
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';

const CrudCategorias = () => {
    const [idCategoria, setIdCategoria] = useState(0);
    const [titulo, setTitulo] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        listar()
    }, []);

    const listar = () => {
        fetch(url + 'categorias')
            .then(response => response.json())
            .then(data => {
                setCategorias(data);
                limparCampos();
            })
            .catch(err => console.error(err));
    }

    const editar = (event) => {
        event.preventDefault();

        fetch(`${url}categorias/${event.target.value}`)
            .then(response => response.json())
            .then(dado => {
                console.log(dado)
                setIdCategoria(dado.idCategoria)
                setTitulo(dado.titulo)
                setUrlImagem(dado.urlImagem)
            })
    }

    const excluir = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        fetch(url + 'categorias/' + event.target.value, {
            method: 'DELETE',
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token-nyous')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Categoria removida!')
                listar()
            })
    }

    const uploadFile = (event) => {
        event.preventDefault();

        let formdata = new FormData();

        formdata.append('arquivo', event.target.files[0]);

        fetch(`${url}upload`, {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json())
            .then(data => {
                setUrlImagem(data.url);
            })
            .catch(err => console.error(err))
    }

    const salvar = (event) => {
        event.preventDefault();

        const categoria = {
            titulo: titulo,
            urlImagem: urlImagem
        }

        let method = (idCategoria === 0 ? 'POST' : 'PUT')
        let urlRequest = (idCategoria === 0 ? `${url}categorias` : `${url}categorias/${idCategoria}`)

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(categoria),
            headers: {
                'content-type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token-nyous')
            }
        })
            .then(response => response.json())
            .then(dados => {
                alert('Categoria Salva!');
                listar();
            })
    }

    const limparCampos = () => {
        setIdCategoria(0);
        setTitulo('');
        setUrlImagem('');
    }

    return (
        <div>
            <Menu />
            <Container>
                <Titulo
                    titulo="Categorias"
                    chamada="Gerencie suas categorias"
                />
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Título</Form.Label>
                                <Form.Control type="text" value={titulo} onChange={event => setTitulo(event.target.value)} placeholder="Tecnologia, Inovação, Startups.." />
                                <Form.Group>
                                    <Form.File id="fileCategoria" label="Imagem da Categoria" onChange={event => uploadFile(event)} />
                                    {urlImagem && <img src={urlImagem} style={{height: '120px'}} />}
                                </Form.Group>
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagem</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categorias.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td><img src={item.urlImagem} style={{ width: '120px' }} /></td>
                                        <td>{item.titulo}</td>
                                        <td>
                                            <Button variant="warning" value={item.idCategoria} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.idCategoria} onClick={event => excluir(event)} style={{ marginLeft: '40px' }}>Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            <Rodape />
        </div>
    )
}

export default CrudCategorias;