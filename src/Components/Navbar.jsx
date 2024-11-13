import { AppBar, Box, Button, IconButton, LinearProgress, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:'0'}}>
    <AppBar position="static">
      <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>
        <Link to={'/blogs'} style={{color:'white'}}><Button color="inherit">Home</Button></Link>
        <Link to={'/addblogs'}  style={{color:'white'}}><Button color="inherit">Add Blog</Button></Link>
        <Link to={'/'}  style={{color:'white'}}><Button color="inherit">Log Out</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
    

  )
}

export default Navbar