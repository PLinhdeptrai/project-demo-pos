import './App.css';

import LogoHeader from './Image/Logo-NIK Pink.png';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const d = new Date()
  const months = ['Tháng Giêng', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
  const year = d.getFullYear()
  const day = d.getDay()
  const month = months[d.getMonth()]
  const hour = d.getHours()
  const minute = d.getMinutes()
  const second = d.getSeconds()
  var ampm = hour >= 12 ? 'PM' : 'AM';

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">

      <div className='menu-container'>
        <div className='left'>

        </div>
        <div className='center'>
          <div className='header-menu'>
            <div className='header-logo'>
              <img src={LogoHeader}></img>
            </div>

            <div className='header-button'>
              <Box sx={{ '& button': { m: 1 } }}>
                <div>
                  <Button variant="text">MENU</Button>
                  <Button variant="text">Customer Waiting List</Button>
                  <Button variant="text" className='working-button'>Working Station</Button>
                </div>
              </Box>
            </div>
            <div className='header-profile'>

              <Button className='profile'
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
              >
                <Avatar alt="Remy Sharp" src="https://media.istockphoto.com/id/504222090/vi/anh/m%C3%A8o.jpg?s=2048x2048&w=is&k=20&c=Y8WtngtzimgBI6qzzqUx_JF5rUt2z1SJXUpcHE9Ka1g=" />
                <div className='user-name'>
                  <p>Staff</p>
                  <p className='user-id'>staff@pos.com</p>
                </div>
              </Button>

            </div>

          </div>
          <div className='body-menu'>
            <BasicModal></BasicModal>

            
          </div>
          <div className='footer-menu'>
            <div className='footer-button'>
              <Button className='footer-button-left' size="small">Sign In</Button>
              <Button className='footer-button-right' size="small">Sign Out</Button>
            </div>
            <div className='footer-time'>
              <p>{hour}:{minute}:{second} {ampm}</p>
              <p>{day} {month} {year}</p>
            </div>
          </div>
        </div>
        <div className='right'>

        </div>
      </div>
    </div>
  );
}

export default App;
