import React, { useState } from 'react'
import logo from "../../assets/Logo.jpeg"
import { AppBar, Toolbar, Box, Typography, Avatar, IconButton, Menu, MenuItem,Drawer,List,ListItem,ListItemText,ListItemButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate()
    const userEmail=localStorage.getItem("userEmail")
    const[anchorEl,setAnchorEl]=useState(null)
    const[drawerOpen,setDrawerOpen]=useState(false)

    const toggleDrawer=(open)=>()=>{
        setDrawerOpen(open)
    }

    const handleOpen=(event)=>{
        setAnchorEl(event.currentTarget)

    }
    const handleClose=()=>{
        setAnchorEl(null)
    }
  return (
    <>
        <AppBar position="fixed" sx={{ backgroundColor: "#feffffff", height:"6rem" }}>
      <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
        {/* LEFT SIDE : LOGO */}
        <Box sx={{display:"flex"}} >
        <IconButton onClick={toggleDrawer(true)} sx={{color:"black", marginLeft:"-1rem"}}>
            <MenuIcon/>
        </IconButton>
        
        <img src={logo} width={80}></img>
        </Box>

    <Box sx={{marginRight:"3rem"}}>
    
    <IconButton onClick={handleOpen} >
        <Avatar/>
    </IconButton>
    <Typography sx={{color:"black"}}>{userEmail||"Admin"}</Typography>
    
    <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    <MenuItem onClick={handleClose}>Profile</MenuItem>
    <MenuItem onClick={()=>{
        localStorage.removeItem("userEmail")
        navigate("/")
    }}>Logout</MenuItem>

    </Menu>
</Box>

      </Toolbar>
    </AppBar>
    
   <Toolbar sx={{height:"6rem"}} />
   <Drawer 
        anchor='left'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
            PaperProps={{
            sx: {
                backgroundColor:"rgba(50, 51, 51, 1)",
                color: "white",
                width: 240,
                top: "6rem",
                height: "calc(100% - 6rem)"
            }
            }}

        >

        <List>
            <ListItem disablePadding >
            <ListItemButton
            sx={{
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          "&:hover": {
            backgroundColor: "#3a3a3a"
          }
        }}
            onClick={()=>{
                navigate("/dashboard")
                setDrawerOpen(false)
            }}
            >
                <ListItemText primary="Dashboard"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton
            sx={{borderBottom: "1px solid rgba(255,255,255,0.2)",
          "&:hover": {
            backgroundColor: "#3a3a3a"}}}
            onClick={()=>{
                navigate("/reports")
                setDrawerOpen(false)
            }}
            >
            <ListItemText primary="Reports"/>
            </ListItemButton>
            </ListItem>
        </List>

        

        </Drawer>
</>
  )
}

export default Navbar
