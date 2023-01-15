import React  from 'react';

import './App.css';
import ImageAvt from './Image/Logo-NIK Pink.png';
import LoginImage from './/Image/login-image.jpg';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
function App() {
  return (
    <div className="form-login">
            <div className="login-container">
                <div className="login-left">
                  <div className='login-avt'>

                  <img src={ImageAvt} className='login-avt'></img>
                  </div>
                  <div className="login-title">
                  <p>Welcome To</p>
                  <h3 > POS System</h3>
                  </div>
                  <form className="login-form" >
                    <input className="dis-bl login-input" type="username" placeholder="Username" id="username" name="username" />
                    <input className="dis-bl login-input" type="password" placeholder="Password" id="password" name="password" />
                    <div className='check-button'>
                      <FormGroup>
                        <FormControlLabel sx={{ '& .MuiSvgIcon-root': { fontSize: 14 }  }} control={<Checkbox defaultChecked />}  label="Remember me" />
                      </FormGroup>
                    </div>
                    <div className='login-button'>
                      <button className="login-submit" variant="contained" disabled type="submit">Exit</button>
                      <button className="login-submit" variant="contained"  type="submit">Sign In</button>
                    </div>
                    
                  </form>
                </div>
                <div className="login-right">
                  <img src={LoginImage} className='login-logo'></img>
                </div>
            </div>
        </div>
  );
}

export default App;
