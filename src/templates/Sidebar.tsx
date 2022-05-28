import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';

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
      >
        <p>開けましたね</p>
      </Drawer>
    </>
  );
};

export default Sidebar;
