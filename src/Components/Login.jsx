import { Button, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{margin :"15%"}}>
        <Typography variant='h3' style={{color:"blue"}}>BlogApp Login</Typography><br></br><br></br>
        <TextField id='outlined-basic' label="Email" variant='outlined'/>
         <br></br><br></br>
        <TextField id='outlined-basic' label="Password" variant='outlined'/>
        <br></br><br></br>
        <Button variant='contained' color='error'>Login</Button>
        <br></br><br></br>
        <Typography > 
          <Link to={'/signup'} style={{color:"blue"}}>New User? Please click here </Link></Typography>
    </div>
  )
}

export default Login