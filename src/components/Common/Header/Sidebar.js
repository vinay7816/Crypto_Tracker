import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Sidebar() {
  const [open, setopen] = useState(false);
  const handleclose=()=>{
    setopen(false);
  }

  return (
    <div>
      <IconButton
        onClick={() => {
          setopen(true);
        }}
      >
        <div className="menu-button">
        <MenuRoundedIcon  />
        </div>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={handleclose}
      >
        <div className="drawer-main">
        <Link to="/">
            <p className="link" onClick={handleclose}>Home</p></Link>
          <Link to="/compare"><p className="link" onClick={handleclose}>Compare</p></Link>
          <Link to="/watchlist"><p className="link" onClick={handleclose}>Watchlist</p></Link>
          <Link to="/dashboard"><p className="link" onClick={handleclose}>Dashboard</p></Link>
        </div>
      </Drawer>
    </div>
  );
}
