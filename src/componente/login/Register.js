import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { registerAsync } from '../../redux/actions/actionLogin';

const Register = () => {
    const dispatch = useDispatch()

  const  [formValue, handleInputChange, rest]=  useForm({
      nombre:'',
      email: '',
      pass1: '',
      pass2: ''
  })

  const {nombre, email, pass1, pass2} = formValue

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(formValue)
      dispatch(registerAsync(email, pass1, nombre))
      rest()
  }
    return (
        <div>
          <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                       
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                       
                  
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                     
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>
  
        </div>
    );
};

export default Register;