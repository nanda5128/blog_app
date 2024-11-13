import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react';
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Box sx={{ flexGrow: 1 }}  style={{marginTop:'10%' ,width:'50%', marginLeft:'20%'}}>
    <Grid container spacing={2}>
      <Grid size={4}>
      <TextField fullWidth id='outlined-basic' label="Name" variant='outlined'/>
      </Grid>
      
      <Grid size={4}>
      <TextField fullWidth id='outlined-basic' label="Email" variant='outlined'/>
      </Grid>
      
      <Grid size={12}>
      <TextField fullWidth id='outlined-multiline-flexible' label="Address"  multiline rows={4}/>
      </Grid>
      <Grid size={6}>
      <TextField fullWidth id='outlined-basic' label="Phone Number" variant='outlined'/> 
      </Grid>
      <Grid size={6}>
      <TextField fullWidth id='outlined-basic' label="Password" variant='outlined'/> 
      </Grid>
      <Grid size={12}>
      <Button  variant='contained'>SignUp</Button>
      </Grid>
      <Grid size={12}>
      <Typography > 
      <Link to={'/'} style={{color:"blue"}}>Registered User? Please click here </Link></Typography>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Signup