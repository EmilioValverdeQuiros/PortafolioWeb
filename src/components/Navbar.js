import { AppBar, Divider, Drawer, Icon, IconButton, List, ListItem, ListItemIcon, Toolbar, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import logo from "../components/imgs/Logo.svg"
import {Link, animateScroll as scroll} from "react-scroll"
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"

const links = [
    {
        id: "about",
        text: "Acerca De Mi",
        icon: <InfoTwoToneIcon fontSize="large"/>
    },
    {
        id: "skills",
        text: "Mis Habilidades",
        icon: <EmojiObjectsTwoToneIcon fontSize="large"/>
    },
    {
        id: "work",
        text: "Mis Trabajos",
        icon: <BuildTwoToneIcon fontSize="large"/>
    },
    {
        id: "contact",
        text: "Contáctame",
        icon: <ContactMailTwoToneIcon fontSize="large"/>
    },
]

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
  return (
    <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo"/>
                <List className={classes.menu}>
                    {
                        links.map(({id, text}, index) => (
                            <Link key={index} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-122}>
                                {text}
                            </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" className={classes.menubutton} onClick={() => setOpen(!open)}>
                    <MenuIcon fontSize="large" />
                </IconButton>
            </Toolbar>    
        </AppBar>
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <IconButton  onClick={() => setOpen(false)} className={classes.cancelicon}> 
                <CancelIcon fontSize="large"/>
            </IconButton>
            <Divider/>
            {
                links.map(({id, text, icon}, index) => (
                    <Link key={index} className={classes.sidebar} to={id} spy={true} activeClass="active" smooth={true} duration={500} offset={-114}>
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                    
                                </ListItemIcon>
                            </span>{text}
                        </ListItem>
                    </Link>
                ))
            }
        </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#0E2954",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        "& img": {
            marginTop: "15px"
        }
    },
    logo: {
        height: "7rem",
        objectFit: "contain",
   },
   menu: {
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },
    "& a": {
        color: "#2E8A99",
        fontSize: "1.4rem",
        fontWeight: "bold",
        marginLeft: theme.spacing(3)
    },
    "& a:hover" :{
        cursor: "pointer",
        color: "#2E8A99",
        borderBottom: "3px solid #2E8A99"
    }
   }, 
    menubutton: {
        display: "none",
        [theme.breakpoints.down("sm")]:{
            display: "block",
            color: "#2E8A99",
            position: "absolute",
            top: 40,
            right: 10,
            
        }
    },
    sidebar: {
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
            width: "60vw",
        },
        "& h5": {
            margin: theme.spacing(10, 0, 0, 4),
            fontSize: "1.4rem",
            color: "#0E2954",
            fontWeight: "bold"
        },
        "& h5:hover": {
            color: "#2E8A99",
            cursor: "pointer"
        }
    },
    cancelicon: {
        color: "#0E2954",
        position: "absolute",
        top: 0,
        right: 10
    }
 }))

export default Navbar