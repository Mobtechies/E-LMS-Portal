import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Background from './images/studentbackground.jpg'
import {Link , useHistory} from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import { Form, Button,  Card, Alert } from 'react-bootstrap'


 



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

export default function SignInSide() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const classes = useStyles();
  const { login, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e){
      e.preventDefault()        
      try {
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          console.log("LOGGED IN USER" +currentUser.email)
          history.push('/student-dashboard')
      } catch{
          setError('Failed to sign in')
      }
      setLoading(false)


  }

  
  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          {/* <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Student Sign Up</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
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
        </> */}
        <>
        <Card>
        <Card.Body>
        <Typography component="h1" variant="h5">
            Student Sign in
          </Typography>
          {error && <Alert variant="danger">{error}</Alert>}

          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              type="email"
              inputRef = {emailRef}
              autoFocus
              

            />
            
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef = {passwordRef}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              
            >
            <Link style={{ color: '#FFF', textDecoration:'none'}} to ="student-dashboard">Sign In</Link>
              
            </Button> */}
            <Button  disabled={loading} className="w-100 mt-3" type= "submit">Sign In</Button>

            <Grid container>
              <Grid item xs>
                <Link to = '/' variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card.Body>
        </Card>
        </>
        </div>
      </Grid>
    </Grid>
  );
}
