
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Allcontacts from './components/Allcontacts';
import Recent from './components/Recent';
import Favorite from './components/Favorite';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { allReducers } from './reducer';
import AddContactModal from './components/addcontactmodal';



const store= createStore(
  allReducers
)
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);

  return (
    <Provider store={store}>
     
    <Box sx={{ width: 500,margin:"auto" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="All Contacts" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Favorites" icon={<LocationOnIcon />} />
      </BottomNavigation>
      
        {(value===0)&&(<Recent/>)}
         { (value===1)&&(<Allcontacts/>)}
         { (value===2)&&(<Favorite/>)}
      <AddContactModal/>       
      
    </Box>
    </Provider>
  );
}