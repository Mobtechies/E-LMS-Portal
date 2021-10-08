import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';





export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Data" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Dropdown>
  <Dropdown.Toggle variant="white" id="dropdown-basic">
  {/* <Link style={{ color: 'black', textDecoration:'none' }} >Courses</Link> */}


  </Dropdown.Toggle>
  <Dropdown.Menu>
  <Link style={{ color: 'black', textDecoration:'none' }} to= '/video-call'>Join Class</Link>

    <Dropdown.Item href="#/action-1">Registered Courses</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Register for Classes</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Drop Classes</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Assignments</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Transcript</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <Link style={{ color: 'black', textDecoration:'none' }} to= '/report'>Reports</Link>
      
    </ListItem>

    <>
 
    </>
    
  </div>
);
