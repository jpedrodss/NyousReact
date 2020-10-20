import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import logo from '../../assets/img/logo.jpg'
import { Form, Container, Button } from 'react-bootstrap'
import './index.css'

const Login = () => {
    return(
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin'>
                    <div className="text-center">
                        <img src={logo} alt="Nyous" style={{width : "64px"}}/>
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Informe o email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Informe a senha" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                        <br/><br/>
                        <a href="/cadastrar" style={{marginTop: '30px'}}>Não tenho conta!</a>
                    </Form>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Login;