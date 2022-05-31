import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  const [open, setopen] = useState(false);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <>
      {/* <button type="button" onClick={toggleOpen}>
        サイドバー
      </button> */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        onClose={toggleOpen}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20vw' },
        }}
      >
        <List>
          {/* <p>あああ</p> */}
          <Link to="/compare">
            <ListItem button>
              <ListItemText primary="銘柄比較" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
