import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dashboard from './components/Dashboard'








function App() {

  const [isDashboardVisible, setIsDashboardVisible] = useState(false);

  const handleLogin = () => {

    setIsDashboardVisible(true); 

  };



  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Music App
        </Typography>
      </Toolbar>
    </AppBar>

    {isDashboardVisible ? (
        <Dashboard /> 
      ) : (

        <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Username" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Password" variant="standard" />
        <br />
        
        <Button variant="contained" onClick={handleLogin}>
          Log In
        </Button>
      </Box>
    )}
  </Box>
);
}




  export default App;

