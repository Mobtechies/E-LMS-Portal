import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signUp, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()        
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }
        try {
            setError('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            setUser(currentUser.email)
            console.log("User Is "+currentUser.email)
        } catch{
            setError('Failed to create an account')
        }
        setLoading(false)


    }
    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Student Sign Up</h2>
                  
                  {error && <Alert variant="danger">{error}</Alert>}
                  {/* {currentUser && currentUser.email} */}
                  <Form onSubmit={handleSubmit}>
                      <Form.Group id="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" ref= {emailRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" ref= {passwordRef} required></Form.Control>
                      </Form.Group>
                      <Form.Group id="password-confirm">
                      <Form.Label>Password Confirm</Form.Label>
                      <Form.Control type="password" ref= {passwordConfirmRef} required></Form.Control>
                      </Form.Group>
                      <Button  disabled={loading} className="w-100 mt-3" type= "submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
          </div>  
        </>
    )
}
