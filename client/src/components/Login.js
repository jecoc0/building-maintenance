import React, { useRef, useState, useEffect } from 'react'
import { Button, Card, Form, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  let mounted
  async function handleSubmit(e) {
    mounted = true
    e.preventDefault()

    try {
      if (mounted) {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        navigate('/')
      }
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }

  useEffect(() => {
    return () => {
      // this is needed to fix a memory leak issue. We need to clean up the component because there is an async function being called.
      mounted = false
    }
  }, [])


  return (
    <>
      <Container className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh " }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {currentUser?.email}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Button disabled={loading} type="submit" className="w-100 btn-danger" >Log In</Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </Container>

    </>
  )
}

