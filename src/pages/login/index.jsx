import React, { useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { useHistory } from "react-router-dom";
import logo from '../../assets/img/logo.jpg'
import { Form, Container, Button } from 'react-bootstrap'
import './index.css'

const Login = () => {
    let history = useHistory();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const logar = (event) => {
        event.preventDefault();

        fetch('https://localhost:44313/api/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            // Verifica se a validação for OK e caso seja, informa a resposta
            if(response.ok)
                return response.json();

            // Caso validação não seja OK informa um alert
            alert('Dado inválido');
        })
        .then(data => {
            console.log(data);
            
            // Armazena o token
            localStorage.setItem('token-nyous', data.token);
            
            // Após efetuar login encaminha a página de eventos
            history.push("/eventos")
        })
        .catch(err => console.error(err));
    }

    return(
        <div>
            <Menu />
            <Container className='form-height'>
                <Form className='form-signin' onSubmit={event => logar(event)}>
                    <div className="text-center">
                        <img src={logo} alt="Nyous" style={{width : "64px"}}/>
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    <hr/>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="Informe o email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" value={senha} onChange={event => setSenha(event.target.value)} placeholder="Informe a senha" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>

                    <br/><br/>
                    <a href="/cadastrar" style={{marginTop: '30px'}}>Não tenho conta!</a>

                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Login;